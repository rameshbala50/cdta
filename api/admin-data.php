<?php
/**
 * CDTA 2026 — Admin Data API
 * Stores users, login history, usage log, settings as JSON files on the server.
 *
 * Endpoints (POST with JSON body):
 *   action=load&type=users|login|usage|settings  → returns data
 *   action=save&type=users|login|usage|settings&data=...  → saves data
 *   action=auth&user=...&pass=...  → validates login (returns user object)
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(204); exit; }

// Data directory — outside web root for security
define('DATA_DIR', __DIR__ . '/../admin-data/');

// Ensure data directory exists
if (!is_dir(DATA_DIR)) {
    mkdir(DATA_DIR, 0755, true);
}

// Valid data types
$VALID_TYPES = ['users', 'login', 'usage', 'activity', 'settings'];

// Admin password for auth
define('ADMIN_PASSWORD', 'ramesh123');

// Auth check helper — returns true if the request is authenticated
function isAuthenticated($body) {
    return isset($body['auth']) && $body['auth'] === ADMIN_PASSWORD;
}

// Read request
$body = json_decode(file_get_contents('php://input'), true);
if (!$body || !isset($body['action'])) {
    echo json_encode(['ok' => false, 'error' => 'Missing action']);
    exit;
}

$action = $body['action'];
$type = $body['type'] ?? '';

function dataPath($type) {
    return DATA_DIR . $type . '.json';
}

function loadData($type) {
    $path = dataPath($type);
    if (!file_exists($path)) return null;
    $content = file_get_contents($path);
    if ($content === false) return null;
    return json_decode($content, true);
}

function saveData($type, $data) {
    $path = dataPath($type);
    return file_put_contents($path, json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
}

switch ($action) {
    case 'load':
        if (!in_array($type, $VALID_TYPES)) {
            echo json_encode(['ok' => false, 'error' => 'Invalid type']);
            exit;
        }
        // Loading users requires auth (contains passwords)
        if ($type === 'users' && !isAuthenticated($body)) {
            echo json_encode(['ok' => false, 'error' => 'Authentication required']);
            exit;
        }
        $data = loadData($type);
        echo json_encode(['ok' => true, 'data' => $data]);
        break;

    case 'save':
        if (!in_array($type, $VALID_TYPES)) {
            echo json_encode(['ok' => false, 'error' => 'Invalid type']);
            exit;
        }
        if (!isset($body['data'])) {
            echo json_encode(['ok' => false, 'error' => 'Missing data']);
            exit;
        }
        // Append operations (login/usage logging) don't require auth
        $isAppend = isset($body['append']) && $body['append'] && in_array($type, ['login', 'usage', 'activity']);
        if (!$isAppend && !isAuthenticated($body)) {
            echo json_encode(['ok' => false, 'error' => 'Authentication required']);
            exit;
        }
        // For login history, append instead of replace
        if ($type === 'login' && $isAppend) {
            $existing = loadData('login') ?? [];
            if (!is_array($existing)) $existing = [];
            // Prepend new entry
            array_unshift($existing, $body['data']);
            // Cap at 500 entries
            if (count($existing) > 500) $existing = array_slice($existing, 0, 500);
            $result = saveData('login', $existing);
        }
        // For usage log, append instead of replace
        else if ($type === 'usage' && $isAppend) {
            $existing = loadData('usage') ?? [];
            if (!is_array($existing)) $existing = [];
            array_unshift($existing, $body['data']);
            if (count($existing) > 1000) $existing = array_slice($existing, 0, 1000);
            $result = saveData('usage', $existing);
        }
        // For activity log, append instead of replace
        else if ($type === 'activity' && $isAppend) {
            $existing = loadData('activity') ?? [];
            if (!is_array($existing)) $existing = [];
            array_unshift($existing, $body['data']);
            if (count($existing) > 200) $existing = array_slice($existing, 0, 200);
            $result = saveData('activity', $existing);
        }
        else {
            $result = saveData($type, $body['data']);
        }
        echo json_encode(['ok' => $result !== false]);
        break;

    case 'clear':
        if (!isAuthenticated($body)) {
            echo json_encode(['ok' => false, 'error' => 'Authentication required']);
            exit;
        }
        if (!in_array($type, $VALID_TYPES)) {
            echo json_encode(['ok' => false, 'error' => 'Invalid type']);
            exit;
        }
        $path = dataPath($type);
        if (file_exists($path)) unlink($path);
        echo json_encode(['ok' => true]);
        break;

    default:
        echo json_encode(['ok' => false, 'error' => 'Unknown action']);
}

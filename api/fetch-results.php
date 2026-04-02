<?php
/**
 * CDTA League Results Fetcher
 * Fetches team detail page from league.cdta.co.in and extracts match results.
 */
header('Content-Type: application/json; charset=utf-8');

$teamId = trim($_GET['teamId'] ?? '');
if (empty($teamId) || !preg_match('/^[a-f0-9]+$/', $teamId)) {
    echo json_encode(['ok' => false, 'error' => 'Invalid teamId']);
    exit;
}

$url = "https://league.cdta.co.in/Teams/Team-Details.php?id=$teamId";

$ch = curl_init();
curl_setopt_array($ch, [
    CURLOPT_URL            => $url,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_TIMEOUT        => 20,
    CURLOPT_SSL_VERIFYPEER => false,
    CURLOPT_USERAGENT      => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
]);
$html = curl_exec($ch);
$code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if (!$html || $code >= 400) {
    echo json_encode(['ok' => false, 'error' => "HTTP $code"]);
    exit;
}

echo json_encode(['ok' => true, 'html' => $html]);

# Download all player photos from cdta.co.in and save locally
# Also updates data files to use local paths

$root = $PSScriptRoot
$photosDir = Join-Path $root 'photos'

# Division map: file -> div folder name
$divisions = @(
    @{ file='data/division-i.js'; var='DIV_I_PLAYERS'; div='div-i' },
    @{ file='data/division-c.js'; var='DIV_C_PLAYERS'; div='div-c' },
    @{ file='data/division-f.js'; var='DIV_F_PLAYERS'; div='div-f' },
    @{ file='data/division-h.js'; var='DIV_H_PLAYERS'; div='div-h' }
)

function Normalize-Name($name) {
    $n = $name.ToLower() -replace '[^a-z0-9]+', '-' -replace '^-|-$', ''
    if ($n.Length -gt 40) { $n = $n.Substring(0, 40) -replace '-$', '' }
    return $n
}

$totalDown = 0; $totalSkip = 0; $totalFail = 0
$updates = @{} # file -> list of {oldUrl, newPath}

foreach ($d in $divisions) {
    $filePath = Join-Path $root $d.file
    $content = Get-Content $filePath -Raw -Encoding UTF8

    # Extract photo URLs and team/name info using regex
    # Pattern: { name:'...', team:'...', ... photo:'...' }
    $pattern = "name:'([^']+)'[^}]*?team:'([^']+)'[^}]*?photo:'([^']+)'"
    $matches = [regex]::Matches($content, $pattern)

    Write-Host "=== $($d.div) === ($($matches.Count) players with photos)" -ForegroundColor Cyan
    $fileUpdates = @()

    foreach ($m in $matches) {
        $name = $m.Groups[1].Value
        $team = $m.Groups[2].Value.ToLower()
        $photoUrl = $m.Groups[3].Value
        $safeName = Normalize-Name $name

        # Determine extension from URL
        $ext = '.jpg'
        if ($photoUrl -match '\.(jpeg|jpg|png|gif|JPG|JPEG|PNG)$') { $ext = '.' + $Matches[1].ToLower() }
        if ($ext -eq '.jpeg') { $ext = '.jpg' }

        $localDir = Join-Path $photosDir (Join-Path $d.div $team)
        $localFile = Join-Path $localDir ($safeName + $ext)
        $relativePath = "photos/$($d.div)/$team/$safeName$ext"

        # Create dir
        if (!(Test-Path $localDir)) { New-Item -ItemType Directory -Path $localDir -Force | Out-Null }

        # Download if not exists
        if (Test-Path $localFile) {
            $totalSkip++
        } else {
            try {
                Invoke-WebRequest -Uri $photoUrl -OutFile $localFile -UseBasicParsing -TimeoutSec 15
                $totalDown++
                Write-Host "  DL: $relativePath" -ForegroundColor Green
            } catch {
                $totalFail++
                Write-Host "  FAIL: $name ($photoUrl) - $_" -ForegroundColor Red
                continue
            }
        }

        $fileUpdates += @{ oldUrl=$photoUrl; newPath=$relativePath }
    }

    # Update data file: replace photo URLs with local paths
    $updatedContent = $content
    foreach ($u in $fileUpdates) {
        $escaped = [regex]::Escape($u.oldUrl)
        $updatedContent = $updatedContent -replace $escaped, $u.newPath
    }
    if ($updatedContent -ne $content) {
        Set-Content $filePath $updatedContent -NoNewline -Encoding UTF8
        Write-Host "  Updated $($d.file) ($($fileUpdates.Count) photo paths)" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "Done! Downloaded: $totalDown | Skipped: $totalSkip | Failed: $totalFail" -ForegroundColor Cyan

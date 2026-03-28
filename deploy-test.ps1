# CDTA deploy script for TEST environment with auto cache-busting
param([switch]$DryRun)

# Auto-update cache-bust version in index.html before upload
$indexFile = Join-Path $PSScriptRoot "index.html"
if (Test-Path $indexFile) {
    $ts = Get-Date -Format "yyyyMMddHHmm"
    $content = Get-Content $indexFile -Raw
    $updated = $content -replace '\?v=\d+', "?v=$ts"
    if ($updated -ne $content) {
        Set-Content $indexFile $updated -NoNewline
        Write-Host "Cache-bust version updated to $ts" -ForegroundColor Yellow
    }
}

# Read deploy-test.env
$envFile = Join-Path $PSScriptRoot "deploy-test.env"
if (!(Test-Path $envFile)) { Write-Host "ERROR: deploy-test.env not found" -ForegroundColor Red; exit 1 }
Get-Content $envFile | ForEach-Object {
    if ($_ -match '^\s*([A-Z_]+)\s*=\s*(.+)$') {
        Set-Variable -Name $Matches[1] -Value $Matches[2].Trim()
    }
}

Write-Host "===============================================" -ForegroundColor Cyan
Write-Host " CDTA 2026 - Deploying to GoDaddy TEST" -ForegroundColor Cyan
Write-Host "===============================================" -ForegroundColor Cyan
Write-Host " Host: $FTP_HOST"
Write-Host " Path: $FTP_REMOTE_DIR"
Write-Host " URL: http://akilanramesh.com$FTP_REMOTE_DIR"
Write-Host ""

# Files to exclude
$exclude = @("deploy.bat","deploy.ps1","deploy.env","deploy-test.bat","deploy-test.ps1","deploy-test.env","cdta2026_dashboard_w8.html","cdta2026_discussion_w8.md",".gitignore")

# Collect files
$root = $PSScriptRoot
$files = @()
Get-ChildItem -Path $root -Recurse -File | ForEach-Object {
    $rel = $_.FullName.Substring($root.Length + 1).Replace('\','/')
    if ($exclude -notcontains $rel -and $rel -notmatch '^\.' ) {
        $files += $rel
    }
}

# Create subdirectories
$dirs = $files | ForEach-Object { Split-Path $_ -Parent } | Where-Object { $_ } | Sort-Object -Unique
Write-Host "Creating directories..." -ForegroundColor Yellow
foreach ($d in $dirs) {
    $d = $d.Replace('\','/')
    try {
        $ftp = [System.Net.FtpWebRequest]::Create("ftp://${FTP_HOST}${FTP_REMOTE_DIR}/${d}/")
        $ftp.Method = [System.Net.WebRequestMethods+Ftp]::MakeDirectory
        $ftp.Credentials = New-Object System.Net.NetworkCredential($FTP_USER, $FTP_PASS)
        $ftp.UsePassive = $true
        $response = $ftp.GetResponse()
        $response.Close()
    } catch {}
}

# Upload files
Write-Host ""
Write-Host "Uploading $($files.Count) files..." -ForegroundColor Yellow
$ok = 0; $fail = 0
for ($i = 0; $i -lt $files.Count; $i++) {
    $f = $files[$i]
    $num = $i + 1
    if ($DryRun) {
        Write-Host "  [$num/$($files.Count)] $f (dry run)" -ForegroundColor Gray
        $ok++
        continue
    }
    try {
        $localPath = Join-Path $root $f.Replace('/','\\')
        $remotePath = "ftp://${FTP_HOST}${FTP_REMOTE_DIR}/${f}"
        $ftp = [System.Net.FtpWebRequest]::Create($remotePath)
        $ftp.Method = [System.Net.WebRequestMethods+Ftp]::UploadFile
        $ftp.Credentials = New-Object System.Net.NetworkCredential($FTP_USER, $FTP_PASS)
        $ftp.UsePassive = $true
        $ftp.UseBinary = $true
        $content = [System.IO.File]::ReadAllBytes($localPath)
        $stream = $ftp.GetRequestStream()
        $stream.Write($content, 0, $content.Length)
        $stream.Close()
        $response = $ftp.GetResponse()
        $response.Close()
        Write-Host "  [$num/$($files.Count)] $f" -ForegroundColor Green
        $ok++
    } catch {
        Write-Host "  [$num/$($files.Count)] $f - FAILED: $_" -ForegroundColor Red
        $fail++
    }
}

Write-Host ""
Write-Host "===============================================" -ForegroundColor Cyan
Write-Host " Upload Complete: $ok OK, $fail FAILED" -ForegroundColor Cyan
Write-Host "===============================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Access test deployment at:" -ForegroundColor Yellow
Write-Host "  http://akilanramesh.com/cdta-workver/" -ForegroundColor Cyan
Write-Host ""

@echo off
powershell -ExecutionPolicy Bypass -File "%~dp0deploy-test.ps1" %*
pause

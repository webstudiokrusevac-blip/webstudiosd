@echo off
setlocal
cd /d "%~dp0"

echo Pokrecem lokalni sajt Web Studio SD...
echo.
echo Kada vidis poruku "Ready", otvori:
echo http://127.0.0.1:3000
echo.

start "" cmd /c "timeout /t 5 >nul && start http://127.0.0.1:3000"

if exist ".tools\node.exe" if exist ".tools\npm\bin\npm-cli.js" (
  if exist "node_modules\next\dist\bin\next" (
    ".tools\node.exe" "node_modules\next\dist\bin\next" dev -H 0.0.0.0 -p 3000
    goto :end
  )

  ".tools\node.exe" ".tools\npm\bin\npm-cli.js" install --cache .npm-cache
  ".tools\node.exe" "node_modules\next\dist\bin\next" dev -H 0.0.0.0 -p 3000
  goto :end
)

npm run dev -- --hostname 0.0.0.0 --port 3000

:end
echo.
echo Server je zaustavljen ili je doslo do greske.
pause
endlocal

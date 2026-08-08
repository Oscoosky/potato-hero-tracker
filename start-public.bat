@echo off
chcp 65001 >nul
cd /d "C:\Users\Oscoosky\Desktop\新建文件夹\potato-hero-tracker"

echo 🥔 土豆侠追踪器 - 公网服务启动中...
echo.

:: Start local server
start "土豆侠-服务器" /min cmd /c "node server.js"
echo ✅ 本地服务器已启动 (端口3000)

:: Wait for server
timeout /t 2 /nobreak >nul

:: Loop: keep tunnel alive
:loop
echo 🔄 正在建立公网隧道...
npx --yes localtunnel --port 3000 --print-url > tunnel_url.txt 2>&1
set /p TUNNEL_URL=<tunnel_url.txt
echo 🌍 公网地址: %TUNNEL_URL%
echo.
echo 隧道已断开，5秒后自动重连...
timeout /t 5 /nobreak >nul
goto loop

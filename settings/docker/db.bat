@echo off
setlocal

set "SCRIPT_DIR=%~dp0"
set "COMPOSE_FILE=%SCRIPT_DIR%docker-compose.yml"

if not exist "%COMPOSE_FILE%" (
    echo Compose file not found: %COMPOSE_FILE%
    exit /b 1
)

if "%~1"=="" (
    echo Usage: %0 action [services...]
    echo Example: %0 up mongo postgres
    echo Example: %0 down mongo postgres
    exit /b 1
)

set "ACTION=%~1"
shift

if "%~1"=="" (
    echo Please specify the services to manage.
    exit /b 1
)

set "SERVICES="
:loop
if "%~1"=="" goto end
set "SERVICES=%SERVICES% %~1"
shift
goto loop

:end
set "DOCKER_COMPOSE_CMD="
where docker-compose >nul 2>&1
if %ERRORLEVEL% equ 0 (
    set "DOCKER_COMPOSE_CMD=docker-compose"
) else (
    where docker >nul 2>&1
    if not %ERRORLEVEL% equ 0 (
        echo Docker CLI was not found in PATH.
        exit /b 1
    )
    set "DOCKER_COMPOSE_CMD=docker compose"
)

set "OPTIONS="
if /I "%ACTION%"=="up" (
    set "OPTIONS=-d"
    echo Removing stopped containers before up...
    call %DOCKER_COMPOSE_CMD% -f "%COMPOSE_FILE%" rm -f %SERVICES% >nul 2>&1
)

echo Running Docker Compose %ACTION% with services:%SERVICES%
call %DOCKER_COMPOSE_CMD% -f "%COMPOSE_FILE%" %ACTION% %OPTIONS% %SERVICES%

if %ERRORLEVEL% equ 0 (
    echo Docker Compose %ACTION% successfully.
) else (
    echo Docker Compose failed to %ACTION%.
    exit /b %ERRORLEVEL%
)
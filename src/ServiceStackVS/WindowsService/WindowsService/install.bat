@echo off

REM Script thanks to Ben Gripka and his StackOverflow answer http://stackoverflow.com/a/10052222/670151

:: BatchGotAdmin
:-------------------------------------
REM  --> Check for permissions
>nul 2>&1 "%SYSTEMROOT%\system32\cacls.exe" "%SYSTEMROOT%\system32\config\system"

REM --> If error flag set, we do not have admin.
if '%errorlevel%' NEQ '0' (
	REM Reset error level
	set errorlevel=0
    echo Requesting administrative privileges...
    goto UACPrompt
) else ( goto gotAdmin )

:UACPrompt
    echo Set UAC = CreateObject^("Shell.Application"^) > "%temp%\getadmin.vbs"
    set params = %*:"=""
    echo UAC.ShellExecute "cmd.exe", "/c %~s0 %params%", "", "runas", 1 >> "%temp%\getadmin.vbs"
	if '%errorlevel%' NEQ '0' (
		echo Failed to request admin rights
		PAUSE
		del "%temp%\getadmin.vbs"
		exit /B
	)
    "%temp%\getadmin.vbs"
    del "%temp%\getadmin.vbs"
    exit /B

:gotAdmin
    pushd "%CD%"
    CD /D "%~dp0"
:--------------------------------------

REM INSTALL THIS WINDOWS SERVICE:
REM 1. Build in Release mode

SET INSTALL_UTL="%SYSTEMROOT%\Microsoft.NET\Framework\v4.0.30319\InstallUtil.exe"

%INSTALL_UTL% bin\Release\WindowsService.exe

PAUSE
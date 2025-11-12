@echo off
REM Home Harmony - Quick GitHub Setup Script for Windows
echo 🏠 Home Harmony - GitHub Setup
echo ================================

REM Check if git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Git is not installed. Please install Git first.
    echo    Download from: https://git-scm.com/
    pause
    exit /b 1
)

echo ✅ Git found!

REM Get repository details
echo.
set /p username="📝 Enter your GitHub username: "
set /p repo_name="📝 Enter repository name (default: home-harmony): "
if "%repo_name%"=="" set repo_name=home-harmony

echo.
echo 📋 Repository details:
echo    Username: %username%
echo    Repository: %repo_name%
echo    URL: https://github.com/%username%/%repo_name%

REM Confirm
echo.
set /p confirm="🚀 Continue with setup? (y/N): "
if /i not "%confirm%"=="y" (
    echo ❌ Setup cancelled.
    pause
    exit /b 1
)

echo.
echo 🔧 Setting up Git repository...

REM Initialize git if not already done
if not exist ".git" (
    git init
    echo ✅ Git repository initialized
)

REM Add all files
git add .
echo ✅ Files added to Git

REM Initial commit
git commit -m "Initial commit: Home Harmony PWA"
echo ✅ Initial commit created

REM Add remote origin
git remote remove origin 2>nul
git remote add origin "https://github.com/%username%/%repo_name%.git"
echo ✅ Remote origin set

REM Set main branch
git branch -M main

echo.
echo 📡 Ready to push to GitHub!
echo.
echo Next steps:
echo 1. Create the repository on GitHub: https://github.com/new
echo 2. Repository name: %repo_name%
echo 3. Make it public
echo 4. Don't add README (we already have one)
echo 5. Run: git push -u origin main
echo.
echo Then enable GitHub Pages in repository Settings → Pages
echo.
echo 📖 For detailed instructions, see GITHUB-DEPLOYMENT.md
echo.
echo 🎉 Your app will be live at: https://%username%.github.io/%repo_name%

pause

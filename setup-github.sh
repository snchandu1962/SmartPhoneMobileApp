#!/bin/bash

# Home Harmony - Quick GitHub Setup Script
echo "🏠 Home Harmony - GitHub Setup"
echo "================================"

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    echo "   Download from: https://git-scm.com/"
    exit 1
fi

echo "✅ Git found!"

# Get repository details
echo ""
read -p "📝 Enter your GitHub username: " username
read -p "📝 Enter repository name (default: home-harmony): " repo_name
repo_name=${repo_name:-home-harmony}

echo ""
echo "📋 Repository details:"
echo "   Username: $username"
echo "   Repository: $repo_name"
echo "   URL: https://github.com/$username/$repo_name"

# Confirm
echo ""
read -p "🚀 Continue with setup? (y/N): " confirm
if [[ ! $confirm =~ ^[Yy]$ ]]; then
    echo "❌ Setup cancelled."
    exit 1
fi

echo ""
echo "🔧 Setting up Git repository..."

# Initialize git if not already done
if [ ! -d ".git" ]; then
    git init
    echo "✅ Git repository initialized"
fi

# Add all files
git add .
echo "✅ Files added to Git"

# Initial commit
git commit -m "Initial commit: Home Harmony PWA"
echo "✅ Initial commit created"

# Add remote origin
git remote remove origin 2>/dev/null || true
git remote add origin "https://github.com/$username/$repo_name.git"
echo "✅ Remote origin set"

# Set main branch
git branch -M main

echo ""
echo "📡 Ready to push to GitHub!"
echo ""
echo "Next steps:"
echo "1. Create the repository on GitHub: https://github.com/new"
echo "2. Repository name: $repo_name"
echo "3. Make it public"
echo "4. Don't add README (we already have one)"
echo "5. Run: git push -u origin main"
echo ""
echo "Then enable GitHub Pages in repository Settings → Pages"
echo ""
echo "📖 For detailed instructions, see GITHUB-DEPLOYMENT.md"
echo ""
echo "🎉 Your app will be live at: https://$username.github.io/$repo_name"

#!/bin/bash

# iPhone Deployment Setup Script for Home Harmony PWA
echo "📱 iPhone Deployment Setup - Home Harmony"
echo "=========================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo ""
echo -e "${BLUE}🔍 Checking deployment status...${NC}"

# Check if GitHub Pages is enabled by testing the URL
echo ""
echo "Testing GitHub Pages URL..."
if curl -s --head "https://snchandu1962.github.io/SmartPhoneMobileApp/" | head -n 1 | grep -q "200 OK"; then
    echo -e "${GREEN}✅ GitHub Pages is LIVE!${NC}"
    echo -e "${GREEN}📱 Your app is ready for iPhone installation!${NC}"
    echo ""
    echo -e "${YELLOW}🚀 iPhone Installation Instructions:${NC}"
    echo "1. Open Safari on your iPhone"
    echo "2. Go to: https://snchandu1962.github.io/SmartPhoneMobileApp/"
    echo "3. Tap Share button (📤)"
    echo "4. Tap 'Add to Home Screen'"
    echo "5. Tap 'Add'"
    echo ""
    echo -e "${GREEN}🎉 Your Home Harmony app will appear on your iPhone home screen!${NC}"
else
    echo -e "${RED}❌ GitHub Pages not enabled yet${NC}"
    echo ""
    echo -e "${YELLOW}📋 To enable GitHub Pages:${NC}"
    echo "1. Go to: https://github.com/snchandu1962/SmartPhoneMobileApp"
    echo "2. Click 'Settings' tab"
    echo "3. Scroll to 'Pages' in sidebar"
    echo "4. Under 'Source', select:"
    echo "   - Deploy from a branch"
    echo "   - Branch: main"
    echo "   - Folder: / (root)"
    echo "5. Click 'Save'"
    echo "6. Wait 2-5 minutes for deployment"
    echo ""
    echo "Then run this script again to check status!"
fi

echo ""
echo -e "${BLUE}📊 Project Files Status:${NC}"

# Check if key files exist
files=("index.html" "manifest.json" "sw.js" "style.css" "script.js")
for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo -e "✅ $file"
    else
        echo -e "${RED}❌ $file (missing)${NC}"
    fi
done

echo ""
echo -e "${BLUE}📱 PWA Icons Status:${NC}"

# Check if icons exist
icon_sizes=(72 96 128 144 152 192 384 512)
missing_icons=0
for size in "${icon_sizes[@]}"; do
    icon_file="icons/icon-${size}x${size}.png"
    if [ -f "$icon_file" ]; then
        echo -e "✅ ${size}x${size}px icon"
    else
        echo -e "${RED}❌ ${size}x${size}px icon (missing)${NC}"
        missing_icons=$((missing_icons + 1))
    fi
done

if [ $missing_icons -eq 0 ]; then
    echo -e "${GREEN}🎨 All PWA icons are ready!${NC}"
else
    echo -e "${YELLOW}⚠️  $missing_icons icons missing. Generate them using generate-icons.html${NC}"
fi

echo ""
echo -e "${BLUE}📋 Alternative Deployment Options:${NC}"
echo "If GitHub Pages isn't working:"
echo "• Netlify: https://netlify.com (drag & drop)"
echo "• Vercel: https://vercel.com (GitHub import)"  
echo "• Firebase: https://firebase.google.com"

echo ""
echo -e "${BLUE}📖 Complete Instructions:${NC}"
echo "See IPHONE-DEPLOYMENT.md for detailed iPhone setup guide"

echo ""
echo -e "${GREEN}🏠 Ready to control your smart home from your iPhone! 📱✨${NC}"

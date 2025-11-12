# SmartPhoneMobileApp

A mobile application built with React Native for browsing and managing smartphones.

## Features

- **Home Screen**: Welcome screen with feature highlights and information
- **Products Screen**: Browse available smartphones with detailed product cards
- **Profile Screen**: User profile management and settings
- **Navigation**: Smooth navigation between screens using React Navigation
- **Responsive UI**: Clean and modern user interface with emoji icons

## Tech Stack

- React Native 0.72.0
- React Navigation 6.x
- React 18.2.0

## Project Structure

```
SmartPhoneMobileApp/
├── App.js                 # Main app component with navigation setup
├── index.js              # Entry point
├── src/
│   ├── screens/          # Screen components
│   │   ├── HomeScreen.js
│   │   ├── ProductsScreen.js
│   │   └── ProfileScreen.js
│   └── components/       # Reusable components
│       └── ProductCard.js
├── package.json
├── app.json
├── babel.config.js
└── metro.config.js
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/snchandu1962/SmartPhoneMobileApp.git
cd SmartPhoneMobileApp
```

2. Install dependencies:
```bash
npm install
```

3. Install iOS dependencies (macOS only):
```bash
cd ios && pod install && cd ..
```

## Running the App

### Android
```bash
npm run android
```

### iOS
```bash
npm run ios
```

### Start Metro Bundler
```bash
npm start
```

## Available Scripts

- `npm start` - Start Metro bundler
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS device/simulator
- `npm test` - Run tests
- `npm run lint` - Run ESLint

## Requirements

- Node.js >= 16
- React Native development environment set up
- For iOS: Xcode and CocoaPods
- For Android: Android Studio and Android SDK

## License

MIT
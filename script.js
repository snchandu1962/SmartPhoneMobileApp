// Smart Home Control JavaScript

// State management
const homeState = {
    lighting: {
        isOn: false,
        brightness: 50,
        colorMode: 'neutral'
    },
    temperature: {
        current: 78,
        acOn: false,
        heatOn: false,
        unit: 'F'
    },
    music: {
        isPlaying: false,
        volume: 50,
        currentTrack: 'No track playing'
    }
};

// DOM element references
const elements = {
    // Lighting controls
    lightsToggle: document.getElementById('lights-toggle'),
    lightingStatus: document.querySelector('#lighting-status .status-text'),

    // Temperature controls
    tempUp: document.getElementById('temp-up'),
    tempDown: document.getElementById('temp-down'),
    acToggle: document.getElementById('ac-toggle'),
    heatToggle: document.getElementById('heat-toggle'),
    temperatureStatus: document.querySelector('#temperature-status .status-text'),
    temperatureFill: document.getElementById('temp-fill'),

    // Music controls
    musicPlay: document.getElementById('music-play'),
    musicPause: document.getElementById('music-pause'),
    musicNext: document.getElementById('music-next'),
    musicPrev: document.getElementById('music-prev'),
    volumeUp: document.getElementById('volume-up'),
    volumeDown: document.getElementById('volume-down'),
    musicStatus: document.querySelector('#music-status .status-text')
};

// Utility functions
function updateButtonState(button, isActive) {
    if (isActive) {
        button.classList.add('active');
    } else {
        button.classList.remove('active');
    }
}

function showFeedback(message) {
    // Simple feedback mechanism - could be enhanced with toast notifications
    console.log('Smart Home Action:', message);
    
    // Add visual feedback by briefly highlighting the button
    setTimeout(() => {
        document.querySelectorAll('.control-btn.active').forEach(btn => {
            btn.style.transform = 'scale(1.05)';
            setTimeout(() => {
                btn.style.transform = '';
            }, 200);
        });
    }, 100);
}

// Lighting control functions
function toggleLights() {
    homeState.lighting.isOn = !homeState.lighting.isOn;
    updateButtonState(elements.lightsToggle, homeState.lighting.isOn);
    
    const status = homeState.lighting.isOn ? 'On' : 'Off';
    elements.lightingStatus.textContent = status;
    
    showFeedback(`Lights ${homeState.lighting.isOn ? 'turned on' : 'turned off'}`);
}

function adjustBrightness(direction) {
    if (!homeState.lighting.isOn) {
        showFeedback('Please turn on the lights first');
        return;
    }

    const adjustment = direction === 'up' ? 10 : -10;
    homeState.lighting.brightness = Math.max(0, Math.min(100, 
        homeState.lighting.brightness + adjustment));
    
    elements.lightingStatus.textContent = 
        `On (${homeState.lighting.brightness}%, ${homeState.lighting.colorMode})`;
    
    showFeedback(`Brightness ${direction === 'up' ? 'increased' : 'decreased'} to ${homeState.lighting.brightness}%`);
}

function setLightColor(mode) {
    if (!homeState.lighting.isOn) {
        showFeedback('Please turn on the lights first');
        return;
    }

    homeState.lighting.colorMode = mode;
    
    // Remove active state from both color buttons
    updateButtonState(elements.colorWarm, false);
    updateButtonState(elements.colorCool, false);
    
    // Set active state for selected button
    if (mode === 'warm') {
        updateButtonState(elements.colorWarm, true);
    } else if (mode === 'cool') {
        updateButtonState(elements.colorCool, true);
    }
    
    elements.lightingStatus.textContent = 
        `On (${homeState.lighting.brightness}%, ${homeState.lighting.colorMode})`;
    
    showFeedback(`Light color set to ${mode}`);
}

// Temperature control functions
function adjustTemperature(direction) {
    const adjustment = direction === 'up' ? 1 : -1;
    homeState.temperature.current = Math.max(50, Math.min(90, 
        homeState.temperature.current + adjustment));
    
    updateTemperatureDisplay();
    showFeedback(`Temperature ${direction === 'up' ? 'increased' : 'decreased'} to ${homeState.temperature.current}°${homeState.temperature.unit}`);
}

function updateTemperatureDisplay() {
    elements.temperatureStatus.textContent = `${homeState.temperature.current}°${homeState.temperature.unit}`;
    
    // Update temperature bar (50-90°F range = 40 degree span)
    const percentage = ((homeState.temperature.current - 50) / 40) * 100;
    elements.temperatureFill.style.width = `${percentage}%`;
    
    // Update bar position indicator
    const temperatureBar = document.querySelector('.temperature-bar');
    if (temperatureBar) {
        temperatureBar.style.setProperty('--temp-position', `${percentage}%`);
    }
}

function toggleAC() {
    homeState.temperature.acOn = !homeState.temperature.acOn;
    updateButtonState(elements.acToggle, homeState.temperature.acOn);
    
    if (homeState.temperature.acOn && homeState.temperature.heatOn) {
        homeState.temperature.heatOn = false;
        updateButtonState(elements.heatToggle, false);
    }
    
    showFeedback(`Air conditioning ${homeState.temperature.acOn ? 'turned on' : 'turned off'}`);
}

function toggleHeat() {
    homeState.temperature.heatOn = !homeState.temperature.heatOn;
    updateButtonState(elements.heatToggle, homeState.temperature.heatOn);
    
    if (homeState.temperature.heatOn && homeState.temperature.acOn) {
        homeState.temperature.acOn = false;
        updateButtonState(elements.acToggle, false);
    }
    
    showFeedback(`Heating ${homeState.temperature.heatOn ? 'turned on' : 'turned off'}`);
}

// Music control functions
function playMusic() {
    homeState.music.isPlaying = true;
    homeState.music.currentTrack = 'Now Playing: Smart Home Ambience';
    
    updateButtonState(elements.musicPlay, true);
    updateButtonState(elements.musicPause, false);
    
    elements.musicStatus.textContent = homeState.music.currentTrack;
    showFeedback('Music started playing');
}

function pauseMusic() {
    homeState.music.isPlaying = false;
    
    updateButtonState(elements.musicPlay, false);
    updateButtonState(elements.musicPause, true);
    
    elements.musicStatus.textContent = 'Paused';
    showFeedback('Music paused');
}

function nextTrack() {
    if (!homeState.music.isPlaying) {
        showFeedback('Please start playing music first');
        return;
    }
    
    const tracks = [
        'Smart Home Ambience',
        'Electronic Chillout',
        'Modern Living',
        'Tech House Vibes'
    ];
    
    const randomTrack = tracks[Math.floor(Math.random() * tracks.length)];
    homeState.music.currentTrack = `Now Playing: ${randomTrack}`;
    elements.musicStatus.textContent = homeState.music.currentTrack;
    showFeedback('Switched to next track');
}

function previousTrack() {
    if (!homeState.music.isPlaying) {
        showFeedback('Please start playing music first');
        return;
    }
    
    showFeedback('Switched to previous track');
    nextTrack(); // For demo purposes, just play another random track
}

function adjustVolume(direction) {
    const adjustment = direction === 'up' ? 10 : -10;
    homeState.music.volume = Math.max(0, Math.min(100, 
        homeState.music.volume + adjustment));
    
    showFeedback(`Volume ${direction === 'up' ? 'increased' : 'decreased'} to ${homeState.music.volume}%`);
}

// Event listeners
function initializeEventListeners() {
    // Lighting controls
    elements.lightsToggle.addEventListener('click', toggleLights);

    // Temperature controls
    elements.tempUp.addEventListener('click', () => adjustTemperature('up'));
    elements.tempDown.addEventListener('click', () => adjustTemperature('down'));
    elements.acToggle.addEventListener('click', toggleAC);
    elements.heatToggle.addEventListener('click', toggleHeat);

    // Music controls
    elements.musicPlay.addEventListener('click', playMusic);
    elements.musicPause.addEventListener('click', pauseMusic);
    elements.musicNext.addEventListener('click', nextTrack);
    elements.musicPrev.addEventListener('click', previousTrack);
    elements.volumeUp.addEventListener('click', () => adjustVolume('up'));
    elements.volumeDown.addEventListener('click', () => adjustVolume('down'));
}

// Touch feedback for mobile devices
function addTouchFeedback() {
    const buttons = document.querySelectorAll('.control-btn');
    
    buttons.forEach(button => {
        button.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        button.addEventListener('touchend', function() {
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });

        // Add click burst glow effect
        button.addEventListener('click', function() {
            // Remove any existing animation class
            this.classList.remove('click-burst');
            
            // Force reflow to restart animation
            void this.offsetWidth;
            
            // Add animation class
            this.classList.add('click-burst');
            
            // Remove animation class after animation completes
            setTimeout(() => {
                this.classList.remove('click-burst');
            }, 300);
        });
    });
}

// Initialize the application
function init() {
    console.log('Home Harmony Smart Home Control System Initialized');
    initializeEventListeners();
    addTouchFeedback();
    
    // Set initial UI state
    elements.lightingStatus.textContent = 'Off';
    updateTemperatureDisplay();
    elements.musicStatus.textContent = 'Stopped';
    
    // Register service worker for PWA
    registerServiceWorker();
}

// PWA Install functionality
let deferredPrompt;
let isInstalled = false;

// Listen for beforeinstallprompt event
window.addEventListener('beforeinstallprompt', (e) => {
    console.log('PWA install prompt available');
    e.preventDefault();
    deferredPrompt = e;
    showInstallPrompt();
});

// Listen for app installed event
window.addEventListener('appinstalled', (evt) => {
    console.log('PWA was installed');
    isInstalled = true;
    hideInstallPrompt();
});

// Check if app is already installed
window.addEventListener('DOMContentLoaded', () => {
    // Check if running as PWA
    if (window.matchMedia('(display-mode: standalone)').matches || 
        window.navigator.standalone === true) {
        isInstalled = true;
        console.log('Running as PWA');
    }
});

// Show install prompt
function showInstallPrompt() {
    if (isInstalled) return;
    
    const installPrompt = document.createElement('div');
    installPrompt.className = 'install-prompt';
    installPrompt.id = 'install-prompt';
    installPrompt.innerHTML = `
        <div>
            <strong>📱 Install Home Harmony</strong>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">Add to your home screen for quick access</p>
        </div>
        <div style="display: flex; gap: 10px;">
            <button onclick="installPWA()">Install</button>
            <button onclick="hideInstallPrompt()">Later</button>
        </div>
    `;
    document.body.appendChild(installPrompt);
    
    // Auto-hide after 10 seconds
    setTimeout(hideInstallPrompt, 10000);
}

// Install PWA
async function installPWA() {
    if (!deferredPrompt) return;
    
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);
    
    deferredPrompt = null;
    hideInstallPrompt();
}

// Hide install prompt
function hideInstallPrompt() {
    const prompt = document.getElementById('install-prompt');
    if (prompt) {
        prompt.style.animation = 'slideDown 0.3s ease-out reverse';
        setTimeout(() => prompt.remove(), 300);
    }
}

// Add install button to header (optional)
function addInstallButton() {
    if (isInstalled || !deferredPrompt) return;
    
    const header = document.querySelector('header h1');
    const installBtn = document.createElement('button');
    installBtn.innerHTML = '<i class="fas fa-download"></i>';
    installBtn.className = 'install-btn';
    installBtn.onclick = installPWA;
    installBtn.title = 'Install App';
    header.appendChild(installBtn);
}

// Network status handling
window.addEventListener('online', () => {
    console.log('Back online');
    showFeedback('Connection restored');
});

window.addEventListener('offline', () => {
    console.log('Gone offline');
    showFeedback('App is now offline');
});

// Register service worker
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            navigator.serviceWorker.register('/sw.js')
                .then(function(registration) {
                    console.log('ServiceWorker registration successful with scope: ', registration.scope);
                    
                    // Check for updates
                    registration.addEventListener('updatefound', () => {
                        const newWorker = registration.installing;
                        newWorker.addEventListener('statechange', () => {
                            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                                // New update available
                                showUpdateNotification();
                            }
                        });
                    });
                })
                .catch(function(err) {
                    console.log('ServiceWorker registration failed: ', err);
                });
        });
    }
}

// Show update notification
function showUpdateNotification() {
    const updateBanner = document.createElement('div');
    updateBanner.className = 'update-notification';
    updateBanner.innerHTML = `
        <span>New update available!</span>
        <button onclick="updateApp()">Update</button>
        <button onclick="dismissUpdate()">Later</button>
    `;
    document.body.appendChild(updateBanner);
}

// Update app
function updateApp() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistration().then(registration => {
            if (registration && registration.waiting) {
                registration.waiting.postMessage({ action: 'skipWaiting' });
                window.location.reload();
            }
        });
    }
}

// Dismiss update notification
function dismissUpdate() {
    const notification = document.querySelector('.update-notification');
    if (notification) {
        notification.remove();
    }
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', init);

// Export functions for potential external use
window.SmartHome = {
    toggleLights,
    adjustBrightness,
    setLightColor,
    adjustTemperature,
    toggleAC,
    toggleHeat,
    playMusic,
    pauseMusic,
    nextTrack,
    previousTrack,
    adjustVolume,
    getState: () => ({ ...homeState })
};
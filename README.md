# 🎵 Music & Visual Experience
**SITE LINK:** https://anacondy.github.io/falling-leaves-/

An immersive audio-visual web application featuring YouTube music integration, dynamic background slideshows, authenticated settings page, customizable menu text, Google Photos & Pinterest integration, and beautiful falling leaves animation with enhanced dial/crown menu animations.

![Desktop Interface](https://github.com/user-attachments/assets/5461aedd-a060-40eb-ad46-918e0b981d8e)

## ✨ Features

- 🔐 **Authenticated Settings Page** - One-tap access on mobile, or F+S key combination (2 sec hold) on desktop with 6-digit code
- 🎵 **YouTube Music Integration** - Play background music from any YouTube video with auto-loop
- 🖼️ **Multiple Image Sources** - Choose between Local Images, Pinterest boards, or Google Photos albums
- 📱 **Mobile Image Positioning** - Select focal points for landscape images to control what's visible on portrait screens
- 📝 **Customizable Menu Text** - Edit all menu item labels in settings
- 🎡 **Dial/Crown Menu Animation** - All menu items move together with smooth transitions
- ⌨️ **Keyboard Navigation** - Use arrow keys (↑↓) to navigate through slides
- 🎞️ **Dynamic Slideshow** - Configurable timing with smooth Ken Burns zoom on all images
- 🍃 **Falling Leaves Effect** - Ambient animation (auto-hides with external image sources)
- 📱 **Mobile Optimized** - Fully responsive design for 16:9 and 20:9 smartphones with touch-friendly controls
- 🎨 **Frosted Glass Effects** - Subtle backdrop blur for modern aesthetic
- 💾 **Settings Persistence** - All preferences saved in localStorage

## 📸 Screenshots

### Desktop View
![Desktop Interface](https://github.com/user-attachments/assets/5461aedd-a060-40eb-ad46-918e0b981d8e)

*Clean interface with frosted glass settings hint in top-right corner. Play/pause button shows correct icon based on playback state.*

### Mobile View (16:9 Aspect Ratio)
![Mobile 16:9](https://github.com/user-attachments/assets/c64715e4-816f-4fc3-923b-9c3996fe4779)

*Optimized for smartphones with touch-friendly controls and centered play/pause button.*

### Mobile View (20:9 Aspect Ratio)
![Mobile 20:9](https://github.com/user-attachments/assets/891fc8c6-5eb1-4773-ba74-6cf030a439aa)

*Adapted layout for taller modern smartphones with adjusted menu height.*

### Authentication Modal (Mobile)
![Auth Modal Mobile](https://github.com/user-attachments/assets/ce704d1e-b68d-4587-9d92-9645c826350d)

*Responsive authentication modal optimized for mobile with touch-friendly input fields.*

### Authentication Modal (Desktop)
![Auth Modal Desktop](https://github.com/user-attachments/assets/77b1ca17-3f74-4d22-b408-e705493d32ac)

*Cinematic lighthouse-style authentication with gradient background and smooth animations.*

## 🚀 Quick Start

1. Open `index.html` in a modern web browser
2. Navigate using arrow keys (↑↓) or click/tap menu items
3. Tap the **⚙️ Settings** button (mobile) or hold F+S keys for 2 seconds (desktop)
4. Enter access code: **123456**
5. Configure YouTube music, image source, focal points, and menu labels
6. Enjoy the immersive experience on any device!

### Settings Access
- **Mobile:** Tap the **⚙️ Settings** button in top-right corner
- **Desktop:** Press and hold **F** + **S** simultaneously for 2 seconds
- Enter access code: **123456**
- Access all customization options including focal point positioning

## 📖 Documentation

See [FEATURES.md](FEATURES.md) for comprehensive documentation including:
- Detailed feature descriptions
- Usage examples
- Customization guide
- Troubleshooting tips
- API integration details

See [music-visual-site.md](music-visual-site.md) for technical development guide.

## 🎮 Controls

### Main Page
- **Arrow Up (↑)** - Previous slide (with dial/crown animation)
- **Arrow Down (↓)** - Next slide (with dial/crown animation)
- **Menu Items** - Click/tap to jump to specific slide
- **Play/Pause Button** - Start/stop music and slideshow (centered on mobile, fully visible)
- **⚙️ Settings Button** - One tap on mobile to access settings (or F+S hold 2 sec on desktop)

### Settings Page
- **Image Source Selection** - Choose Local/Pinterest/Google Photos
- **Mobile Image Positioning** - Set focal points for each image (NEW)
- **Menu Text Editor** - Customize all 10 menu labels
- **YouTube Music** - Configure background music with auto-loop
- **Slideshow Interval** - Adjust transition speed (3-15 seconds)
- **Save/Reset Buttons** - Persist or restore defaults

## 🛠️ Technology

- Pure vanilla JavaScript (no frameworks)
- HTML5 & CSS3 with advanced animations
- YouTube IFrame API with auto-loop support
- Pinterest & Google Photos API ready (OAuth)
- LocalStorage for settings persistence
- Responsive design with glassmorphism UI
- Mobile-first responsive design (16:9, 20:9 aspect ratios)
- Hardware-accelerated animations for smooth mobile performance

## 📱 Mobile Support

Fully optimized for smartphones with:
- Touch-friendly controls (70px play button on mobile)
- Centered play/pause button for easy thumb access
- One-tap settings access (no keyboard shortcuts needed)
- Image focal point selector for landscape images
- Adaptive menu sizing for different screen heights
- Reduced animations on mobile for better performance
- Support for portrait and landscape orientations
- Hardware acceleration for smooth rendering

## 🧪 Testing & Improvements

### Mobile UI Improvements (Before vs After)

**Before - Mobile View Issues:**
![Mobile Before](https://github.com/user-attachments/assets/ff1255fa-db1f-4960-8562-c40c5fa4e9e5)
- Play/pause button partially cut off at bottom edge
- Settings required 2-second keyboard hold (not mobile-friendly)
- No control over image positioning for portrait screens

**After - Mobile View Fixed:**
![Mobile After](https://github.com/user-attachments/assets/a05a70b9-644a-4be2-a8f1-0fab6c4b5d40)
- Play/pause button fully visible with proper spacing
- Settings accessible with single tap on "⚙️ Settings" button
- Clean, touch-optimized interface

**Settings Page - Mobile Optimized:**
![Settings Mobile](https://github.com/user-attachments/assets/5ea02a2d-d8d1-4b7c-b3f2-9a4a60772e3a)
- Full-width buttons for easy tapping
- Proper spacing for 16:9 and 20:9 screens
- New focal point selector for mobile image positioning
- Smooth scrolling with optimized layout

### Key Fixes Applied:
1. ✅ **Ken Burns Animation** - Fixed zoom effect to work on all 10+ images (was stopping after 3)
2. ✅ **Mobile Play Button** - Increased bottom margin from 30px to 50px for full visibility
3. ✅ **Settings Access** - Changed to single-tap button (was 2-second F+S hold)
4. ✅ **Image Positioning** - Added focal point selector so users can choose important areas for mobile
5. ✅ **Settings Layout** - Fully responsive for 16:9, 20:9, and landscape orientations

## 📸 Screenshots

**Initial View with Falling Leaves:**
![Initial State](https://github.com/user-attachments/assets/59c93c11-a4c2-48ed-8b49-c2ad669306b6)

**Keyboard Navigation:**
![Keyboard Nav](https://github.com/user-attachments/assets/3ef9ca05-a778-4d32-964c-e76db8cfa7ba)

**Pinterest Mode (Leaves Hidden):**
![Pinterest Mode](https://github.com/user-attachments/assets/cf9cac56-dc11-4c11-8977-d90616280a1d)

## 🔧 File Structure

```
falling-leaves-/
├── index.html              # Main application with enhanced features
├── settings.html           # Authenticated settings page (NEW)
├── 1index.html            # Original demo version
├── 1script.js             # Original demo script
├── 1style.css             # Original demo styles
├── *.jpg, *.jpeg, *.png   # 18+ local background images
├── FEATURES.md            # Comprehensive feature documentation
├── IMPLEMENTATION_SUMMARY.md  # Technical implementation details
├── music-visual-site.md   # Development guide
├── README.md              # This file
└── LICENSE                # License information
```

## 🔧 Setup

No build process required! Just:

1. Clone the repository
   ```bash
   git clone https://github.com/anacondy/falling-leaves-.git
   cd falling-leaves-
   ```
2. Open `index.html` in your browser
3. That's it!

### For Development
- Open `index.html` directly in browser (no server required)
- Or use a local server: `python3 -m http.server 8080`
- Modify settings via the authenticated settings page (F+S, code: 123456)

## 🌟 Browser Support

- ✅ Chrome/Edge (recommended)
- ✅ Firefox
- ✅ Safari (iOS 12+)
- ✅ Modern mobile browsers
- ✅ Optimized for 16:9 and 20:9 smartphone displays

## 📝 License

See [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please maintain the vanilla JS approach and update documentation accordingly.

## 👤 Author

*"In the darkness of uncertainty, in the light of creativity, we find truth."*

**Puppy pilot & anacondy**
- GitHub: [@anacondy](https://github.com/anacondy)
- Repository: [falling-leaves-](https://github.com/anacondy/falling-leaves-)

---

*Crafted with passion and pixels*

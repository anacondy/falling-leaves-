# 🎵 Music & Visual Experience
**SITE LINK:** https://anacondy.github.io/falling-leaves-/

An immersive audio-visual web application featuring YouTube music integration, dynamic background slideshows, authenticated settings page, customizable menu text, Google Photos & Pinterest integration, and beautiful falling leaves animation with enhanced dial/crown menu animations.

![Desktop Interface](https://github.com/user-attachments/assets/5461aedd-a060-40eb-ad46-918e0b981d8e)

## ✨ Features

- 🔐 **Authenticated Settings Page** - Access via F+S key combination (2 sec hold) with 6-digit code
- 🎵 **YouTube Music Integration** - Play background music from any YouTube video with auto-loop
- 🖼️ **Multiple Image Sources** - Choose between Local Images, Pinterest boards, or Google Photos albums
- 📝 **Customizable Menu Text** - Edit all menu item labels in settings
- 🎡 **Dial/Crown Menu Animation** - All menu items move together with smooth transitions
- ⌨️ **Keyboard Navigation** - Use arrow keys (↑↓) to navigate through slides
- 🎞️ **Dynamic Slideshow** - Configurable timing with smooth transitions
- 🍃 **Falling Leaves Effect** - Ambient animation (auto-hides with external image sources)
- 📱 **Mobile Optimized** - Fully responsive design for 16:9 and 20:9 smartphones
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
3. Hold F+S keys for 2 seconds to access settings (code: 123456)
4. Configure YouTube music, image source, and menu labels
5. Enjoy the immersive experience on any device!

### Settings Access
- Press and hold **F** + **S** simultaneously for 2 seconds
- Enter access code: **123456**
- Access all customization options

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
- **Play/Pause Button** - Start/stop music and slideshow (centered on mobile)
- **F + S (hold 2 sec)** - Access settings page

### Settings Page
- **Image Source Selection** - Choose Local/Pinterest/Google Photos
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
- Adaptive menu sizing for different screen heights
- Reduced animations on mobile for better performance
- Support for portrait and landscape orientations
- Hardware acceleration for smooth rendering

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

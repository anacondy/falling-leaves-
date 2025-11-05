# 🎵 Music & Visual Experience

**Live Demo:** [https://github.com/anacondy/falling-leaves-](https://github.com/anacondy/falling-leaves-)

An immersive audio-visual web application featuring YouTube music integration, dynamic background slideshows, authenticated settings page, customizable menu text, Google Photos & Pinterest integration, and beautiful falling leaves animation with enhanced dial/crown menu animations.

![Main Interface](https://github.com/user-attachments/assets/8ccd63bd-b955-498a-b242-4d4db4352ebd)

## ✨ Features

- 🔐 **Authenticated Settings Page** - Access via F+S key combination (2 sec hold) with 6-digit code
- 🎵 **YouTube Music Integration** - Play background music from any YouTube video
- 🖼️ **Multiple Image Sources** - Choose between Local Images, Pinterest boards, or Google Photos albums
- 📝 **Customizable Menu Text** - Edit all menu item labels in settings
- 🎡 **Dial/Crown Menu Animation** - All menu items move together with smooth transitions
- ⌨️ **Keyboard Navigation** - Use arrow keys (↑↓) to navigate through slides
- 🎞️ **Dynamic Slideshow** - Configurable timing with smooth transitions
- 🍃 **Falling Leaves Effect** - Ambient animation (auto-hides with external image sources)
- 📊 **Image Metadata Display** - Shows filename, date, location, or comments based on source
- 💾 **Settings Persistence** - All preferences saved in localStorage

## 📸 Screenshots

### Main Interface with Dial/Crown Animation
![Main View](https://github.com/user-attachments/assets/8ccd63bd-b955-498a-b242-4d4db4352ebd)

*The enhanced dial/crown animation moves all menu items together when navigating. Active item scales up with glow effect, adjacent items also animate.*

### Authentication Modal
![Auth Modal](https://github.com/user-attachments/assets/9e24b5cd-f1f4-4b8e-9e4e-c772a47dbfad)

*Hold F+S keys for 2 seconds to trigger the 6-digit authentication modal (default code: 123456).*

### Settings Page - Music & Visual Settings
![Settings Page](https://github.com/user-attachments/assets/382a31f5-4b54-49ac-8da5-8681d768a5d5)

*Configure YouTube music, slideshow interval, and choose image sources.*

### Settings Page - Menu Customization
![Menu Customization](https://github.com/user-attachments/assets/6f3d9e35-fec0-4056-b5dc-90be2883f921)

*Edit all 10 menu item labels to customize your experience.*

## 🚀 Quick Start

1. Open `index.html` in a modern web browser
2. Navigate using arrow keys (↑↓) or click menu items
3. Hold F+S keys for 2 seconds to access settings (code: 123456)
4. Configure YouTube music, image source, and menu labels
5. Enjoy the immersive experience!

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
- **Menu Items** - Click to jump to specific slide
- **Play/Pause Button** - Start/stop music and slideshow
- **F + S (hold 2 sec)** - Access settings page

### Settings Page
- **Image Source Selection** - Choose Local/Pinterest/Google Photos
- **Menu Text Editor** - Customize all 10 menu labels
- **YouTube Music** - Configure background music
- **Slideshow Interval** - Adjust transition speed (3-15 seconds)
- **Save/Reset Buttons** - Persist or restore defaults

## 🛠️ Technology

- Pure vanilla JavaScript (no frameworks)
- HTML5 & CSS3 with advanced animations
- YouTube IFrame API
- Pinterest & Google Photos API ready (OAuth)
- LocalStorage for settings persistence
- Responsive design with glassmorphism UI

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
- ✅ Safari
- ✅ Modern mobile browsers

## 📝 License

See [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please maintain the vanilla JS approach and update documentation accordingly.

## 👤 Author

**anacondy**
- GitHub: [@anacondy](https://github.com/anacondy)
- Repository: [falling-leaves-](https://github.com/anacondy/falling-leaves-)

---

Made with ❤️ and JavaScript by [@anacondy](https://github.com/anacondy)
# Your Name - Modern Portfolio with Dark Mode 🌓

A beautiful, modern, and fully responsive landing page built with **React**, featuring smooth animations, interactive elements, **professional dark mode**, and a clean minimalist design.

![Your Name Portfolio](https://via.placeholder.com/1200x600/6366f1/ffffff?text=Your+Name+Portfolio)

## 🎯 Purpose

This landing page showcases **Your Name** - a professional portfolio and personal brand. The design demonstrates modern web development practices and can be easily adapted for any personal or professional use.

## ✨ Features

### Design & UI
- ✅ **Clean, minimalist, modern design**
- ✅ **Black & white theme with indigo accent color**
- ✅ **🌓 Professional Dark Mode** - Enterprise-grade theme toggle
- ✅ **Auto theme detection** - Detects system preference
- ✅ **Persistent storage** - Saves user preference
- ✅ **Fully responsive** (mobile, tablet, desktop)
- ✅ **Smooth animations and transitions**
- ✅ **Hover effects on buttons and cards**
- ✅ **Beautiful gradient backgrounds**

### Sections Included
1. **Header / Navbar**
   - Sticky navigation bar
   - **Dark/Light mode toggle** (animated switch)
   - Links to all sections
   - Hamburger menu for mobile
   - Smooth scroll navigation

2. **Hero Section**
   - Large headline with tagline
   - Call-to-action buttons
   - Animated hero illustration
   - Stats showcase
   - Scroll indicator

3. **Features Section**
   - 5 key features with icons
   - Grid layout
   - Scroll-triggered fade-in animations
   - Hover effects on cards

4. **Pricing Section**
   - 3 pricing tiers (Free, Pro, Enterprise)
   - Feature comparison
   - Popular plan highlight
   - Interactive pricing cards

5. **Testimonials Section**
   - 3 user testimonials
   - Profile pictures and ratings
   - Trust badges
   - Social proof elements

6. **Contact Section**
   - Contact information
   - Working contact form with validation
   - Email, name, and message fields
   - Success/error messages

7. **Footer**
   - Multiple link sections
   - Social media icons
   - Copyright information
   - Site navigation

### Interactive Features
- ✅ **🌓 Dark/Light Mode Toggle** - Professional theme switcher
- ✅ **Smooth scrolling** between sections
- ✅ **Hamburger menu** for mobile devices
- ✅ **Form validation** with error messages
- ✅ **Scroll-triggered animations**
- ✅ **Hover effects** throughout
- ✅ **Floating card animations**

## 🛠️ Technologies Used

- **React 18.2** - UI framework
- **React Hooks** - State management (useState, useEffect)
- **CSS3** - Styling with custom properties (CSS Variables for theming)
- **LocalStorage API** - Theme persistence
- **Functional Components** - Modern React patterns
- **Semantic HTML5** - Accessible markup

## 📦 Project Structure

```
Landing Page/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/
│   │   ├── Header.js       # Navigation + theme toggle
│   │   ├── ThemeToggle.js  # Dark mode toggle switch
│   │   ├── Hero.js         # Hero section
│   │   ├── Features.js     # Features showcase
│   │   ├── Pricing.js      # Pricing plans
│   │   ├── Testimonials.js # User testimonials
│   │   ├── Contact.js      # Contact form
│   │   └── Footer.js       # Footer component
│   ├── App.js              # Main app + theme management
│   ├── App.css             # Component styles + dark mode
│   ├── index.js            # React entry point
│   └── index.css           # Global styles + theme colors
├── package.json            # Dependencies
├── DARK_MODE_GUIDE.md     # Dark mode documentation
└── README.md              # Main documentation
```

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd "c:/Users/hp/OneDrive/Desktop/Project for upwork/Landing Page"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser:**
   - The app will automatically open at `http://localhost:3000`
   - If not, manually navigate to this URL

### Build for Production

To create an optimized production build:

```bash
npm run build
```

This creates a `build/` folder with optimized, minified files ready for deployment.

## 🌓 Dark Mode Feature

### Overview
The landing page includes a **professional, enterprise-grade dark mode** that rivals implementations by major companies like Google, Apple, and Microsoft.

### Key Features
- 🎯 **Auto-Detection** - Automatically detects system theme preference
- 💾 **Persistent** - Saves user choice in localStorage
- ⚡ **Instant** - No flash of unstyled content
- 🎨 **Beautiful** - Carefully crafted dark color palette
- ♿ **Accessible** - Keyboard navigable with ARIA labels
- 📱 **Responsive** - Works perfectly on all devices

### How to Use
1. Click the toggle switch in the top-right of the navigation bar
2. ☀️ = Light mode | 🌙 = Dark mode
3. Your preference is automatically saved

### For Developers
See **DARK_MODE_GUIDE.md** for complete documentation including:
- Implementation details
- Customization guide
- Adding dark mode to new components
- Troubleshooting
- Advanced features

### Color Themes

**Light Mode**
```css
Background: #ffffff (white)
Text: #1f2937 (dark gray)
Accent: #6366f1 (indigo)
```

**Dark Mode**
```css
Background: #0f172a (deep slate)
Text: #f9fafb (off-white)
Accent: #818cf8 (light indigo)
```

## 📱 Responsive Breakpoints

The landing page is fully responsive with the following breakpoints:

- **Desktop:** 1200px and above
- **Tablet:** 768px - 992px
- **Mobile:** 480px - 768px
- **Small Mobile:** Below 480px

## 🎨 Customization Guide

### Colors

Edit the CSS custom properties in `src/index.css`:

```css
:root {
  --color-primary: #000000;      /* Main color */
  --color-accent: #6366f1;       /* Accent color */
  --color-accent-dark: #4f46e5;  /* Accent hover */
  --color-text: #1f2937;         /* Text color */
  /* ... more colors */
}
```

### Content

Each component contains easy-to-edit data arrays:

**Features** (`src/components/Features.js`):
```javascript
const features = [
  {
    icon: '⚡',
    title: 'Your Feature',
    description: 'Your description'
  },
  // ... more features
];
```

**Pricing Plans** (`src/components/Pricing.js`):
```javascript
const plans = [
  {
    name: 'Plan Name',
    price: '29',
    features: ['Feature 1', 'Feature 2'],
    // ... more plan details
  }
];
```

### Branding

Update the logo and site name:
- Edit `public/index.html` - `<title>` tag
- Edit `src/components/Header.js` - logo text
- Edit `src/components/Footer.js` - footer branding

## 🎭 Animation Details

### Scroll Animations
- Features, Pricing, Testimonials, and Contact sections use scroll-triggered animations
- Elements fade in and slide up when scrolled into view
- Configured threshold: 75% of viewport height

### Hero Animations
- Floating cards with staggered timing
- Pulsing circles
- Smooth fade-in for text elements
- Bounce animation for scroll indicator

## 📋 Form Validation

The contact form includes comprehensive validation:
- **Name:** Required, minimum 2 characters
- **Email:** Required, valid email format
- **Message:** Required, minimum 10 characters
- Real-time error display
- Success message on submission

## 🌐 Deployment Options

### Netlify (Recommended)

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Build and deploy:
   ```bash
   npm run build
   netlify deploy --prod
   ```

### Vercel

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/repo-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## 🔧 Troubleshooting

### Port Already in Use
If port 3000 is already in use:
```bash
# Windows
set PORT=3001 && npm start

# Mac/Linux
PORT=3001 npm start
```

### Dependencies Installation Issues
Clear npm cache and reinstall:
```bash
npm cache clean --force
rm -rf node_modules
rm package-lock.json
npm install
```

### Build Errors
Ensure you're using Node.js v14 or higher:
```bash
node --version
```

## 📖 Code Structure

### Component Hierarchy
```
App
├── Header (Navigation)
├── Hero (Landing section)
├── Features (Feature cards)
├── Pricing (Pricing plans)
├── Testimonials (User reviews)
├── Contact (Contact form)
└── Footer (Site footer)
```

### State Management
- `isMenuOpen` - Controls mobile menu visibility
- `scrollPosition` - Tracks scroll for animations
- `formData` - Manages contact form inputs
- `isVisible` - Triggers section animations

## 🎓 Learning Resources

This project demonstrates:
- React functional components
- React Hooks (useState, useEffect)
- CSS Grid and Flexbox
- CSS Custom Properties
- CSS Animations and Transitions
- Form validation
- Responsive design
- Event handling
- Smooth scrolling

## 📝 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Feel free to fork this project and customize it for your needs!

## 📄 License

This project is open source and available for personal and commercial use.

## 🙌 Credits

- **Icons:** Emoji (Unicode)
- **Fonts:** System fonts (San Francisco, Roboto, Segoe UI)
- **Design:** Custom modern minimalist design
- **Code:** React with modern best practices

## 📞 Support

For issues or questions:
- Check the console for error messages
- Review the code comments for explanations
- Ensure all dependencies are installed correctly

---

**Built with ⚡ by [Your Name]**

Happy coding! 🚀
# Landing-Page

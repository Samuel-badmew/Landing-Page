import React from 'react';
import ThemeToggle from './ThemeToggle';

/**
 * Header Component
 * Sticky navigation bar with responsive hamburger menu and dark mode toggle
 * @param {boolean} isMenuOpen - State of mobile menu
 * @param {function} setIsMenuOpen - Toggle mobile menu state
 * @param {function} scrollToSection - Function to scroll to sections
 * @param {string} theme - Current theme ('light' or 'dark')
 * @param {function} toggleTheme - Function to toggle theme
 */
function Header({ isMenuOpen, setIsMenuOpen, scrollToSection, theme, toggleTheme }) {
  // Navigation menu items
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'features', label: 'Features' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          {/* Logo */}
          <div className="logo" onClick={() => scrollToSection('home')}>
            <span className="logo-icon">⚡</span>
            <span className="logo-text">FlowSync</span>
          </div>

          {/* Desktop Navigation Menu */}
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            {navItems.map((item) => (
              <li key={item.id} className="nav-item">
                <a 
                  href={`#${item.id}`}
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side controls */}
          <div className="nav-controls">
            {/* Dark Mode Toggle */}
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

            {/* Hamburger Menu Icon (Mobile) */}
            <div 
              className={`hamburger ${isMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;

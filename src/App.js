import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * Main App Component
 * Manages the overall structure and state of the landing page
 * Includes dark mode theme management with local storage persistence
 */
function App() {
  // State to track if mobile menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // State to track scroll position for scroll animations
  const [scrollPosition, setScrollPosition] = useState(0);

  // State to track current theme (light or dark)
  // Check local storage or system preference on initial load
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  /**
   * Apply theme to document and save to local storage
   * Updates whenever theme state changes
   */
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  /**
   * Toggle between light and dark themes
   */
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  /**
   * Handle scroll events to trigger animations
   * Updates scroll position for animation triggers
   */
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /**
   * Smooth scroll to section when navigation link is clicked
   * @param {string} id - The ID of the section to scroll to
   */
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <div className="App">
      {/* Navigation Header - sticky at the top */}
      <Header 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      
      {/* Hero Section - Main landing area */}
      <Hero scrollToSection={scrollToSection} />
      
      {/* Features Section - Product features showcase */}
      <Features scrollPosition={scrollPosition} />
      
      {/* Pricing Section - Pricing plans */}
      <Pricing scrollPosition={scrollPosition} />
      
      {/* Testimonials Section - User reviews */}
      <Testimonials scrollPosition={scrollPosition} />
      
      {/* Contact Section - Contact form and CTA */}
      <Contact scrollPosition={scrollPosition} />
      
      {/* Footer - Site footer with links */}
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

export default App;

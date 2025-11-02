import React from 'react';

/**
 * ThemeToggle Component
 * Beautiful animated toggle switch for dark/light mode
 * Features smooth transitions and modern design
 * @param {string} theme - Current theme ('light' or 'dark')
 * @param {function} toggleTheme - Function to toggle between themes
 */
function ThemeToggle({ theme, toggleTheme }) {
  return (
    <div className="theme-toggle-wrapper">
      <button 
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {/* Sun Icon (Light Mode) */}
        <span className={`theme-icon sun ${theme === 'light' ? 'active' : ''}`}>
          ☀️
        </span>
        
        {/* Toggle Slider */}
        <span className={`toggle-slider ${theme === 'dark' ? 'dark' : ''}`}></span>
        
        {/* Moon Icon (Dark Mode) */}
        <span className={`theme-icon moon ${theme === 'dark' ? 'active' : ''}`}>
          🌙
        </span>
      </button>
    </div>
  );
}

export default ThemeToggle;

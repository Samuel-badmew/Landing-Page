import React from 'react';

/**
 * Hero Section Component
 * Main landing section with headline, tagline, and CTA
 * @param {function} scrollToSection - Function to scroll to sections
 */
function Hero({ scrollToSection }) {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          {/* Left side - Text content */}
          <div className="hero-text">
            <h1 className="hero-title fade-in">
              Streamline Your Workflow with <span className="accent">FlowSync</span>
            </h1>
            <p className="hero-tagline fade-in delay-1">
              The ultimate productivity platform that brings your team together. 
              Collaborate seamlessly, manage projects effortlessly, and achieve more in less time.
            </p>
            <div className="hero-buttons fade-in delay-2">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('contact')}
              >
                Get Started Free
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('features')}
              >
                Learn More
              </button>
            </div>
            
            {/* Stats */}
            <div className="hero-stats fade-in delay-3">
              <div className="stat-item">
                <span className="stat-number">50K+</span>
                <span className="stat-label">Active Users</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">Satisfaction</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support</span>
              </div>
            </div>
          </div>

          {/* Right side - Hero illustration */}
          <div className="hero-image fade-in delay-2">
            <div className="hero-illustration">
              {/* Abstract geometric illustration */}
              <div className="illustration-bg">
                <div className="floating-card card-1">
                  <div className="card-icon">📊</div>
                  <div className="card-text">Analytics</div>
                </div>
                <div className="floating-card card-2">
                  <div className="card-icon">🚀</div>
                  <div className="card-text">Fast Setup</div>
                </div>
                <div className="floating-card card-3">
                  <div className="card-icon">🔒</div>
                  <div className="card-text">Secure</div>
                </div>
                <div className="hero-circle circle-1"></div>
                <div className="hero-circle circle-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  );
}

export default Hero;

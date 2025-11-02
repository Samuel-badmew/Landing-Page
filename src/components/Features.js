import React, { useState, useEffect } from 'react';

/**
 * Features Section Component
 * Displays key product features with icons and descriptions
 * Includes scroll-triggered fade-in animations
 * @param {number} scrollPosition - Current scroll position for animations
 */
function Features({ scrollPosition }) {
  const [isVisible, setIsVisible] = useState(false);

  // Features data array
  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Experience blazing-fast performance with our optimized infrastructure. Load times under 100ms guaranteed.'
    },
    {
      icon: '🔒',
      title: 'Secure & Private',
      description: 'Bank-level encryption and data protection. Your information is safe with enterprise-grade security.'
    },
    {
      icon: '🎨',
      title: 'Beautiful Design',
      description: 'Intuitive interface designed for productivity. Clean, modern, and delightful to use every day.'
    },
    {
      icon: '📱',
      title: 'Cross-Platform',
      description: 'Works seamlessly on desktop, tablet, and mobile. Access your work anywhere, anytime.'
    },
    {
      icon: '🤝',
      title: 'Team Collaboration',
      description: 'Real-time collaboration tools that keep your team in sync. Chat, share, and build together.'
    }
  ];

  /**
   * Trigger animation when section scrolls into view
   */
  useEffect(() => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      const rect = featuresSection.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight * 0.75;
      if (isInView && !isVisible) {
        setIsVisible(true);
      }
    }
  }, [scrollPosition, isVisible]);

  return (
    <section id="features" className="features">
      <div className="container">
        {/* Section Header */}
        <div className={`section-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Powerful Features</h2>
          <p className="section-subtitle">
            Everything you need to supercharge your productivity
          </p>
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`feature-card ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;

import React, { useState, useEffect } from 'react';

/**
 * Testimonials Section Component
 * Displays user testimonials with profile pictures and ratings
 * Includes scroll-triggered animations
 * @param {number} scrollPosition - Current scroll position for animations
 */
function Testimonials({ scrollPosition }) {
  const [isVisible, setIsVisible] = useState(false);

  // Testimonials data
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      avatar: '👩‍💼',
      rating: 5,
      text: 'FlowSync has completely transformed how our team collaborates. The intuitive interface and powerful features make project management a breeze. Highly recommend!'
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager, InnovateCo',
      avatar: '👨‍💻',
      rating: 5,
      text: 'We\'ve tried many project management tools, but FlowSync stands out. The real-time collaboration features and seamless integrations have boosted our productivity by 40%.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Designer, Creative Studios',
      avatar: '👩‍🎨',
      rating: 5,
      text: 'As a designer, I love the clean interface and attention to detail. FlowSync makes it easy to organize projects and communicate with clients. It\'s a game-changer!'
    }
  ];

  /**
   * Trigger animation when section scrolls into view
   */
  useEffect(() => {
    const testimonialsSection = document.getElementById('testimonials');
    if (testimonialsSection) {
      const rect = testimonialsSection.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight * 0.75;
      if (isInView && !isVisible) {
        setIsVisible(true);
      }
    }
  }, [scrollPosition, isVisible]);

  /**
   * Render star rating
   * @param {number} rating - Number of stars (1-5)
   */
  const renderStars = (rating) => {
    return '⭐'.repeat(rating);
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        {/* Section Header */}
        <div className={`section-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">What Our Users Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it - hear from our happy customers
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`testimonial-card ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Quote Icon */}
              <div className="quote-icon">"</div>

              {/* Rating Stars */}
              <div className="rating">
                {renderStars(testimonial.rating)}
              </div>

              {/* Testimonial Text */}
              <p className="testimonial-text">{testimonial.text}</p>

              {/* User Info */}
              <div className="testimonial-author">
                <div className="author-avatar">{testimonial.avatar}</div>
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className={`trust-badges ${isVisible ? 'visible' : ''}`}>
          <div className="badge-item">
            <span className="badge-icon">🏆</span>
            <span className="badge-text">Award Winning</span>
          </div>
          <div className="badge-item">
            <span className="badge-icon">🔒</span>
            <span className="badge-text">SOC 2 Certified</span>
          </div>
          <div className="badge-item">
            <span className="badge-icon">⚡</span>
            <span className="badge-text">99.9% Uptime</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

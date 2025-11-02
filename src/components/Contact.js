import React, { useState, useEffect } from 'react';

/**
 * Contact Section Component
 * Contact form with validation and submission handling
 * Includes scroll-triggered animations
 * @param {number} scrollPosition - Current scroll position for animations
 */
function Contact({ scrollPosition }) {
  const [isVisible, setIsVisible] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Form validation errors
  const [errors, setErrors] = useState({});

  // Form submission state
  const [isSubmitted, setIsSubmitted] = useState(false);

  /**
   * Trigger animation when section scrolls into view
   */
  useEffect(() => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const rect = contactSection.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight * 0.75;
      if (isInView && !isVisible) {
        setIsVisible(true);
      }
    }
  }, [scrollPosition, isVisible]);

  /**
   * Handle input changes
   * @param {Event} e - Input change event
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  /**
   * Validate form fields
   * @returns {boolean} - True if form is valid
   */
  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Handle form submission
   * @param {Event} e - Form submit event
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // In a real application, you would send data to a server here
      console.log('Form submitted:', formData);
      
      // Show success message
      setIsSubmitted(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-wrapper">
          {/* Left side - Contact Info */}
          <div className={`contact-info ${isVisible ? 'visible' : ''}`}>
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div className="contact-text">
                  <h4>Email</h4>
                  <p>hello@flowsync.com</p>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">💬</span>
                <div className="contact-text">
                  <h4>Live Chat</h4>
                  <p>Available 24/7</p>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div className="contact-text">
                  <h4>Office</h4>
                  <p>123 Tech Street, San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className={`contact-form-wrapper ${isVisible ? 'visible' : ''}`}>
            <form className="contact-form" onSubmit={handleSubmit}>
              {/* Success Message */}
              {isSubmitted && (
                <div className="success-message">
                  ✓ Thank you! Your message has been sent successfully.
                </div>
              )}

              {/* Name Input */}
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                  placeholder="Your full name"
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              {/* Email Input */}
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                  placeholder="your.email@example.com"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              {/* Message Textarea */}
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? 'error' : ''}
                  placeholder="Tell us about your project..."
                  rows="5"
                ></textarea>
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary btn-submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

import React from 'react';

/**
 * Footer Component
 * Site footer with navigation links, social media, and copyright
 * @param {function} scrollToSection - Function to scroll to sections
 */
function Footer({ scrollToSection }) {
  // Current year for copyright
  const currentYear = new Date().getFullYear();

  // Social media links
  const socialLinks = [
    { icon: '🐦', name: 'Twitter', url: '#' },
    { icon: '📘', name: 'Facebook', url: '#' },
    { icon: '💼', name: 'LinkedIn', url: '#' },
    { icon: '📷', name: 'Instagram', url: '#' },
    { icon: '▶️', name: 'YouTube', url: '#' }
  ];

  // Footer navigation sections
  const footerSections = [
    {
      title: 'Product',
      links: [
        { label: 'Features', id: 'features' },
        { label: 'Pricing', id: 'pricing' },
        { label: 'Testimonials', id: 'testimonials' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', url: '#' },
        { label: 'Careers', url: '#' },
        { label: 'Blog', url: '#' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', url: '#' },
        { label: 'Help Center', url: '#' },
        { label: 'API Reference', url: '#' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', url: '#' },
        { label: 'Terms of Service', url: '#' },
        { label: 'Cookie Policy', url: '#' }
      ]
    }
  ];

  return (
    <footer className="footer">
      <div className="container">
        {/* Footer Top - Main content */}
        <div className="footer-content">
          {/* Logo and Description */}
          <div className="footer-brand">
            <div className="logo">
              <span className="logo-icon">⚡</span>
              <span className="logo-text">FlowSync</span>
            </div>
            <p className="footer-description">
              Streamline your workflow and boost productivity with the ultimate team collaboration platform.
            </p>
            
            {/* Social Media Links */}
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  className="social-link"
                  aria-label={social.name}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Navigation Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="footer-section">
              <h3 className="footer-title">{section.title}</h3>
              <ul className="footer-links">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.url || `#${link.id}`}
                      onClick={(e) => {
                        if (link.id) {
                          e.preventDefault();
                          scrollToSection(link.id);
                        }
                      }}
                      className="footer-link"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom - Copyright */}
        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} FlowSync. All rights reserved.
          </p>
          <p className="footer-tagline">
            Built with ⚡ and passion
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

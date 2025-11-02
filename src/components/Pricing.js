import React, { useState, useEffect } from 'react';

/**
 * Pricing Section Component
 * Displays pricing plans with features and CTA buttons
 * Includes scroll-triggered animations
 * @param {number} scrollPosition - Current scroll position for animations
 */
function Pricing({ scrollPosition }) {
  const [isVisible, setIsVisible] = useState(false);

  // Pricing plans data
  const plans = [
    {
      name: 'Starter',
      price: '0',
      period: 'Forever Free',
      description: 'Perfect for individuals and small projects',
      features: [
        '5 Projects',
        '10 Team Members',
        '5GB Storage',
        'Basic Support',
        'Mobile App Access'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '29',
      period: 'per month',
      description: 'Ideal for growing teams and businesses',
      features: [
        'Unlimited Projects',
        'Unlimited Team Members',
        '100GB Storage',
        'Priority Support',
        'Advanced Analytics',
        'Custom Integrations',
        'API Access'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '99',
      period: 'per month',
      description: 'For large organizations with custom needs',
      features: [
        'Everything in Pro',
        'Unlimited Storage',
        'Dedicated Support',
        'Custom Solutions',
        'SSO & Advanced Security',
        'SLA Guarantee',
        'White Label Options'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  /**
   * Trigger animation when section scrolls into view
   */
  useEffect(() => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      const rect = pricingSection.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight * 0.75;
      if (isInView && !isVisible) {
        setIsVisible(true);
      }
    }
  }, [scrollPosition, isVisible]);

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        {/* Section Header */}
        <div className={`section-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Simple, Transparent Pricing</h2>
          <p className="section-subtitle">
            Choose the plan that's right for you. No hidden fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`pricing-card ${plan.popular ? 'popular' : ''} ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              
              <div className="pricing-header">
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  <span className="currency">$</span>
                  <span className="amount">{plan.price}</span>
                  <span className="period">/{plan.period}</span>
                </div>
                <p className="plan-description">{plan.description}</p>
              </div>

              <ul className="plan-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="feature-item">
                    <span className="check-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;

// ServicesSection.jsx
import React, { useEffect, useRef, useState } from "react";
import "./aboutme.css";

const ServicesSection = React.forwardRef((props, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [hoveredService, setHoveredService] = useState(null);
  const sectionRef = useRef(null);

  // Combine forwarded ref with local ref
  React.useImperativeHandle(ref, () => ({
    scrollIntoView: (options) => sectionRef.current?.scrollIntoView(options),
  }));

  const services = [
    {
      icon: "🚀",
      title: "Digital Strategy & Consulting",
      description:
        "Comprehensive digital marketing strategies tailored to your business goals. We analyze, plan, and execute campaigns that deliver real results.",
      features: ["Market Analysis", "Strategy Development", "KPI Tracking", "ROI Optimization"],
      color: "#0077ff",
    },
    {
      icon: "📱",
      title: "Social Media Marketing",
      description:
        "Engage your audience across all social platforms with compelling content and data-driven campaigns that build community and drive conversions.",
      features: ["Content Creation", "Community Management", "Paid Advertising", "Analytics"],
      color: "#00c6ff",
    },
    {
      icon: "🔍",
      title: "SEO & Content Marketing",
      description:
        "Boost your online visibility and organic traffic with strategic SEO optimization and high-quality content that ranks and converts.",
      features: ["Keyword Research", "On-Page SEO", "Content Strategy", "Link Building"],
      color: "#764ba2",
    },
    {
      icon: "💡",
      title: "PPC & Conversion Optimization",
      description:
        "Maximize your advertising budget with targeted PPC campaigns and conversion rate optimization that turns visitors into customers.",
      features: ["Google Ads", "Facebook Ads", "Landing Pages", "A/B Testing"],
      color: "#ff6b6b",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="services-section" ref={sectionRef}>
      <div className="services-container">
        <div className={`services-header ${isVisible ? "visible" : ""}`}>
          {/* <div className="section-badge">Digital Marketing Services</div> */}
          <h2 className="section-title">
            Drive <span className="text-gradient">Explosive Growth</span> For Your Business
          </h2>
          <p className="section-description">
            Data-driven digital marketing solutions that connect with your audience, build brand
            loyalty, and deliver measurable business results.
          </p>
        </div>

        <div className="services-content">
          {/* Service Navigation */}
          <div className="services-navigation">
            {services.map((service, index) => (
              <button
                key={index}
                className={`service-nav-item ${activeService === index ? "active" : ""}`}
                onClick={() => setActiveService(index)}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                style={{ ["--service-color"]: service.color }}
              >
                <div className="nav-icon">{service.icon}</div>
                <span className="nav-title">{service.title}</span>
                <div className="nav-indicator"></div>
              </button>
            ))}
          </div>

          {/* Active Service Display */}
          <div className="service-display">
            {services.map((service, index) => (
              <div
                key={index}
                className={`service-detail ${activeService === index ? "active" : ""}`}
                style={{ ["--service-color"]: service.color }}
              >
                <div className="detail-header">
                  <div className="detail-icon">{service.icon}</div>
                  <h3 className="detail-title">{service.title}</h3>
                </div>
                <p className="detail-description">{service.description}</p>
                <div className="detail-features">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="feature-item">
                      <div className="feature-check">✓</div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="detail-cta">
                  Get Started
                  <span className="cta-arrow">→</span>
                </button>
                <div className="service-glow" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default ServicesSection;

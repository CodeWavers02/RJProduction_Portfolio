// ProfileSection.jsx
import React, { useEffect, useRef, useState } from "react";
import "./aboutme.css";
import profile from "../../assets/user.jpeg";
import instagram from "../../assets/instagram.png";
import whatsapp from "../../assets/whatsapp.png";
import email from "../../assets/email.png";
import youtube from "../../assets/youtube.png";

const ProfileSection = ({ servicesRef }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const profileRef = useRef(null);

  const scrollToServices = () => {
    if (servicesRef && servicesRef.current) {
      servicesRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (profileRef.current) {
      observer.observe(profileRef.current);
    }

    return () => {
      if (profileRef.current) {
        observer.unobserve(profileRef.current);
      }
    };
  }, []);

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <section className="profile-hero" ref={profileRef} onMouseMove={handleMouseMove}>
      <div className="profile-hero-container">
        {/* Interactive Background Elements */}
        <div className="hero-background">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
          <div className="particle-field"></div>
        </div>

        <div className={`hero-content ${isVisible ? "visible" : ""}`}>
          {/* Profile Image with Interactive Elements */}
          <div className="hero-image">
            <div className="image-frame">
              <img src={profile} alt="Ashish Lohakare" />
              <div className="image-glow"></div>
              <div className="image-interaction">
                <div className="interaction-dot dot-1"></div>
                <div className="interaction-dot dot-2"></div>
                <div className="interaction-dot dot-3"></div>
              </div>
            </div>
            <div className="status-badge">
              <div className="pulse-dot"></div>
              <span>Available for Digital Projects</span>
            </div>
          </div>

          {/* Profile Info */}
          <div className="hero-info">
            {/* <div className="intro-badge">
              <span className="badge-text">Digital Marketing Expert</span>
              <div className="badge-glow"></div>
            </div> */}

            <h1 className="hero-name">
              Ashish <span className="name-accent">Lohakare</span>
            </h1>

            <p className="hero-description">
              I transform <span className="highlight-word">brands</span> through strategic{" "}
              <span className="highlight-word">digital marketing</span> that drives measurable{" "}
              <span className="highlight-word">growth</span> and creates unforgettable{" "}
              <span className="highlight-word">customer experiences</span>.
            </p>

            {/* Interactive Quick Stats */}
            <div className="quick-stats">
              {[
                { number: "250+", label: "Campaigns", delay: 0 },
                { number: "5+", label: "Years", delay: 0.1 },
                { number: "300%", label: "Avg. ROI", delay: 0.2 },
              ].map((stat, index) => (
                <div key={index} className="stat" style={{ animationDelay: `${stat.delay}s` }}>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Interactive Expertise Tags */}
            <div className="expertise-section">
              <div className="section-label">Digital Marketing Specialties</div>
              <div className="expertise-tags">
                {[
                  "SEO Optimization",
                  "Social Media Marketing",
                  "Content Strategy",
                  "PPC Advertising",
                  "Analytics & Insights",
                ].map((tag, index) => (
                  <span key={index} className="expertise-tag" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Enhanced CTA & Social */}
            <div className="hero-actions">
              <button className="cta-button primary">
                <span>Launch Your Campaign</span>
                <div className="button-sparkle"></div>
                <div className="button-arrow">→</div>
              </button>
              <button className="cta-button secondary">
                <span>View Case Studies</span>
                <div className="button-glow"></div>
              </button>
            </div>

            {/* Animated Social Links */}
            <div className="social-links">
              {[
                {
                  icon: instagram,
                  name: "Instagram",
                  color: "#E1306C",
                  url: "https://instagram.com/yourusername",
                },
                {
                  icon: whatsapp,
                  name: "WhatsApp",
                  color: "#25D366",
                  url: "https://wa.me/yournumber",
                },
                {
                  icon: email,
                  name: "Email",
                  color: "#EA4335",
                  url: "mailto:your@email.com",
                },
                {
                  icon: youtube,
                  name: "YouTube",
                  color: "#FF0000",
                  url: "https://youtube.com/yourchannel",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{ ["--social-color"]: social.color }}
                >
                  <div className="social-glow"></div>
                  <img src={social.icon} alt={social.name} />
                  <span className="social-tooltip">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        {/* <div className="scroll-indicator" onClick={scrollToServices}>
          <div className="scroll-text">Discover Services</div>
          <div className="scroll-arrow">
            <div className="arrow-line"></div>
            <div className="arrow-head"></div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ProfileSection;

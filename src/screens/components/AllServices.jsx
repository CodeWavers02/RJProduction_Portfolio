import React, { useState, useEffect } from "react";
import "./allservices.css";

// Import your service images
import web from "../../assets/img1.jpeg";
import marketing from "../../assets/img2.jpg";
import photography from "../../assets/img3.jpeg";
import creative from "../../assets/img4.jpeg";
import strategy from "../../assets/img5.jpeg";

const AllServices = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [clickedCard, setClickedCard] = useState(null);

  const services = [
    {
      id: 1,
      title: "Web Design & Development",
      description: "Creating responsive and user-friendly websites that connect technology and creativity. We build modern web experiences that drive results.",
      image: web,
      link: "#web-design",
      icon: "🌐",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "User Friendly"]
    },
    {
      id: 2,
      title: "Social Media Marketing",
      description: "Boosting engagement and visibility with smart campaigns and content strategies. Grow your audience and increase brand awareness.",
      image: marketing,
      link: "#social-media",
      icon: "📱",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      features: ["Content Strategy", "Audience Growth", "Analytics", "Campaign Management"]
    },
    {
      id: 3,
      title: "Photo & Videography",
      description: "Capturing professional visuals that enhance your brand identity and storytelling. High-quality imagery for all your marketing needs.",
      image: photography,
      link: "#photography",
      icon: "📸",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      features: ["Professional Shoots", "Brand Storytelling", "Editing", "Visual Strategy"]
    },
    {
      id: 4,
      title: "Creative Design",
      description: "Designing impactful visuals from brochures to packaging that express your brand. Creative solutions that make you stand out.",
      image: creative,
      link: "#creative-design",
      icon: "🎨",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      features: ["Brand Identity", "Visual Design", "Creative Content", "UI/UX Design"]
    },
    {
      id: 5,
      title: "Marketing Strategy",
      description: "Building data-driven marketing solutions to help brands reach the right audience. Strategic planning for maximum impact.",
      image: strategy,
      link: "#marketing-strategy",
      icon: "🚀",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      features: ["Market Analysis", "Strategy Planning", "Performance Tracking", "ROI Optimization"]
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleImageHover = (index) => {
    setActiveImage(index);
  };

  const handleCardClick = (index) => {
    setClickedCard(clickedCard === index ? null : index);
  };

  return (
    <section className="services-futuristic-section">
      {/* Background Elements */}
      <div className="services-bg-grid"></div>
      <div className="services-floating-shapes">
        <div className="services-shape services-shape-1"></div>
        <div className="services-shape services-shape-2"></div>
        <div className="services-shape services-shape-3"></div>
      </div>
      
      {/* Mouse Trailer */}
      <div 
        className="services-mouse-trailer"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`
        }}
      ></div>

      <div className="services-futuristic-container">
        {/* Left Side - Text Content */}
        <div className={`services-futuristic-text ${isVisible ? 'services-visible' : ''}`}>
          <div className="services-title-wrapper">
            <h1 className="services-futuristic-title">
              <span className="services-title-main">DIGITAL</span>
              <span className="services-title-gradient">SERVICES</span>
            </h1>
          </div>
          
          <p className="services-futuristic-subtitle">
            Transforming brands through cutting-edge digital solutions. 
            Where innovation meets execution for unprecedented growth.
          </p>

          {/* Interactive Stats */}
          <div className="services-futuristic-stats">
            {[
              { number: "150+", label: "Projects", suffix: "" },
              { number: "5", label: "Core Services", suffix: "" },
              { number: "100", label: "Success", suffix: "%" }
            ].map((stat, index) => (
              <div key={index} className="services-futuristic-stat">
                <div className="services-stat-number">
                  {stat.number}<span className="services-stat-suffix">{stat.suffix}</span>
                </div>
                <div className="services-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="services-tech-stack">
            <div className="services-tech-label">Technologies We Use</div>
            <div className="services-tech-items">
              <span className="services-tech-item">React</span>
              <span className="services-tech-item">Node.js</span>
              <span className="services-tech-item">AI/ML</span>
              <span className="services-tech-item">Cloud</span>
            </div>
          </div>
        </div>

        {/* Right Side - Service Cards */}
        <div className="services-futuristic-cards">
          <div className="services-cards-wrapper">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`services-futuristic-card ${
                  activeImage === index ? 'services-card-active' : ''
                } ${clickedCard === index ? 'services-card-clicked' : ''}`}
                onMouseEnter={() => handleImageHover(index)}
                onClick={() => handleCardClick(index)}
                style={{ '--card-gradient': service.gradient }}
              >
                {/* Card Background */}
                <div className="services-card-background"></div>
                
                {/* Card Content */}
                <div className="services-card-content">
                  {/* Service Icon */}
                  <div className="services-card-icon">{service.icon}</div>
                  
                  {/* Main Image */}
                  

                  {/* Expanded Content */}
                  <div className="services-card-expanded">
                    <div className="services-card-header">
                      <h3 className="services-card-title">{service.title}</h3>
                      {/* <div className="services-card-indicator">
                        <div className="services-indicator-dot"></div>
                        <span>ACTIVE</span>
                      </div> */}
                    </div>
                    
                    <p className="services-card-description">{service.description}</p>
                    
                    <div className="services-card-features">
                      {service.features.map((feature, i) => (
                        <span key={i} className="services-feature-tag">
                          <span className="services-feature-check">✓</span>
                          {feature}
                        </span>
                      ))}
                    </div>

                    <button className="services-card-cta">
                      <span>Explore Service</span>
                      <div className="services-cta-arrow">→</div>
                    </button>
                  </div>

                  {/* Collapsed State */}
                  <div className="services-card-collapsed">
                    <div className="services-collapsed-icon">{service.icon}</div>
                    <div className="services-collapsed-title">{service.title}</div>
                  </div>
                </div>

                {/* Interactive Border */}
                <div className="services-card-border"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="services-navigation-dots">
        {services.map((_, index) => (
          <button
            key={index}
            className={`services-dot ${activeImage === index ? 'services-dot-active' : ''}`}
            onClick={() => setActiveImage(index)}
          >
            <div className="services-dot-inner"></div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default AllServices;
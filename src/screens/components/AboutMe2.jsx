import React, { useState, useEffect, useRef } from 'react';
import './aboutMe2.css';

// Import your assets
import profile from "../../assets/user.jpeg";
import instagram from "../../assets/instagram.png";
import whatsapp from "../../assets/whatsapp.png";
import email from "../../assets/email.png";
import youtube from "../../assets/youtube.png";

// Import client images (you'll need to add these to your assets)
import client1 from "../../assets/client1.jpg";
import client2 from "../../assets/client2.jpg";
import client3 from "../../assets/client3.jpg";
import client4 from "../../assets/client4.jpg";
import client5 from "../../assets/client5.jpg";
import client6 from "../../assets/client6.jpg";

const Counter = ({ end, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          let start = 0;
          const increment = end / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.ceil(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [end, duration]);

  return (
    <span ref={countRef}>
      {count}{suffix}
    </span>
  );
};

const AboutMe2 = () => {
  const [activeTab, setActiveTab] = useState('mission');
  const scrollTrackRef = useRef(null);

  // Client images array - using placeholder images for now
  const clientImages = [
    { id: 1, image: client1, name: "TechCorp" },
    { id: 2, image: client2, name: "InnovateCo" },
    { id: 3, image: client3, name: "GlobalBiz" },
    { id: 4, image: client4, name: "PrimeSolutions" },
    { id: 5, image: client5, name: "EliteGroup" },
    { id: 6, image: client6, name: "StartUpHub" },
    { id: 7, image: client1, name: "NextGen" },
    { id: 8, image: client2, name: "Visionary" }
  ];

  // Duplicate for seamless loop
  const duplicatedClients = [...clientImages, ...clientImages];

  // Smooth infinite scroll animation
  useEffect(() => {
    const scrollTrack = scrollTrackRef.current;
    if (!scrollTrack) return;

    let animationId;
    const speed = 0.5; // Adjust speed here (lower = slower)
    let scrollPosition = 0;

    const scroll = () => {
      scrollPosition += speed;
      
      // Reset scroll position when we've scrolled through one set
      if (scrollPosition >= scrollTrack.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollTrack.style.transform = `translateX(-${scrollPosition}px)`;
      animationId = requestAnimationFrame(scroll);
    };

    // Start animation
    animationId = requestAnimationFrame(scroll);

    // Pause on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(scroll);
    };

    scrollTrack.addEventListener('mouseenter', handleMouseEnter);
    scrollTrack.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollTrack.removeEventListener('mouseenter', handleMouseEnter);
      scrollTrack.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const services = [
    {
      icon: "📱",
      title: "Social Media Marketing",
      description: "Strategic campaigns that drive engagement and deliver measurable ROI",
      color: "#E4405F"
    },
    {
      icon: "🔍",
      title: "SEO Optimization",
      description: "Data-driven strategies to improve search rankings and organic traffic",
      color: "#4285F4"
    },
    {
      icon: "📊",
      title: "PPC Advertising",
      description: "Targeted paid campaigns with precise audience targeting and optimization",
      color: "#34A853"
    },
    {
      icon: "✍️",
      title: "Content Strategy",
      description: "Compelling content that connects with your audience and drives action",
      color: "#FBBC05"
    },
    {
      icon: "💻",
      title: "Website & Application",
      description: "Help you to take your business to online",
      color: "#FF6B35"
    }
  ];

  const stats = [
    { number: 127, suffix: "%", label: "Average ROI", duration: 2500 },
    { number: 50, suffix: "+", label: "Campaigns", duration: 2000 },
    { number: 3.2, suffix: "M", label: "Audience Reach", duration: 3000 },
    { number: 98, suffix: "%", label: "Satisfaction Rate", duration: 2200 }
  ];

  return (
    <section className="about-us-section" id="about">
      <div className="container">
        {/* Header Section */}
        <div className="section-header">
          <h1 className="section-pre-title">Digital Marketing Excellence</h1>
          <h2 className="section-title">Strategic Growth Partners</h2>
          <p className="section-subtitle">
            We transform digital presence through data-driven strategies that deliver exceptional results and sustainable growth.
          </p>
        </div>

        {/* Main Content */}
        <div className="about-content">
          {/* Left Column - Image with Creative Design */}
          <div className="about-image-container">
            <div className="image-frame">
              <div className="image-wrapper">
                <img 
                  src={profile} 
                  alt="Digital Marketing Expertise" 
                  className="main-image"
                />
                <div className="image-glow"></div>
              </div>
              <div className="floating-elements">
                <div className="floating-element element-1">
                  <div className="element-icon">🚀</div>
                  <span>Fast Results</span>
                </div>
                <div className="floating-element element-2">
                  <div className="element-icon">📈</div>
                  <span>Growth Focused</span>
                </div>
                <div className="floating-element element-3">
                  <div className="element-icon">💡</div>
                  <span>Innovative</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="about-text-content">
            {/* Tabs Section */}
            <div className="tabs-container">
              <div className="tabs-header">
                <button 
                  className={`tab-btn ${activeTab === 'mission' ? 'active' : ''}`}
                  onClick={() => setActiveTab('mission')}
                >
                  <span className="tab-icon">🎯</span>
                  Mission
                </button>
                <button 
                  className={`tab-btn ${activeTab === 'approach' ? 'active' : ''}`}
                  onClick={() => setActiveTab('approach')}
                >
                  <span className="tab-icon">🚀</span>
                  Approach
                </button>
                <button 
                  className={`tab-btn ${activeTab === 'expertise' ? 'active' : ''}`}
                  onClick={() => setActiveTab('expertise')}
                >
                  <span className="tab-icon">💡</span>
                  Expertise
                </button>
              </div>

              <div className="tab-content">
                {activeTab === 'mission' && (
                  <div className="tab-panel active">
                    <h3>Driving Digital Transformation</h3>
                    <p>
                      We empower businesses to achieve digital excellence through innovative marketing strategies 
                      that generate measurable growth and sustainable competitive advantage.
                    </p>
                    <div className="highlights-grid">
                      <div className="highlight-item">
                        <div className="highlight-icon">📊</div>
                        <span>Data-Driven Insights</span>
                      </div>
                      <div className="highlight-item">
                        <div className="highlight-icon">🎨</div>
                        <span>Creative Excellence</span>
                      </div>
                      <div className="highlight-item">
                        <div className="highlight-icon">⚡</div>
                        <span>Rapid Execution</span>
                      </div>
                      <div className="highlight-item">
                        <div className="highlight-icon">📈</div>
                        <span>Proven Results</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'approach' && (
                  <div className="tab-panel active">
                    <h3>Strategic Partnership Model</h3>
                    <p>
                      Our collaborative approach combines deep industry knowledge with cutting-edge digital 
                      expertise to deliver campaigns that consistently outperform expectations.
                    </p>
                    <div className="highlights-grid">
                      <div className="highlight-item">
                        <div className="highlight-icon">🔍</div>
                        <span>In-Depth Analysis</span>
                      </div>
                      <div className="highlight-item">
                        <div className="highlight-icon">🔄</div>
                        <span>Agile Methodology</span>
                      </div>
                      <div className="highlight-item">
                        <div className="highlight-icon">📱</div>
                        <span>Multi-Channel</span>
                      </div>
                      <div className="highlight-item">
                        <div className="highlight-icon">🎯</div>
                        <span>Precision Targeting</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'expertise' && (
                  <div className="tab-panel active">
                    <h3>Digital Mastery</h3>
                    <p>
                      With comprehensive expertise across all digital channels, we create integrated 
                      marketing ecosystems that drive meaningful engagement and measurable business outcomes.
                    </p>
                    <div className="highlights-grid">
                      <div className="highlight-item">
                        <div className="highlight-icon">🌐</div>
                        <span>Digital Strategy</span>
                      </div>
                      <div className="highlight-item">
                        <div className="highlight-icon">📢</div>
                        <span>Brand Amplification</span>
                      </div>
                      <div className="highlight-item">
                        <div className="highlight-icon">💬</div>
                        <span>Community Building</span>
                      </div>
                      <div className="highlight-item">
                        <div className="highlight-icon">🎪</div>
                        <span>Conversion Optimization</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Enhanced Stats Section */}
            <div className="performance-stats">
              <div className="stats-header">
                <h4>Performance Metrics</h4>
                <p>Real results that drive business growth</p>
              </div>
              <div className="stats-grid">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-card">
                    <div className="stat-icon-wrapper">
                      <div className="stat-icon-bg"></div>
                    </div>
                    <div className="stat-number">
                      <Counter 
                        end={stat.number} 
                        suffix={stat.suffix}
                        duration={stat.duration}
                      />
                    </div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="services-section">
          <div className="services-header">
            <h3>Core Services</h3>
            <p>Comprehensive digital marketing solutions tailored to your business objectives</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="service-card"
                style={{ '--service-color': service.color }}
              >
                <div className="service-header">
                  <div className="service-icon">{service.icon}</div>
                  <h4>{service.title}</h4>
                </div>
                <p>{service.description}</p>
                <div className="service-cta">
                  <span>Learn more →</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Infinite Horizontal Image Scrolling Section */}
        <div className="clients-section">
          <div className="clients-header">
            <h4>Trusted by Industry Leaders</h4>
            <p>We've helped these amazing companies achieve their digital goals</p>
          </div>
          <div className="scrolling-container">
            <div 
              className="scrolling-track"
              ref={scrollTrackRef}
            >
              {duplicatedClients.map((client, index) => (
                <div 
                  key={`${client.id}-${index}`} 
                  className="client-image-card"
                >
                  <div className="client-image-wrapper">
                    <img 
                      src={client.image} 
                      alt={client.name}
                      className="client-image"
                    />
                    <div className="client-overlay">
                      <span className="client-name">{client.name}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="scrolling-gradient left-gradient"></div>
          <div className="scrolling-gradient right-gradient"></div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <div className="cta-content">
            <div className="cta-text">
              <h3>Ready to Elevate Your Digital Presence?</h3>
              <p>Schedule your complimentary strategy session and discover how we can drive exceptional results for your business.</p>
            </div>
            <div className="cta-actions">
              <button className="cta-btn primary">Book Strategy Call</button>
              <button className="cta-btn secondary">View Portfolio</button>
            </div>
            <div className="cta-social">
              <span>Connect with us:</span>
              <div className="social-links">
                <a href="#" className="social-link">
                  <img src={instagram} alt="Instagram" />
                </a>
                <a href="#" className="social-link">
                  <img src={youtube} alt="YouTube" />
                </a>
                <a href="#" className="social-link">
                  <img src={whatsapp} alt="WhatsApp" />
                </a>
                <a href="#" className="social-link">
                  <img src={email} alt="Email" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe2;
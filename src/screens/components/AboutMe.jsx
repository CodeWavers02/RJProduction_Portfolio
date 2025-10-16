import React, { useEffect, useRef, useState } from "react";
import "./aboutme.css";
import profile from "../../assets/user.jpeg";
import instagram from "../../assets/instagram.png";
import whatsapp from "../../assets/whatsapp.png";
import email from "../../assets/email.png";
import youtube from "../../assets/youtube.png";

const ProfileSection = ({ servicesRef }) => {
  const [isVisible, setIsVisible] = useState(false);
  const profileRef = useRef(null);

  const scrollToServices = () => {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
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
    <section className="profile-hero" ref={profileRef}>
      <div className="profile-hero-container">
        {/* Background Elements */}
        <div className="hero-background">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
        </div>

        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          
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
              <span>Available for projects</span>
            </div>
          </div>

          {/* Profile Info */}
          <div className="hero-info">
            <div className="intro-badge">
              <span className="badge-text">Digital Creator & Marketer</span>
              <div className="badge-glow"></div>
            </div>
            
            <h1 className="hero-name">
              Ashish <span className="name-accent">Lohakare</span>
            </h1>
            
            <p className="hero-description">
              I blend <span className="highlight-word">creativity</span> with <span className="highlight-word">technology</span> to craft engaging digital experiences. 
              Specializing in web development, digital marketing, and brand strategy 
              that drives <span className="highlight-word">real results</span> for businesses.
            </p>

            {/* Interactive Quick Stats */}
            <div className="quick-stats">
              {[
                { number: "150+", label: "Projects", delay: 0 },
                { number: "5+", label: "Years", delay: 0.1 },
                { number: "100%", label: "Satisfaction", delay: 0.2 }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="stat"
                  style={{ animationDelay: `${stat.delay}s` }}
                >
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Interactive Expertise Tags */}
            <div className="expertise-section">
              <div className="section-label">What I Do</div>
              <div className="expertise-tags">
                {["Web Design", "Development", "Digital Marketing", "Brand Strategy", "Creative Solutions"]
                  .map((tag, index) => (
                    <span 
                      key={index}
                      className="expertise-tag"
                      style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                    >
                      {tag}
                    </span>
                  ))}
              </div>
            </div>

            {/* Enhanced CTA & Social */}
            <div className="hero-actions">
              <button className="cta-button primary">
                <span>Start a Project</span>
                <div className="button-sparkle"></div>
                <div className="button-arrow">→</div>
              </button>
              <button className="cta-button secondary">
                <span>View My Work</span>
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
      url: "https://instagram.com/yourusername" 
    },
    { 
      icon: whatsapp, 
      name: "WhatsApp", 
      color: "#25D366",
      url: "https://wa.me/yournumber" 
    },
    { 
      icon: email, 
      name: "Email", 
      color: "#EA4335",
      url: "mailto:your@email.com" 
    },
    { 
      icon: youtube, 
      name: "YouTube", 
      color: "#FF0000",
      url: "https://youtube.com/yourchannel" 
    }
  ].map((social, index) => (
    <a 
      key={index}
      href={social.url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="social-link"
      style={{ '--social-color': social.color }}
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
        <div className="scroll-indicator" onClick={scrollToServices}>
          <div className="scroll-text">Explore More</div>
          <div className="scroll-arrow">
            <div className="arrow-line"></div>
            <div className="arrow-head"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = React.forwardRef((props, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const sectionRef = useRef(null);

  // Combine forwarded ref with local ref
  React.useImperativeHandle(ref, () => ({
    scrollIntoView: (options) => sectionRef.current?.scrollIntoView(options)
  }));

  const services = [
    {
      icon: "💻",
      title: "Web Design & Development",
      description: "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "User Friendly"],
      color: "#0077ff"
    },
    {
      icon: "📱",
      title: "Digital Marketing",
      description: "Strategic marketing campaigns that boost engagement, drive traffic, and convert visitors into customers.",
      features: ["Social Media", "Content Strategy", "Analytics", "Campaign Management"],
      color: "#00c6ff"
    },
    {
      icon: "🎨",
      title: "Creative Solutions",
      description: "Brand identity, visual design, and creative content that tells your story and connects with your audience.",
      features: ["Brand Identity", "Visual Design", "Content Creation", "UI/UX Design"],
      color: "#764ba2"
    },
    {
      icon: "📊",
      title: "Marketing Strategy",
      description: "Data-driven strategies and analytics to help you understand your audience and maximize your digital presence.",
      features: ["Market Analysis", "Strategy Planning", "Performance Tracking", "ROI Optimization"],
      color: "#ff6b6b"
    }
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
        <div className={`services-header ${isVisible ? 'visible' : ''}`}>
          <div className="section-badge">Services</div>
          <h2 className="section-title">
            How I Can Help Your <span className="text-gradient">Business Grow</span>
          </h2>
          <p className="section-description">
            Comprehensive digital solutions tailored to your unique needs and goals. 
            From concept to execution, I deliver results that matter.
          </p>
        </div>

        <div className="services-content">
          {/* Service Navigation */}
          <div className="services-navigation">
            {services.map((service, index) => (
              <button
                key={index}
                className={`service-nav-item ${activeService === index ? 'active' : ''}`}
                onClick={() => setActiveService(index)}
                style={{ '--service-color': service.color }}
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
                className={`service-detail ${activeService === index ? 'active' : ''}`}
                style={{ '--service-color': service.color }}
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
                  Learn More
                  <span className="cta-arrow">→</span>
                </button>
                <div className="service-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    projects: 0,
    experience: 0,
    clients: 0,
    satisfaction: 0
  });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const sectionRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      text: "Working with Ashish was a game-changer for our business. His attention to detail and creative approach helped us achieve results we never thought possible.",
      name: "Sarah Johnson",
      role: "Marketing Director, TechStart Inc.",
      avatar: "👩‍💼"
    },
    {
      id: 2,
      text: "Exceptional service and outstanding results! Ashish delivered our project ahead of schedule and exceeded all our expectations. Truly a professional.",
      name: "Michael Chen",
      role: "CEO, Innovate Labs",
      avatar: "👨‍💼"
    },
    {
      id: 3,
      text: "The website Ashish built for us increased our conversion rate by 40%. His understanding of both design and marketing is remarkable.",
      name: "Emily Rodriguez",
      role: "Founder, Bloom & Grow",
      avatar: "👩‍🎨"
    },
    {
      id: 4,
      text: "Outstanding developer and strategist. Ashish not only built a beautiful website but also helped us develop a digital strategy that actually works.",
      name: "David Thompson",
      role: "Product Manager, NextGen Tech",
      avatar: "👨‍💻"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate counters
          animateCounter(0, 150, 2000, (value) => setCounters(prev => ({...prev, projects: value})));
          animateCounter(0, 5, 1500, (value) => setCounters(prev => ({...prev, experience: value})));
          animateCounter(0, 89, 1800, (value) => setCounters(prev => ({...prev, clients: value})));
          animateCounter(0, 100, 2000, (value) => setCounters(prev => ({...prev, satisfaction: value})));
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

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const animateCounter = (start, end, duration, setter) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      setter(value);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  return (
    <section className="experience-section" ref={sectionRef}>
      <div className="experience-container">
        <div className={`experience-header ${isVisible ? 'visible' : ''}`}>
          <div className="section-badge">Experience</div>
          <h2 className="section-title">
            Trusted by Businesses <span className="text-gradient">Worldwide</span>
          </h2>
          <p className="section-description">
            Years of dedication and passion reflected in numbers that speak for themselves.
          </p>
        </div>

        <div className="stats-grid">
          {[
            { 
              number: counters.projects, 
              suffix: "+", 
              label: "Projects Completed", 
              description: "Successful digital projects delivered",
              icon: "🚀"
            },
            { 
              number: counters.experience, 
              suffix: "+", 
              label: "Years Experience", 
              description: "Of dedicated service and innovation",
              icon: "⏳"
            },
            { 
              number: counters.clients, 
              suffix: "%", 
              label: "Client Satisfaction", 
              description: "Happy clients and lasting partnerships",
              icon: "💫"
            },
            { 
              number: counters.satisfaction, 
              suffix: "%", 
              label: "Project Success", 
              description: "Projects delivered on time and on budget",
              icon: "🎯"
            }
          ].map((stat, index) => (
            <div 
              key={index} 
              className={`stat-card ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-content">
                <div className="stat-number">
                  {stat.number}{stat.suffix}
                </div>
                <div className="stat-label">{stat.label}</div>
                <p className="stat-description">{stat.description}</p>
              </div>
              <div className="stat-glow"></div>
            </div>
          ))}
        </div>

        {/* Testimonial Carousel */}
        <div className={`testimonial-section ${isVisible ? 'visible' : ''}`}>
          <div className="testimonial-header">
            <h3 className="testimonial-title">What Clients Say</h3>
            <div className="testimonial-indicators">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${currentTestimonial === index ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
          
          <div className="testimonial-carousel">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-card ${currentTestimonial === index ? 'active' : ''}`}
              >
                <div className="testimonial-content">
                  <div className="quote-icon">"</div>
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-author">
                    <div className="author-avatar">{testimonial.avatar}</div>
                    <div className="author-info">
                      <div className="author-name">{testimonial.name}</div>
                      <div className="author-role">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
                <div className="testimonial-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutMe = () => {
  const servicesRef = useRef(null);

  return (
    <div className="about-page">
      <ProfileSection servicesRef={servicesRef} />
      <ServicesSection ref={servicesRef} />
      <ExperienceSection />
    </div>
  );
};

export default AboutMe;
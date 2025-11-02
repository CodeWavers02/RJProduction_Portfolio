import React, { useEffect, useRef, useState } from "react";
import "./css/Client.css";
// import "../Projects/Projects.jsx";
import { useNavigate } from "react-router-dom";

const ServicesSection = React.forwardRef((props, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const sectionRef = useRef(null);

  React.useImperativeHandle(ref, () => ({
    scrollIntoView: (options) => sectionRef.current?.scrollIntoView(options),
  }));

  const services = [
    {
      icon: "💻",
      title: "Web Design & Development",
      description:
        "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
      features: [
        "Responsive Design",
        "SEO Optimized",
        "Fast Loading",
        "User Friendly",
      ],
      color: "#0077ff",
    },
    {
      icon: "📱",
      title: "Digital Marketing",
      description:
        "Strategic marketing campaigns that boost engagement, drive traffic, and convert visitors into customers.",
      features: [
        "Social Media",
        "Content Strategy",
        "Analytics",
        "Campaign Management",
      ],
      color: "#00c6ff",
    },
    {
      icon: "🎨",
      title: "Creative Solutions",
      description:
        "Brand identity, visual design, and creative content that tells your story and connects with your audience.",
      features: [
        "Brand Identity",
        "Visual Design",
        "Content Creation",
        "UI/UX Design",
      ],
      color: "#764ba2",
    },
    {
      icon: "📊",
      title: "Marketing Strategy",
      description:
        "Data-driven strategies and analytics to help you understand your audience and maximize your digital presence.",
      features: [
        "Market Analysis",
        "Strategy Planning",
        "Performance Tracking",
        "ROI Optimization",
      ],
      color: "#ff6b6b",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="services-section-ser" ref={sectionRef}>
      <div className="services-container-ser">
        <div className={`services-header-ser ${isVisible ? "visible" : ""}`}>
          <div className="section-badge-ser">Services</div>
          <h2 className="section-title-ser">
            How I Can Help Your{" "}
            <span className="text-gradient-ser">Business Grow</span>
          </h2>
          <p className="section-description-ser">
            Comprehensive digital solutions tailored to your unique needs and
            goals. From concept to execution, I deliver results that matter.
          </p>
        </div>

        <div className="services-content-ser">
          {/* Horizontal Navigation Row */}
          <div className="services-navigation-ser">
            {services.map((service, index) => (
              <button
                key={index}
                className={`service-nav-item-ser ${
                  activeService === index ? "active" : ""
                }`}
                onClick={() => setActiveService(index)}
                style={{ "--service-color": service.color }}
              >
                <div className="nav-icon-ser">{service.icon}</div>
                <span className="nav-title-ser">{service.title}</span>
              </button>
            ))}
          </div>

          {/* Active Service Detail Below */}
          <div className="service-display-ser">
            <div
              className="service-detail-ser"
              style={{ "--service-color": services[activeService].color }}
            >
              <div className="detail-header-ser">
                <div className="detail-icon-ser">
                  {services[activeService].icon}
                </div>
                <h3 className="detail-title-ser">
                  {services[activeService].title}
                </h3>
              </div>
              <p className="detail-description-ser">
                {services[activeService].description}
              </p>
              <div className="detail-features-ser">
                {services[activeService].features.map((feature, index) => (
                  <div key={index} className="feature-item-ser">
                    <div className="feature-check-ser">✓</div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <button
                className="detail-cta-ser"
                onClick={() => navigate("/projects")}
              >
                Projects <span className="cta-arrow-ser">→</span>
              </button>
              <div className="service-glow-ser"></div>
            </div>
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
    satisfaction: 0,
  });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const sectionRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      text: "Working with Ashish was a game-changer for our business. His attention to detail and creative approach helped us achieve results we never thought possible.",
      name: "Sarah Johnson",
      role: "Marketing Director, TechStart Inc.",
      avatar: "👩‍💼",
    },
    {
      id: 2,
      text: "Exceptional service and outstanding results! Ashish delivered our project ahead of schedule and exceeded all our expectations. Truly a professional.",
      name: "Michael Chen",
      role: "CEO, Innovate Labs",
      avatar: "👨‍💼",
    },
    {
      id: 3,
      text: "The website Ashish built for us increased our conversion rate by 40%. His understanding of both design and marketing is remarkable.",
      name: "Emily Rodriguez",
      role: "Founder, Bloom & Grow",
      avatar: "👩‍🎨",
    },
    {
      id: 4,
      text: "Outstanding developer and strategist. Ashish not only built a beautiful website but also helped us develop a digital strategy that actually works.",
      name: "David Thompson",
      role: "Product Manager, NextGen Tech",
      avatar: "👨‍💻",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateCounter(0, 150, 2000, (v) =>
            setCounters((p) => ({ ...p, projects: v }))
          );
          animateCounter(0, 5, 1500, (v) =>
            setCounters((p) => ({ ...p, experience: v }))
          );
          animateCounter(0, 89, 1800, (v) =>
            setCounters((p) => ({ ...p, clients: v }))
          );
          animateCounter(0, 100, 2000, (v) =>
            setCounters((p) => ({ ...p, satisfaction: v }))
          );
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

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
      setter(Math.floor(progress * (end - start) + start));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  return (
    <section className="experience-section-ser" ref={sectionRef}>
      <div className="experience-container-ser">
        <div
          className={`testimonial-section-ser ${isVisible ? "visible" : ""}`}
        >
          <div className="testimonial-header-ser">
            <h3 className="testimonial-title-ser">What Clients Say</h3>
            <div className="testimonial-indicators-ser">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`indicator-ser ${
                    currentTestimonial === index ? "active" : ""
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>

          <div className="testimonial-carousel-ser">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-card-ser ${
                  currentTestimonial === index ? "active" : ""
                }`}
              >
                <div className="testimonial-content-ser">
                  <div className="quote-icon-ser">"</div>
                  <p className="testimonial-text-ser">{testimonial.text}</p>
                  <div className="testimonial-author-ser">
                    <div className="author-avatar-ser">
                      {testimonial.avatar}
                    </div>
                    <div className="author-info-ser">
                      <div className="author-name-ser">{testimonial.name}</div>
                      <div className="author-role-ser">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
                <div className="testimonial-glow-ser"></div>
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
    <div className="about-page-ser">
      <ServicesSection ref={servicesRef} />
      <ExperienceSection />
    </div>
  );
};

export default AboutMe;

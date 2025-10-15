import React, { useEffect, useState, useRef } from "react";
import "./aboutme.css";
import web from "../../assets/img1.jpeg";
import marketing from "../../assets/img2.jpg";
import photography from "../../assets/img3.jpeg";
import creative from "../../assets/img4.jpeg";
import strategy from "../../assets/img5.jpeg";

const ServicesSection = () => {
  const roles = [
    "Social Media Marketing",
    "Creative Services",
    "Photography & Videography",
    "Digital Branding",
    "Marketing Strategy",
  ];

  const services = [
    {
      img: web,
      title: "Web Design & Development",
      desc: "Creating responsive and user-friendly websites that connect technology and creativity.",
    },
    {
      img: marketing,
      title: "Social Media Marketing",
      desc: "Boosting engagement and visibility with smart campaigns and content strategies.",
    },
    {
      img: photography,
      title: "Photography & Videography",
      desc: "Capturing professional visuals that enhance your brand identity and storytelling.",
    },
    {
      img: creative,
      title: "Creative Design",
      desc: "Designing impactful visuals from brochures to packaging that express your brand.",
    },
    {
      img: strategy,
      title: "Marketing Strategy",
      desc: "Building data-driven marketing solutions to help brands reach the right audience.",
    },
  ];

  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [currentService, setCurrentService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const sectionRef = useRef(null);

  // Intersection Observer for animations
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

  // Typing effect
  useEffect(() => {
    const fullText = roles[currentRole];
    const typingSpeed = deleting ? 60 : 120;

    const timeout = setTimeout(() => {
      if (!deleting && displayText.length < fullText.length) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
      } else if (deleting && displayText.length > 0) {
        setDisplayText(fullText.substring(0, displayText.length - 1));
      } else if (!deleting && displayText.length === fullText.length) {
        setTimeout(() => setDeleting(true), 1000);
      } else if (deleting && displayText.length === 0) {
        setDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, deleting, roles, currentRole]);

  // Auto-switch service
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <div className={`section services-section ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
      <div className="content-wrapper">
        <h1 className="typed-heading">
          I specialize in <br />
          <span className="dynamic-text">{displayText}</span>
          <span className="cursor">|</span>
        </h1>

        <p className="intro-text">
          Helping businesses build a strong digital presence through design,
          branding, and interactive web & mobile experiences.
        </p>

        {/* Fixed service boxes with changing content */}
        <div className="service-showcase">
          <div className="service-box image-box floating">
            <div className="service-content">
              <img 
                src={services[currentService].img} 
                alt={services[currentService].title}
                key={currentService}
                className="service-image"
              />
              <div className="image-overlay"></div>
            </div>
          </div>
          <div className="service-box text-box slide-in">
            <div className="service-content">
              <h3 key={currentService} className="service-title">
                {services[currentService].title}
              </h3>
              <p key={currentService + "desc"} className="service-desc">
                {services[currentService].desc}
              </p>
              <div className="service-indicators">
                {services.map((_, index) => (
                  <div
                    key={index}
                    className={`indicator ${index === currentService ? 'active' : ''}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
import React, { useEffect, useState, useRef } from "react";
import "./aboutme.css";

const ExperienceSection = () => {
  const [projectsCount, setProjectsCount] = useState(0);
  const [experienceCount, setExperienceCount] = useState(0);
  const [countersVisible, setCountersVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const experienceRef = useRef(null);
  const sectionRef = useRef(null);

  // Intersection Observer for section animation
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

  // Intersection Observer for counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCountersVisible(true);
          // Animate projects count
          animateCounter(0, 150, 2000, setProjectsCount);
          // Animate experience count
          animateCounter(0, 3, 1500, setExperienceCount);
        }
      },
      { threshold: 0.5 }
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, []);

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
    <div className={`section experience-section ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
      <div className="experience-container" ref={experienceRef}>
        <h2 className="experience-title slide-up">
          My Journey in Numbers
        </h2>
        <div className="stats-grid">
          <div className="stat-card scale-in">
            <div className="stat-icon">🚀</div>
            <div className="stat-number">
              {countersVisible && <span className="count-animation">{projectsCount}+</span>}
            </div>
            <div className="stat-label">Projects Completed</div>
            <p className="stat-description">
              Successful digital projects delivered with excellence and creativity
            </p>
          </div>
          
          <div className="stat-card scale-in" style={{animationDelay: '0.2s'}}>
            <div className="stat-icon">⏳</div>
            <div className="stat-number">
              {countersVisible && <span className="count-animation">{experienceCount}+</span>}
            </div>
            <div className="stat-label">Years Experience</div>
            <p className="stat-description">
              Years of dedicated service in digital marketing and web development
            </p>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
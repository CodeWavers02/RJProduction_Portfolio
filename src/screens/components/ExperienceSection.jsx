// ExperienceSection.jsx
import React, { useEffect, useRef, useState } from "react";
import "./aboutme.css";

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    projects: 0,
    experience: 0,
    clients: 0,
    satisfaction: 0,
  });

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          animateCounter(0, 250, 2000, (value) =>
            setCounters((prev) => ({ ...prev, projects: value }))
          );
          animateCounter(0, 5, 1500, (value) =>
            setCounters((prev) => ({ ...prev, experience: value }))
          );
          animateCounter(0, 120, 1800, (value) =>
            setCounters((prev) => ({ ...prev, clients: value }))
          );
          animateCounter(0, 98, 2000, (value) =>
            setCounters((prev) => ({ ...prev, satisfaction: value }))
          );
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () =>
      sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  const animateCounter = (start, end, duration, setter) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min(
        (timestamp - startTimestamp) / duration,
        1
      );
      const value = Math.floor(progress * (end - start) + start);
      setter(value);
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  };

  return (
    <section className="experience-section" ref={sectionRef}>
      <div className="experience-container">
        <div className={`experience-header ${isVisible ? "visible" : ""}`}>
          <div className="section-badge">Proven Results</div>
          <h2 className="section-title">
            Driving <span className="text-gradient">Digital Success</span> Stories
          </h2>
          <p className="section-description">
            Real numbers, real clients, real impact. See how data-driven strategies
            deliver exceptional results.
          </p>
        </div>

        <div className="stats-grid">
          {[
            {
              number: counters.projects,
              suffix: "+",
              label: "Campaigns Launched",
              description: "Successful digital marketing campaigns",
              icon: "🚀",
            },
            {
              number: counters.experience,
              suffix: "+",
              label: "Years Experience",
              description: "Of digital marketing excellence",
              icon: "⏳",
            },
            {
              number: counters.satisfaction,
              suffix: "%",
              label: "Client Satisfaction",
              description: "Exceptional service delivery",
              icon: "🎯",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className={`stat-card ${isVisible ? "visible" : ""}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-content">
                <div className="stat-number">
                  {stat.number}
                  {stat.suffix}
                </div>
                <div className="stat-label">{stat.label}</div>
                <p className="stat-description">{stat.description}</p>
              </div>
              <div className="stat-glow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

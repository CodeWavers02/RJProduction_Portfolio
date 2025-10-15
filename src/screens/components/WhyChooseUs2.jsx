import React, { useState, useEffect, useRef } from "react";
import "./whychooseus2.css";

// Import your images
import mainImage from "../../assets/img2.jpg";

const WhyChooseUs2 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const reasons = [
    {
      id: 1,
      title: "Sample Headline",
      description: "Sample text. Click to select the text box.",
      icon: "✓",
      delay: 0.1
    },
    {
      id: 2,
      title: "Sample Headline",
      description: "Sample text. Click to select the text box.",
      icon: "✓",
      delay: 0.2
    },
    {
      id: 3,
      title: "Sample Headline",
      description: "Sample text. Click to select the text box.",
      icon: "✓",
      delay: 0.3
    },
    {
      id: 4,
      title: "Sample Headline",
      description: "Sample text. Click to select the text box.",
      icon: "✓",
      delay: 0.4
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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
    <section className="why-choose-us-section" ref={sectionRef}>
      <div className="why-choose-us-container">
        {/* Left Side - Content */}
        <div className="why-choose-content">
          {/* Main Heading */}
          <div className={`main-heading-box ${isVisible ? 'animate-in' : ''}`}>
            <h2 className="main-title">
              WHY <span className="accent-text">CHOOSE US?</span>
            </h2>
            <p className="main-description">
              Everyday we work hard to make life of our clients better and happier.
            </p>
            <button className="visit-site-btn">
              Visit Site
              <span className="btn-arrow">→</span>
            </button>
          </div>

          {/* Two Reason Boxes Side by Side */}
          <div className="reasons-row">
            {reasons.slice(0, 2).map((reason, index) => (
              <div
                key={reason.id}
                className={`reason-box ${isVisible ? 'animate-in' : ''}`}
                style={{ animationDelay: `${reason.delay}s` }}
              >
                <div className="reason-icon">{reason.icon}</div>
                <h3 className="reason-title">{reason.title}</h3>
                <p className="reason-description">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="why-choose-image">
          <div className={`image-container ${isVisible ? 'animate-in' : ''}`}>
            <img 
              src={mainImage} 
              alt="Our Services" 
              className="main-image"
            />
            <div className="image-overlay"></div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Additional Reasons */}
      <div className={`bottom-reasons-section ${isVisible ? 'animate-in' : ''}`}>
        <div className="bottom-reasons-container">
          {reasons.slice(2, 4).map((reason, index) => (
            <div
              key={reason.id}
              className={`reason-box bottom-reason ${isVisible ? 'animate-in' : ''}`}
              style={{ animationDelay: `${reason.delay}s` }}
            >
              <div className="reason-icon">{reason.icon}</div>
              <h3 className="reason-title">{reason.title}</h3>
              <p className="reason-description">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
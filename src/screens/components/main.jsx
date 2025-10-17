import React, { useEffect, useRef, useState } from "react";
import "./main.css";

import img1 from "../../assets/img1.jpeg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpeg";
import img4 from "../../assets/img4.jpeg";
import img5 from "../../assets/img5.jpeg";
import img6 from "../../assets/img6.jpeg";
import img7 from "../../assets/img7.jpeg";
import img8 from "../../assets/img8.jpeg";
import img9 from "../../assets/img9.png";

const Main = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const columns = [
    [img1, img2, img3],
    [img4, img5, img6],
    [img7, img8, img9],
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
    <section className="main-container">
      <div className="aura"></div>
      <div className="aura"></div>
      <div className="aura"></div>
      <div className="aura"></div>
      {/* Left Text Section */}
      <div className="left-content">
        <h1 className="headline">
          The ART <br />
          Of Digital <br />
          Engagement
        </h1>
        <p className="subtitle">
          We bring ideas to life through design, motion, and imagination.
        </p>

        <button className="contact-btn" style={{ width: 150, marginTop: 50 }}>
          Contact
        </button>
      </div>

      {/* Content */}
      <div className="main-content-wrapper">
        {/* Left Text Section */}
        <div className={`main-left-content ${isVisible ? 'main-visible' : ''}`}>
          <div className="main-badge">Digital Creator</div>
          
          <h1 className="main-headline">
            <span className="main-headline-line">Crafting Digital</span>
            <span className="main-headline-gradient">Experiences</span>
            <span className="main-headline-line">That Inspire</span>
          </h1>
          
          <p className="main-subtitle">
            I blend creativity with technology to build engaging digital solutions 
            that drive real results for your business.
          </p>

          {/* Quick Stats */}
          <div className="main-stats">
            <div className="main-stat">
              <div className="main-stat-number">150+</div>
              <div className="main-stat-label">Projects</div>
            </div>
            <div className="main-stat">
              <div className="main-stat-number">5+</div>
              <div className="main-stat-label">Years</div>
            </div>
            <div className="main-stat">
              <div className="main-stat-number">100%</div>
              <div className="main-stat-label">Satisfaction</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="main-actions">
            <button className="main-cta primary" onClick={scrollToServices}>
              <span>View Services</span>
              <div className="main-cta-arrow">→</div>
            </button>
            <button className="main-cta secondary">
              View Portfolio
            </button>
          </div>

          {/* Social Proof */}
          <div className="main-social-proof">
            <div className="main-clients">
              <div className="main-client-avatars">
                <div className="main-client-avatar"></div>
                <div className="main-client-avatar"></div>
                <div className="main-client-avatar"></div>
              </div>
              <div className="main-client-text">
                <strong>50+</strong> satisfied clients worldwide
              </div>
            </div>
          </div>
        </div>

        {/* Right Image Scroller - CSS Animation */}
        <div className="main-right-gallery">
          <div className="main-gallery-container">
            {columns.map((colImages, colIndex) => (
              <div
                className="main-column"
                key={colIndex}
                style={{ 
                  animationDelay: `${colIndex * 2}s`,
                  animationDuration: `${15 + colIndex * 3}s`
                }}
              >
                {/* Triple duplication for seamless loop */}
                {[...colImages, ...colImages, ...colImages].map((img, i) => (
                  <div className="main-image-wrapper" key={i}>
                    <img 
                      src={img} 
                      alt={`gallery-${colIndex}-${i}`} 
                      className="main-gallery-image"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
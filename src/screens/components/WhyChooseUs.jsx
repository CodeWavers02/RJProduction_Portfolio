import React, { useState, useEffect, useRef } from "react";
import "./whychooseus.css";
import sampleImg from "../../assets/img2.jpg";

const WhyChooseUs = () => {
  const reasonsLeft = [
    { 
      title: "Innovative Solutions", 
      text: "We craft cutting-edge digital experiences that push boundaries and deliver exceptional results.",
      icon: "💡"
    },
    { 
      title: "Proven Results", 
      text: "Our strategies are data-driven and tested to ensure maximum impact for your business.",
      icon: "📊"
    },
  ];

  const reasonsRightBottom = [
    { 
      title: "Dedicated Support", 
      text: "We provide continuous support and maintenance to keep your digital presence flawless.",
      icon: "🛠️"
    },
    { 
      title: "Creative Excellence", 
      text: "Every project is treated with artistic vision and technical precision for outstanding outcomes.",
      icon: "🎨"
    },
  ];

  const [animatedLetters, setAnimatedLetters] = useState([]);
  const [currentHighlightIndex, setCurrentHighlightIndex] = useState(-1);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const heading = "WHY CHOOSE US";
    const letters = heading.split("").map((letter, index) => ({
      char: letter,
      id: index,
      isHighlighted: false
    }));
    setAnimatedLetters(letters);

    let interval;
    if (isVisible) {
      setCurrentHighlightIndex(-1);
      
      setTimeout(() => {
        interval = setInterval(() => {
          setCurrentHighlightIndex(prev => {
            const nextIndex = (prev + 1) % heading.length;
            return nextIndex;
          });
        }, 400);
      }, 1200);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isVisible]);

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

  const getLetterStyle = (index) => {
    if (index === currentHighlightIndex) {
      return {
        color: '#007bff',
        textShadow: '0 0 20px rgba(0, 123, 255, 0.5)',
        transform: 'scale(1.1) translateY(-2px)'
      };
    }
    
    return {
      color: '#ffffff'
    };
  };

  return (
    <section className="why-section" ref={sectionRef}>
      <div className={`why-container ${isVisible ? 'visible' : ''}`}>
        
        {/* Left Side - Two stacked boxes */}
        <div className="why-left">
          {reasonsLeft.map((item, index) => (
            <div 
              className={`why-box left-box ${isVisible ? 'animate-in' : ''}`} 
              key={index}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="box-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="box-glow"></div>
              <div className="box-hover-effect"></div>
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div className={`why-center ${isVisible ? 'animate-in' : ''}`}>
          <div className="image-container">
            <img src={sampleImg} alt="Why Choose Us" />
            <div className="image-overlay"></div>
            <div className="image-glow"></div>
          </div>
          <div className="floating-elements">
            <div className="floating-element el-1"></div>
            <div className="floating-element el-2"></div>
            <div className="floating-element el-3"></div>
          </div>
        </div>

        {/* Right Side */}
        <div className="why-right">
          {/* Top Right - Why Choose Us */}
          <div className="why-top-right">
            <div className={`why-heading-box ${isVisible ? 'animate-in' : ''}`}>
              <div className="heading-content">
                <h2 className="animated-heading">
                  {animatedLetters.map((letter, index) => (
                    <span
                      key={letter.id}
                      className="heading-letter"
                      style={{
                        animationDelay: `${index * 0.1}s`,
                        ...getLetterStyle(index),
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {letter.char}
                    </span>
                  ))}
                </h2>
                <p className="animated-description">
                  We combine creativity with technology to deliver exceptional digital experiences 
                  that drive real results for your business.
                </p>
              </div>
              <div className="accent-line"></div>
            </div>
          </div>

          {/* Bottom Right - Two side by side boxes */}
          <div className="why-bottom-right">
            {reasonsRightBottom.map((item, index) => (
              <div 
                className={`why-box right-box ${isVisible ? 'animate-in' : ''}`} 
                key={index}
                style={{ animationDelay: `${0.6 + index * 0.2}s` }}
              >
                <div className="box-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="box-highlight"></div>
                <div className="box-particles">
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="background-elements">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
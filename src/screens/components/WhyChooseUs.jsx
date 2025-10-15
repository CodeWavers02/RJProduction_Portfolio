import React, { useState, useEffect, useRef } from "react";
import "./whychooseus.css";
import sampleImg from "../../assets/img2.jpg";

const WhyChooseUs = () => {
  const reasonsLeft = [
    { title: "SAMPLE HEADLINE", text: "Sample text. Click to select the text box." },
    { title: "SAMPLE HEADLINE", text: "Sample text. Click to select the text box." },
  ];

  const reasonsRightBottom = [
    { title: "SAMPLE HEADLINE", text: "Sample text. Click to select the text box." },
    { title: "SAMPLE HEADLINE", text: "Sample text. Click to select the text box." },
  ];

  const [animatedLetters, setAnimatedLetters] = useState([]);
  const [currentBlueIndex, setCurrentBlueIndex] = useState(-1);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Split the heading into letters for animation
    const heading = "WHY CHOOSE US?";
    const letters = heading.split("").map((letter, index) => ({
      char: letter,
      id: index,
      isBlue: false
    }));
    setAnimatedLetters(letters);

    // Start color animation only when visible
    let interval;
    if (isVisible) {
      setCurrentBlueIndex(-1);
      
      // Start the blue letter animation after a delay
      setTimeout(() => {
        interval = setInterval(() => {
          setCurrentBlueIndex(prev => {
            const nextIndex = (prev + 1) % heading.length;
            return nextIndex;
          });
        }, 300); // Change blue letter every 300ms
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isVisible]);

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
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

  const getLetterStyle = (index, letter) => {
    if (letter === "W") {
      return {
        background: 'white',
        textShadow: '0 0 10px rgba(0,0,0,0.3)',
        WebkitTextStroke: '2px black',
        color: 'white'
      };
    }
    
    if (index === currentBlueIndex) {
      return {
        color: '#007bff',
        textShadow: '0 0 10px rgba(0, 123, 255, 0.3)',
        transform: 'scale(1.2)'
      };
    }
    
    return {
      color: '#000000'
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
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="box-hover-effect"></div>
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div className={`why-center ${isVisible ? 'animate-in' : ''}`}>
          <img src={sampleImg} alt="Why Choose Us" />
          <div className="image-glow"></div>
        </div>

        {/* Right Side */}
        <div className="why-right">
          {/* Top Right - Why Choose Us */}
          <div className="why-top-right">
            <div className={`why-heading-box ${isVisible ? 'animate-in' : ''}`}>
              <h2 className="animated-heading">
                {animatedLetters.map((letter, index) => (
                  <span
                    key={letter.id}
                    className="heading-letter"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      ...getLetterStyle(index, letter.char),
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {letter.char}
                  </span>
                ))}
              </h2>
              <p className="animated-description">
                Everyday we work hard to make life of our clients better and happier.
              </p>
              <div className="floating-dots">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>
          </div>

          {/* Bottom Right - Two side by side boxes */}
          <div className={`why-bottom-right ${isVisible ? 'animate-in' : ''}`}>
            {reasonsRightBottom.map((item, index) => (
              <div 
                className="why-box right-box" 
                key={index}
                style={{ animationDelay: `${0.6 + index * 0.2}s` }}
              >
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="box-highlight"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
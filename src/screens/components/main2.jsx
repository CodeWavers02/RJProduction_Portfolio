import React, { useState, useEffect } from "react";
import "./main2.css";

// Import your images - replace these with your actual images
import carousel1 from "../../assets/newCarousel/1.png";
import carousel2 from "../../assets/newCarousel/2.png";
import carousel3 from "../../assets/newCarousel/3.png";
import carousel4 from "../../assets/newCarousel/4.png";
import carousel5 from "../../assets/newCarousel/5.png";

const Main2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isCameraActive, setIsCameraActive] = useState(false);

  const carouselImages = [carousel2, carousel4, carousel3, carousel5, carousel1];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const handleCameraClick = () => {
    setIsCameraActive(true);
    setTimeout(() => setIsCameraActive(false), 300);
  };

  return (
    <div className="main2-container">
      {/* Full Width Carousel */}
      <div className="main2-carousel">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`main2-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        
        {/* Carousel Overlay Content */}
        <div className="main2-content-overlay">
          <div className="main2-tagline">
            ELEVATE YOUR DIGITAL PRESENCE
          </div>
          
          <h1 className="main2-headline">
            Your Story Deserves Maximum Impact
          </h1>
          
          <p className="main2-description">
            We craft digital experiences that inspire, engage, and deliver results. Your success drives us.
          </p>
          
          {/* Camera Button */}
          {/* <div className="main2-camera-container">
            <button 
              className={`main2-camera-btn ${isCameraActive ? 'flash' : ''}`}
              onClick={handleCameraClick}
            >
              <div className="camera-icon">
                <div className="camera-body">
                  <div className="camera-lens"></div>
                  <div className="camera-flash"></div>
                </div>
              </div>
              <span>Launch Your Campaign</span>
            </button>
          </div> */}
        </div>

        {/* Carousel Indicators */}
        <div className="main2-indicators">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              className={`main2-indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Floating Brand Elements */}
      <div className="main2-floating-elements">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>
    </div>
  );
};

export default Main2;
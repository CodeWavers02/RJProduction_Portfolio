import React, { useState } from "react";
import "./allservices.css";

// Import your service images
import web from "../../assets/img1.jpeg";
import marketing from "../../assets/img2.jpg";
import photography from "../../assets/img3.jpeg";
import creative from "../../assets/img4.jpeg";
import strategy from "../../assets/img5.jpeg";

const AllServices = () => {
  const [activeImage, setActiveImage] = useState(0);

  const services = [
    {
      id: 1,
      title: "Web Design & Development",
      description: "Creating responsive and user-friendly websites that connect technology and creativity. We build modern web experiences that drive results.",
      image: web,
      link: "#web-design"
    },
    {
      id: 2,
      title: "Social Media Marketing",
      description: "Boosting engagement and visibility with smart campaigns and content strategies. Grow your audience and increase brand awareness.",
      image: marketing,
      link: "#social-media"
    },
    {
      id: 3,
      title: "Photography & Videography",
      description: "Capturing professional visuals that enhance your brand identity and storytelling. High-quality imagery for all your marketing needs.",
      image: photography,
      link: "#photography"
    },
    {
      id: 4,
      title: "Creative Design",
      description: "Designing impactful visuals from brochures to packaging that express your brand. Creative solutions that make you stand out.",
      image: creative,
      link: "#creative-design"
    },
    {
      id: 5,
      title: "Marketing Strategy",
      description: "Building data-driven marketing solutions to help brands reach the right audience. Strategic planning for maximum impact.",
      image: strategy,
      link: "#marketing-strategy"
    }
  ];

  const handleImageHover = (index) => {
    setActiveImage(index);
  };

  return (
    <section className="services-horizontal-section">
      <div className="services-horizontal-container">
        {/* Left Side - Text Content */}
        <div className="services-horizontal-text">
          <h1 className="services-horizontal-title">
            Our <span className="services-gradient-text">Services</span>
          </h1>
          <p className="services-horizontal-subtitle">
            Comprehensive digital solutions to elevate your brand and drive growth. 
            From concept to execution, we deliver excellence in every project.
          </p>
          <div className="services-horizontal-stats">
            <div className="services-stat">
              <div className="services-stat-number">150+</div>
              <div className="services-stat-label">Projects</div>
            </div>
            <div className="services-stat">
              <div className="services-stat-number">5+</div>
              <div className="services-stat-label">Services</div>
            </div>
            <div className="services-stat">
              <div className="services-stat-number">100%</div>
              <div className="services-stat-label">Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Right Side - Horizontal Images */}
        <div className="services-horizontal-images">
          <div className="services-images-wrapper">
            {services.map((service, index) => (
              <a 
                key={service.id}
                href={service.link}
                className={`services-horizontal-item ${activeImage === index ? 'services-active' : ''}`}
                onMouseEnter={() => handleImageHover(index)}
              >
                <div className="services-image-container">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="services-horizontal-image"
                  />
                  <div className="services-image-overlay"></div>
                  
                  {/* Content that appears on expanded state */}
                  <div className="services-expanded-content">
                    <h3 className="services-expanded-title">{service.title}</h3>
                    <p className="services-expanded-description">{service.description}</p>
                    <div className="services-expanded-cta">
                      <span>View Details</span>
                      <div className="services-arrow">→</div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllServices;
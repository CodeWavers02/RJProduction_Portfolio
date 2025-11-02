import React, { useState } from "react";
import "./css/Servicespro.css";

const ExperienceSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);

  const services = [
    {
      id: 1,
      title: "Photography",
      short:
        "Capture stunning visuals with our professional photography services.",
      full: "Our photography team captures timeless moments with precision lighting, angles, and creativity — from product shoots to portraits, every shot tells a story.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    },
    {
      id: 2,
      title: "Graphic Design",
      short: "Creative and unique designs to make your brand stand out.",
      full: "We design visually stunning logos, brand identities, and marketing materials that reflect your brand personality and attract your target audience.",
      image:
        "https://images.unsplash.com/photo-1581291519195-ef11498d1cf5?w=800&h=500&fit=crop",
    },
    {
      id: 3,
      title: "Social Media Marketing",
      short: "Boost your online presence with our marketing strategies.",
      full: "Our expert marketers craft effective strategies to grow your social presence, drive engagement, and turn followers into loyal customers.",
      image:
        "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=500&fit=crop",
    },
    {
      id: 4,
      title: "Websites & Applications",
      short: "Build modern, fast, and responsive digital experiences.",
      full: "We design and develop user-friendly, responsive websites and cross-platform applications. Whether it's an e-commerce site, portfolio, or custom mobile app, we ensure seamless performance, scalability, and elegant design.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=500&fit=crop",
    },
  ];

  const handleCardClick = (index) => {
    if (index === activeIndex) {
      // If already centered → open modal
      setSelectedCard(services[index]);
    } else {
      // Otherwise bring that card to center
      setActiveIndex(index);
    }
  };

  return (
    <section className="experience-section">
      <div className="experience-container">
        <h2 className="section-title">
          Our <span className="text-gradient">Services</span>
        </h2>

        {/* --- Cards Carousel --- */}
        <div className="card-carousel">
          {services.map((service, index) => {
            let position = (index - activeIndex + services.length) % services.length;

            let transformStyle = "";
            let zIndex = 0;
            let opacity = 1;

            if (position === 0) {
              transformStyle = "translateX(0) scale(1)";
              zIndex = 3;
            } else if (position === 1) {
              transformStyle = "translateX(250px) scale(0.8)";
              zIndex = 2;
              opacity = 0.8;
            } else if (position === 2) {
              transformStyle = "translateX(-250px) scale(0.8)";
              zIndex = 1;
              opacity = 0.8;
            } else {
              transformStyle = "translateX(600px) scale(0.6)";
              opacity = 0;
            }

            return (
              <div
                key={service.id}
                className={`carousel-card ${index === activeIndex ? "active" : ""}`}
                style={{
                  backgroundImage: `url(${service.image})`,
                  transform: transformStyle,
                  zIndex,
                  opacity,
                }}
                onClick={() => handleCardClick(index)}
              >
                <div className="carousel-overlay">
                  <h3>{service.title}</h3>
                  <p>{service.short}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* --- Modal --- */}
        {selectedCard && (
          <div className="service-modal">
            <div
              className="modal-overlay"
              onClick={() => setSelectedCard(null)}
            ></div>
            <div className="modal-content">
              <button
                className="close-btn"
                onClick={() => setSelectedCard(null)}
              >
                ✖
              </button>
              <img
                src={selectedCard.image}
                alt={selectedCard.title}
                className="modal-img"
              />
              <h2>{selectedCard.title}</h2>
              <p>{selectedCard.full}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExperienceSection;

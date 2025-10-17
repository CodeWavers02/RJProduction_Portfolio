import { useState } from "react";
import "./css/Servicespro.css";

const Servicespro = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Photography",
      description: "Capture stunning visuals with our professional photography services.",
      fullDescription: "Full photography description...",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    },
    {
      id: 2,
      title: "Graphic Design",
      description: "Creative and unique designs to make your brand stand out.",
      fullDescription: "Full graphic design description...",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=500&h=300&fit=crop",
    },
    {
      id: 3,
      title: "Social Media Marketing 1",
      description: "Boost your presence with our tailored social media strategies.",
      fullDescription: "Full marketing description...",
      image: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=500&h=300&fit=crop",
    },
     {
      id: 4,
      title: "Social Media Marketing 2",
      description: "Boost your presence with our tailored social media strategies.",
      fullDescription: "Full marketing description...",
      image: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=500&h=300&fit=crop",
    },
     {
      id: 5,
      title: "Social Media Marketing 3",
      description: "Boost your presence with our tailored social media strategies.",
      fullDescription: "Full marketing description...",
      image: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=500&h=300&fit=crop",
    },
     {
      id: 6,
      title: "Social Media Marketing 4",
      description: "Boost your presence with our tailored social media strategies.",
      fullDescription: "Full marketing description...",
      image: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=500&h=300&fit=crop",
    },
  ];

  const handleCardClick = (index) => {
    if (index === activeIndex) {
      // Center card clicked → open modal
      setModalOpen(true);
    } else {
      // Side card clicked → swap to center
      setActiveIndex(index);
    }
  };

  return (
    <section className="servicespro-section">
      <h1 className="servicespro-title">Our Services</h1>

      <div className="carousel-container">
        <div className="carousel">
          {projects.map((project, index) => {
            let position = index - activeIndex;
            if (position < -1) position += projects.length;
            if (position > 1) position -= projects.length;

            return (
              <div
                key={project.id}
                className={`carousel-card ${
                  position === 0 ? "active" : ""
                } ${position === -1 ? "left" : ""} ${
                  position === 1 ? "right" : ""
                }`}
                onClick={() => handleCardClick(index)}
              >
                <img src={project.image} alt={project.title} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {modalOpen && (
        <div className="modal-backdrop" onClick={() => setModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{projects[activeIndex].title}</h2>
            <p>{projects[activeIndex].fullDescription}</p>
            <button className="close-btn" onClick={() => setModalOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Servicespro;

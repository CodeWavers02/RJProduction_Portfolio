import React from "react";
import "../Services/css/Servicespro.css"; 

// Import images from assets
import photographyImg from "../../assets/img1.jpeg";
import designImg from "../../assets/img3.jpeg";
import marketingImg from "../../assets/img4.jpeg";

function Servicespro() {
  const services = [
    {
      title: "Photography",
      img: photographyImg,
      desc: "Capture stunning visuals with our professional photography services.",
    },
    {
      title: "Graphic Design",
      img: designImg,
      desc: "Creative and unique designs to make your brand stand out.",
    },
    {
      title: "Social Media Marketing",
      img: marketingImg,
      desc: "Boost your presence with our tailored social media strategies.",
    },
  ];

  return (
    <section className="servicespro-container">
      <div className="headerArea">
        <h1>Our Services</h1>
      </div>

      <div className="services-blocks">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.img} alt={service.title} />
            <div className="overlay">
              <h2>{service.title}</h2>
              <p>{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Servicespro;

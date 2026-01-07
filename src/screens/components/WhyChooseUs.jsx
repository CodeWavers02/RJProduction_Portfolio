// WhyChooseUs.jsx
import React from "react";
import "./WhyChooseUs.css";

import strategyIcon from "../../assets/img1.jpeg";
import resultsIcon from "../../assets/img2.jpg";
import innovationIcon from "../../assets/img3.jpeg";
import supportIcon from "../../assets/img4.jpeg";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Strategic Approach",
      description:
        "We design clear, structured, data-driven strategies that give you a powerful competitive edge.",
      image: strategyIcon,
    },
    {
      title: "Proven Results",
      description:
        "Our process focuses on measurable outcomes, long-term value, and impactful performance.",
      image: resultsIcon,
    },
    {
      title: "Innovation & Creativity",
      description:
        "We believe in fresh concepts, bold ideas, and cutting-edge execution that leaves a mark.",
      image: innovationIcon,
    },
    {
      title: "Dedicated Support",
      description:
        "Fast communication, transparency, and hands-on collaboration throughout every stage.",
      image: supportIcon,
    },
  ];

  return (
    <section className="whychoose-wrapper">
      <div className="whychoose-container">
        <h2 className="whychoose-title">Why Choose Us</h2>
        <p className="whychoose-subtitle">
          Creativity, clarity, precision, and passion — blended perfectly.
        </p>

        <div className="whychoose-grid">
          {features.map((item, index) => (
            <div
              key={index}
              className="whychoose-card reveal"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="card-shine"></div>

              <div className="whychoose-img">
                <img src={item.image} alt={item.title} />
              </div>

              <h3 className="whychoose-card-title">{item.title}</h3>
              <p className="whychoose-card-desc">{item.description}</p>

              <div className="card-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

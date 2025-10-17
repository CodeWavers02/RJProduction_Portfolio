import React from "react";
import "./css/Servicesslider.css";

// Import brand images
import brand1 from "../../../src/assets/img1.jpeg";
import brand2 from "../../../src/assets/img3.jpeg";
import brand3 from "../../../src/assets/img4.jpeg";
import brand4 from "../../../src/assets/img5.jpeg";
import brand5 from "../../../src/assets/img6.jpeg";

function Servicesslider() {
  const brands = [brand1, brand2, brand3, brand4, brand5];

  return (
    <div className="slider-container">
      <div className="slider-track">
        {brands.concat(brands).map((brand, index) => (
          <div className="slider-item" key={index}>
            <img src={brand} alt={`Brand ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Servicesslider;

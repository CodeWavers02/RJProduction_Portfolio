import React from "react";
import "./css/Servicesslider.css";

// Import brand images
import brand1 from "../../../src/assets/aastha light without background.png";
import brand2 from "../../../src/assets/Dream Catchers.png";
import brand3 from "../../../src/assets/EYE 10 OPTICALS WORLD_logo.png";
import brand4 from "../../../src/assets/Laxmi Plaza.png";
import brand5 from "../../../src/assets/Laxmi the Mobile.jpg";
import brand6 from "../../../src/assets/Lxmi ART Gallery.jpg";
import brand7 from "../../../src/assets/Mahavir Electronics.jpg";
import brand8 from "../../../src/assets/Watch World.png";



function Servicesslider() {
  const brands = [brand1, brand2, brand3, brand4, brand5,brand6,brand7,brand8];

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

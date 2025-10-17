import React from "react";
import "./css/MainServices.css";
import ComputerModelContainer from "../../3dModels/components/ComputerModelContainer.jsx";

const MainServices = () => {
  return (
    <section className="Services-container">
      {/* Left side */}
      <div className="left-content">
        <h1 className="headline">SERVICES</h1>
      </div>

      
      {/* Right side (3D model) */}
      <div className="right-content">
        <ComputerModelContainer />
      </div>

       {/* Floating Stats Boxes */}
        <div className="floating-box box1">
          <h2>240+</h2>
          <p>PARTNERS</p>
        </div>

        <div className="floating-box box2">
          <h2>92%</h2>
          <p>FASTER TECHNOLOGY</p>
        </div>

       <div className="box3">
          <button className="floating-btn">GET START</button>
        </div>

    </section>
  );
};

export default MainServices;

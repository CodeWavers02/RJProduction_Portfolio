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
    </section>
  );
};

export default MainServices;

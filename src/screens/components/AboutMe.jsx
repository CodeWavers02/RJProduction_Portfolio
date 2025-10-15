import React from "react";
import "./aboutme.css";
import ProfileSection from "./ProfileSection";
import ServicesSection from "./ServicesSection";
import ExperienceSection from "./ExperienceSection";

const AboutMe = () => {
  return (
    <section className="about-section">
           
      <div className="about-container">
        
        {/* LEFT SIDE - Sticky Profile Section */}
        <ProfileSection />

        {/* RIGHT CONTENT - Scrollable Sections */}
        <div className="scrollable-section">
          {/* First Screen - Services */}
          <ServicesSection />

          {/* Second Screen - Experience */}
          <ExperienceSection />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
// AboutMe.jsx
import React, { useRef } from "react";
import ProfileSection from "./ProfileSection";
import ServicesSection from "./ServicesSection";
import ExperienceSection from "./ExperienceSection";
import "./aboutme.css";

const AboutMe = () => {
  const servicesRef = useRef(null);

  return (
    <main className="about-page">
      <ProfileSection servicesRef={servicesRef} />
      <ServicesSection ref={servicesRef} />
      <ExperienceSection />
    </main>
  );
};

export default AboutMe;

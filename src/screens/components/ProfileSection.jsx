import React, { useEffect, useRef } from "react";
import "./aboutme.css";
import profile from "../../assets/user.jpeg";
import instagram from "../../assets/instagram.png";
import whatsapp from "../../assets/whatsapp.png";
import email from "../../assets/email.png";
import youtube from "../../assets/youtube.png";

const ProfileSection = () => {
  const profileRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('profile-visible');
        }
      },
      { threshold: 0.3 }
    );

    if (profileRef.current) {
      observer.observe(profileRef.current);
    }

    return () => {
      if (profileRef.current) {
        observer.unobserve(profileRef.current);
      }
    };
  }, []);

  return (
    <div className="profile-section" ref={profileRef}>
      <div className="sticky-profile">
        <div className="amoeba-container">
          <div className="amoeba-shape"></div>
          <div className="amoeba-shape amoeba-shape-2"></div>
          <div className="profile-img">
            <img src={profile} alt="Ashish Lohakare" />
          </div>
        </div>
        
        <div className="profile-content">
          <h2 className="profile-name">Ashish Lohakare</h2>
          <p className="profile-role">
            A passionate developer and designer blending creativity with
            technology. Specialized in creating engaging digital experiences
            and helping brands grow online through design, strategy, and
            innovation.
          </p>

          <div className="social-links">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-link">
              <img src={instagram} alt="Instagram" />
              <span className="social-tooltip">Instagram</span>
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="social-link">
              <img src={whatsapp} alt="WhatsApp" />
              <span className="social-tooltip">WhatsApp</span>
            </a>
            <a href="mailto:example@email.com" target="_blank" rel="noreferrer" className="social-link">
              <img src={email} alt="Email" />
              <span className="social-tooltip">Email</span>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-link">
              <img src={youtube} alt="YouTube" />
              <span className="social-tooltip">YouTube</span>
            </a>
          </div>

          <button className="contact-btn">Get in Touch</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
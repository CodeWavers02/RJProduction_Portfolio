import React, { useEffect, useRef } from "react";
import "./main.css";

import img1 from "../../assets/img1.jpeg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpeg";
import img4 from "../../assets/img4.jpeg";
import img5 from "../../assets/img5.jpeg";
import img6 from "../../assets/img6.jpeg";
import img7 from "../../assets/img7.jpeg";
import img8 from "../../assets/img8.jpeg";
import img9 from "../../assets/img9.png";

const Main = () => {
  const columnsRef = useRef([]);

  const columns = [
    [img1, img2, img3],
    [img4, img5, img6],
    [img7, img8, img9],
  ];

  useEffect(() => {
    const speeds = [2.0, 1.5, 2.2];

    columnsRef.current.forEach((col, index) => {
      const speed = speeds[index % speeds.length];
      let translateY = 0;

      const animate = () => {
        if (!col) return;

        translateY -= speed;
        const scrollHeight = col.scrollHeight / 2;

        // when the entire duplicated set has scrolled past → reset to 0
        if (Math.abs(translateY) >= scrollHeight) {
          translateY = 0;
        }

        col.style.transform = `translateY(${translateY}px)`;
        requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    });
  }, []);

  return (
    <section className="main-container">
      <div className="aura"></div>
  <div className="aura"></div>
  <div className="aura"></div>
  <div className="aura"></div>
      {/* Left Text Section */}
      <div className="left-content">
        <h1 className="headline">
          The ART <br />
          Of Digital <br />
          Engagement
        </h1>
        <p className="subtitle">
          We bring ideas to life through design, motion, and imagination.
        </p>
        

        <button className="contact-btn" style={{width: 150, marginTop: 50}}>Contact</button>
      </div>

      {/* Right Image Scroller */}
      <div className="right-gallery">
        {columns.map((colImages, colIndex) => (
          <div
            className="column"
            key={colIndex}
            ref={(el) => (columnsRef.current[colIndex] = el)}
          >
            {/* Duplicate twice for seamless loop */}
            {[...colImages, ...colImages].map((img, i) => (
              <img src={img} alt={`gallery-${colIndex}-${i}`} key={i} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Main;

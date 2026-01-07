// TestimonialsSection.jsx
import React, { useEffect, useRef, useState } from "react";
import "./aboutme.css";
import client1 from "../../assets/client1.jpg";
import client2 from "../../assets/client2.jpg";
import client3 from "../../assets/client3.jpg";
import client4 from "../../assets/client4.jpg";
import client5 from "../../assets/client5.jpg";
import client6 from "../../assets/client6.jpg";

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const sectionRef = useRef(null);
  const scrollTrackRef = useRef(null);
  const clientImages = [
    { id: 1, image: client1, name: "TechCorp" },
    { id: 2, image: client2, name: "InnovateCo" },
    { id: 3, image: client3, name: "GlobalBiz" },
    { id: 4, image: client4, name: "PrimeSolutions" },
    { id: 5, image: client5, name: "EliteGroup" },
    { id: 6, image: client6, name: "StartUpHub" },
    { id: 7, image: client1, name: "NextGen" },
    { id: 8, image: client2, name: "Visionary" },
  ];

  const duplicatedClients = [...clientImages, ...clientImages];

  useEffect(() => {
    const scrollTrack = scrollTrackRef.current;
    if (!scrollTrack) return;
    let animationId;
    const speed = 0.5;
    let scrollPosition = 0;
    const scroll = () => {
      scrollPosition += speed;
      if (scrollPosition >= scrollTrack.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollTrack.style.transform = `translateX(-${scrollPosition}px)`;
      animationId = requestAnimationFrame(scroll);
    };
    animationId = requestAnimationFrame(scroll);
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(scroll);
    };
    scrollTrack.addEventListener("mouseenter", handleMouseEnter);
    scrollTrack.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      cancelAnimationFrame(animationId);
      scrollTrack.removeEventListener("mouseenter", handleMouseEnter);
      scrollTrack.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  const testimonials = [
    {
      id: 1,
      text: "Ashish transformed our digital presence completely. Our website traffic increased by 300% and conversions went up by 150% in just 3 months!",
      name: "Sarah Johnson",
      role: "Marketing Director, TechStart Inc.",
      avatar: "👩‍💼",
    },
    {
      id: 2,
      text: "The social media strategy Ashish developed helped us grow our Instagram following from 2k to 50k in 6 months. The engagement rates are phenomenal!",
      name: "Michael Chen",
      role: "CEO, Innovate Labs",
      avatar: "👨‍💼",
    },
    {
      id: 3,
      text: "Working with Ashish was the best investment we made. Our ROI on digital ads improved by 400% and we're now dominating our market space.",
      name: "Emily Rodriguez",
      role: "Founder, Bloom & Grow",
      avatar: "👩‍🎨",
    },
    {
      id: 4,
      text: "Ashish's data-driven approach to SEO helped us rank #1 for all our target keywords. Our organic traffic has never been better!",
      name: "David Thompson",
      role: "Product Manager, NextGen Tech",
      avatar: "👨‍💻",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);
  return (
    <section className="testimonial-section-wrapper" ref={sectionRef}>
      <div className={`testimonial-section ${isVisible ? "visible" : ""}`}>
        <div className="testimonial-header">
          <h3 className="testimonial-title">Client Success Stories</h3>
          <div className="testimonial-indicators">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`indicator ${
                  currentTestimonial === index ? "active" : ""
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
        <div className="testimonial-carousel">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`testimonial-card ${
                currentTestimonial === index ? "active" : ""
              }`}
            >
              <div className="testimonial-content">
                <div className="quote-icon">"</div>
                <p className="testimonial-text">{testimonial.text}</p>

                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.avatar}</div>
                  <div className="author-info">
                    <div className="author-name">{testimonial.name}</div>
                    <div className="author-role">{testimonial.role}</div>
                  </div>
                </div>
              </div>
              <div className="testimonial-glow" />
            </div>
          ))}
        </div>
      </div>

      <div className="clients-section">
        <div className="clients-header">
          {/* <h4>Trusted by Industry Leaders</h4> */}
          <p>
            We've helped these amazing companies achieve their digital goals
          </p>
        </div>
        <div className="scrolling-container">
          <div className="scrolling-track" ref={scrollTrackRef}>
            {duplicatedClients.map((client, index) => (
              <div key={`${client.id}-${index}`} className="client-image-card">
                <div className="client-image-wrapper">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="client-image"
                  />
                  <div className="client-overlay">
                    <span className="client-name">{client.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="scrolling-gradient left-gradient cloudy"></div>
        <div className="scrolling-gradient right-gradient cloudy"></div>{" "}
      </div>
    </section>
  );
};

export default TestimonialsSection;

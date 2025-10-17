import React, { useState } from "react";
import "./footer.css";

// Import social icons (you'll need to add these to your assets)
// import instagram from "../../assets/instagram.png";
// import whatsapp from "../../assets/whatsapp.png";
// import email from "../../assets/email.png";
// import youtube from "../../assets/youtube.png";
// import linkedin from "../../assets/linkedin.png";
// import twitter from "../../assets/twitter.png";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
    alert("Thank you for your message! I'll get back to you soon.");
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Web Design & Development",
    "Digital Marketing",
    "Creative Solutions",
    "Marketing Strategy",
    "Brand Identity",
    "UI/UX Design"
  ];

  const socialLinks = [
    { 
      name: "Instagram", 
      icon: "📸", 
      href: "https://instagram.com/yourusername",
      color: "#E1306C"
    },
    { 
      name: "WhatsApp", 
      icon: "💬", 
      href: "https://wa.me/yournumber",
      color: "#25D366"
    },
    { 
      name: "Email", 
      icon: "📧", 
      href: "mailto:your@email.com",
      color: "#EA4335"
    },
    { 
      name: "YouTube", 
      icon: "🎥", 
      href: "https://youtube.com/yourchannel",
      color: "#FF0000"
    },
    { 
      name: "LinkedIn", 
      icon: "💼", 
      href: "https://linkedin.com/in/yourprofile",
      color: "#0077B5"
    },
    { 
      name: "Twitter", 
      icon: "🐦", 
      href: "https://twitter.com/yourusername",
      color: "#1DA1F2"
    }
  ];

  return (
    <footer className="footer-section">
      {/* Background Elements */}
      <div className="footer-bg-grid"></div>
      <div className="footer-glow"></div>
      
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-icon">AL</div>
              <span className="logo-text">Ashish Lohakare</span>
            </div>
            <p className="footer-description">
              Transforming ideas into exceptional digital experiences. 
              Let's build something amazing together.
            </p>
            <div className="footer-stats">
              <div className="footer-stat">
                <div className="stat-number">150+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="footer-stat">
                <div className="stat-number">5+</div>
                <div className="stat-label">Years</div>
              </div>
              <div className="footer-stat">
                <div className="stat-number">50+</div>
                <div className="stat-label">Clients</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links-list">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-services">
            <h3 className="footer-title">Services</h3>
            <ul className="footer-services-list">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="service-item">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Form */}
          <div className="footer-contact">
            <h3 className="footer-title">Get In Touch</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="3"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message
                <span className="btn-arrow">→</span>
              </button>
            </form>
          </div>
        </div>

        {/* Social Links & Contact Info */}
        <div className="footer-social-section">
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div className="contact-details">
                <span className="contact-label">Email</span>
                <a href="mailto:ashish@example.com" className="contact-value">
                  ashish@example.com
                </a>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <div className="contact-details">
                <span className="contact-label">Phone</span>
                <a href="tel:+1234567890" className="contact-value">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div className="contact-details">
                <span className="contact-label">Location</span>
                <span className="contact-value">Mumbai, India</span>
              </div>
            </div>
          </div>

          <div className="social-links-footer">
            <h4 className="social-title">Follow Me</h4>
            <div className="social-icons">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  style={{ '--social-color': social.color }}
                  aria-label={social.name}
                >
                  <span className="social-emoji">{social.icon}</span>
                  <div className="social-tooltip">{social.name}</div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              © {new Date().getFullYear()} Ashish Lohakare. All rights reserved.
            </div>
            <div className="footer-legal">
              <a href="#privacy" className="legal-link">Privacy Policy</a>
              <a href="#terms" className="legal-link">Terms of Service</a>
              <a href="#cookies" className="legal-link">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
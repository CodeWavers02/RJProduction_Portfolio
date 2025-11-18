import React, { useState } from "react";
import "./css/FAQ.css";

const FAQ = () => {
  const categories = ["Photography", "Graphic Design", "Websites & Application", "Social Media Marketing"];
  const [activeCategory, setActiveCategory] = useState("Photography");
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = {
    Photography: [
      {
        q: "What types of photography services do you offer?",
        a: "We offer brand shoots, product photography, portraits, and cinematic video shoots tailored for your needs.",
      },
      {
        q: "Do you provide on-location shoots?",
        a: "Yes, we can shoot at your desired location or suggest professional studio setups.",
      },
      {
        q: "Can I get edited versions of photos?",
        a: "Absolutely! All photos include basic color correction, with additional retouching available.",
      },
      {
        q: "How soon do I receive my photos?",
        a: "Typically within 5–7 business days after the shoot.",
      },
      {
        q: "Do you shoot short videos or reels?",
        a: "Yes, our team also specializes in creating high-quality short videos and reels for social media.",
      },
    ],
    "Graphic Design": [
      {
        q: "What type of designs do you create?",
        a: "We create logos, posters, brochures, and social media creatives.",
      },
      {
        q: "Can I request multiple design revisions?",
        a: "Yes, we offer up to 3 revisions to ensure your complete satisfaction.",
      },
      {
        q: "Do you provide the source files?",
        a: "Yes, upon final delivery, we provide editable files in formats like PSD, AI, or Figma.",
      },
      {
        q: "Can you match my brand’s color palette?",
        a: "Definitely! We’ll use your brand colors and typography to keep designs consistent.",
      },
      {
        q: "Do you design for both print and digital?",
        a: "Yes, our designs are optimized for both print and digital media.",
      },
    ],
    "Websites & Application": [
      {
        q: "Do you develop both websites and mobile apps?",
        a: "Yes, we build responsive websites and mobile apps for Android and iOS using modern frameworks.",
      },
      {
        q: "Which technologies do you use?",
        a: "We use React, Node.js, and MongoDB for web, and React Native or Flutter for mobile applications.",
      },
      {
        q: "Can you integrate payment gateways?",
        a: "Yes, we can integrate Razorpay, Stripe, or PayPal for secure payments.",
      },
      {
        q: "Do you provide hosting and maintenance?",
        a: "Yes, we offer deployment, hosting, and ongoing support plans.",
      },
      {
        q: "Will my site be SEO optimized?",
        a: "Yes, we ensure SEO-friendly structure and fast loading times.",
      },
    ],
    "Social Media Marketing": [
      {
        q: "What platforms do you manage?",
        a: "We manage Instagram, Facebook, YouTube, and LinkedIn for our clients.",
      },
      {
        q: "Do you create custom content?",
        a: "Yes, our team creates original content tailored to your brand and audience.",
      },
      {
        q: "How do you measure success?",
        a: "We track engagement, reach, and conversions through detailed analytics reports.",
      },
      {
        q: "Do you run paid ad campaigns?",
        a: "Yes, we manage Meta Ads, Google Ads, and influencer collaborations.",
      },
      {
        q: "Can you help with brand strategy?",
        a: "Absolutely. We help define your brand tone, voice, and visual identity.",
      },
    ],
  };

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">
        Frequently Asked <span className="text-gradient">Questions</span>
      </h2>

      {/* --- Category Tabs --- */}
      <div className="faq-categories">
        {categories.map((category) => (
          <button
            key={category}
            className={`faq-tab ${activeCategory === category ? "active" : ""}`}
            onClick={() => {
              setActiveCategory(category);
              setOpenIndex(null);
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* --- Questions List --- */}
      <div className="faq-list">
        {faqData[activeCategory].map((item, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-question"
              onClick={() => handleToggle(index)}
            >
              <span>{item.q}</span>
              <span className="arrow">{openIndex === index ? "−" : "+"}</span>
            </div>
            {openIndex === index && (
              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;

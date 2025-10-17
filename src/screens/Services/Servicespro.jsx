import React from "react";

// Example images (replace with your own)
import photographyImg from "../../assets/img1.jpeg";
import designImg from "../../assets/img3.jpeg";
import marketingImg from "../../assets/img4.jpeg";

export default function ServicesPro() {
  const services = [
    {
      title: "Photography",
      img: photographyImg,
      desc: "Capture stunning visuals with our professional photography services.",
    },
    {
      title: "Graphic Design",
      img: designImg,
      desc: "Creative and unique designs to make your brand stand out.",
    },
    {
      title: "Social Media Marketing",
      img: marketingImg,
      desc: "Boost your presence with our tailored social media strategies.",
    },
  ];

  return (
    <>
      <style>{`
        .servicespro-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
  padding: 50px 20px;
  color: #fff;
  min-height: 100vh;
  box-sizing: border-box;
  flex-wrap: wrap;
}


        .service-card {
  flex: 1;
  max-width: 300px;
  background: #111;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.1),
              0 0 30px rgba(255, 255, 255, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  text-align: center;
}


        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.2),
                      0 0 40px rgba(255, 255, 255, 0.1),
                      0 0 60px rgba(255, 0, 255, 0.2); /* subtle neon glow */
        }

        .service-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
}


        .service-card h2 {
          font-size: 1.5rem;
          margin: 15px 0 10px;
          color: #fff;
        }

        .service-card p {
          font-size: 1rem;
          padding: 0 15px 20px;
          color: #ccc;
          line-height: 1.4;
        }

        @media (max-width: 900px) {
          .servicespro-container {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>

      <section className="servicespro-container" style={{ background: 'black' }}>
  <div className="service-card">
    <img src="https://via.placeholder.com/300x180" />
    <h2>Test</h2>
    <p>Test description</p>
  </div>
  <div className="service-card">
    <img src="https://via.placeholder.com/300x180" />
    <h2>Test 2</h2>
    <p>Another description</p>
  </div>
</section>

    </>
  );
}

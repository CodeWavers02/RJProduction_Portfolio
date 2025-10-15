import React from "react";
import Main from "../components/Main";
import AboutMe from "../components/AboutMe";
import AllServices from "../components/AllServices";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
  return (
    <>
      <Main />
      <AboutMe />
      <div className="aura"></div>
      <div className="aura"></div>
      <div className="aura"></div>
      <div className="aura"></div>
      <AllServices />
      <WhyChooseUs />
      <div style={{ marginTop: "200px" }}>
        {/* Additional content if needed */}
      </div>
    </>
  );
};

export default Home;

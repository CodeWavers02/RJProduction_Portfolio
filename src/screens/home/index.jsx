import React from "react";
import Header from "../../global/Header";
import Main from "../../screens/components/main";
import AboutMe from "../components/AboutMe";
import AllServices from "../components/AllServices";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
  return (
    <>
      <Header />
      
      <Main />
      <AboutMe />
       <div className="aura"></div>
  <div className="aura"></div>
  <div className="aura"></div>
  <div className="aura"></div>
      <AllServices />
      <WhyChooseUs />
      <div style={{ marginTop: '200px' }}>
        {/* Additional content if needed */}
      </div>
    </>
  );
};

export default Home;
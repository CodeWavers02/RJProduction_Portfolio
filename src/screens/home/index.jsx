import React from "react";
import Main from "../components/main";
import AboutMe from "../components/AboutMe";
import AllServices from "../components/AllServices";
import WhyChooseUs from "../components/WhyChooseUs";
import Projects from "../components/Projects";
import Footer from "../../global/Footer";

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
      <Projects />
      <Footer />
    </>
  );
};

export default Home;

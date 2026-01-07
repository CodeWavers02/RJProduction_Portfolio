import React from "react";
import StarBackground from "./StarBackground";
import Main from "../components/main";
import Main2 from "../components/main2";
import AboutMe from "../components/AboutMe";
import AllServices from "../components/AllServices";
import WhyChooseUs from "../components/WhyChooseUs";
import Projects from "../components/Projects";
import Footer from "../../global/Footer";
import ProfileSection from "../components/ProfileSection";
import ServicesSection from "../components/ServicesSection";
import ExperienceSection from "../components/ExperienceSection";
import TestimonialsSection from "../components/TestimonialsSection";
import VideoSection from "../components/VideoSection";

const Home = () => {
  return (
    <>
      <style>{`
        /* FULL PAGE SNAP FOR OUTER SECTIONS */
        .content-wrapper {
          overflow-y: scroll;
          height: 100vh;
          scroll-snap-type: y mandatory;
        }

        /* SECTIONS THAT SHOULD SNAP */
        .snap-section {
          scroll-snap-align: start;
          height: 100vh;
        }
          .snap-section-end {
          scroll-snap-align: end;
          margin-top: 150px
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <StarBackground />

      <div className="content-wrapper">

        <section className="snap-section">
          <Main2 />
        </section>

        <section className="snap-section">
          <Main />
        </section>

        {/* ABOUT ME — SNAP COMPLETELY DISABLED */}
        <section className="snap-section">
          <ProfileSection />
        </section>

        <section className="snap-section">
          <ServicesSection />
        </section>

        <section className="snap-section">
          <ExperienceSection />
        </section>

        <section className="snap-section">
          <VideoSection />
        </section>

        <section className="snap-section">
          <TestimonialsSection />
        </section>

        <section className="snap-section">
          <AllServices />
        </section>
        {/* TestimonialsSection */}

        <section className="snap-section">
          <WhyChooseUs />
        </section>

        {/* <section className="snap-section">
          <Projects />
        </section> */}

        <section className="snap-section-end">
          <Footer />
        </section>

      </div>
    </>
  );
};

export default Home;

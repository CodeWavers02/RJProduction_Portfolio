import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./global/Header";
import Home from "./screens/home/index";
import MainServices from "./screens/Services/mainServices";
// import About from "./screens/About";
// import mainServices from "./screens/Services/mainServices";
// import Work from "./screens/Work";
// import Contact from "./screens/Contact";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/services" element={<MainServices />} />
        {/* <Route path="/work" element={<Work />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

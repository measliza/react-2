import React, { useEffect, useState } from "react";
// import AboutNavbar from "../Components/About/AboutNavbar";
import AboutHeader from "../Components/About/AboutHeader";
import AboutAbout from "../Components/About/AboutAbout";
import AboutFirmVisit from "../Components/About/AboutFirmVisit";
import AboutFeature from "../Components/About/AboutFeature";
import AboutFooter from "../Components/About/AboutFooter";
import AboutBack from "../Components/About/AboutBack";
import HomeNavbar from "../Components/Home/HomeNavbar";
import HomeCart from "../Components/Home/HomeCart";

const About = () => {
  const [showCart, setShowCart] = useState(false);
  return (
    <div>
      <HomeNavbar setShowCart={setShowCart} />
      {showCart && <HomeCart setShowCart={setShowCart} />}
      <AboutHeader />
      <AboutAbout />
      <AboutFirmVisit />
      <AboutFeature />
      <AboutFooter />
      <AboutBack />
    </div>
  );
};

export default About;

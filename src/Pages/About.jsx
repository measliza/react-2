import React from "react";
import AboutNavbar from "../Components/About/AboutNavbar";
import AboutHeader from "../Components/About/AboutHeader";
import AboutAbout from "../Components/About/AboutAbout";
import AboutFirmVisit from "../Components/About/AboutFirmVisit";
import AboutFeature from "../Components/About/AboutFeature";
import AboutFooter from "../Components/About/AboutFooter";
import AboutBack from "../Components/About/AboutBack";
import HomeNavbar from "../Components/Home/HomeNavbar";

const About = () => {
  return (
    <div>
      <HomeNavbar />
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

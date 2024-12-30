import React from "react";
import HomeSpinner from "../Components/Home/HomeSpinner";
import HomeNavbar from "../Components/Home/HomeNavbar";
import HomeCarousal from "../Components/Home/HomeCarousal";
import HomeAbout from "../Components/Home/HomeAbout";
import HomeFeature from "../Components/Home/HomeFeature";
import HomeProduct from "../Components/Home/HomeProduct";
import HomeFirm from "../Components/Home/HomeFirm";
import HomeTestimonial from "../Components/Home/HomeTestimonial";
import HomeBlog from "../Components/Home/HomeBlog";
import HomeBack from "../Components/Home/HomeBack";
import HomeFooter from "../Components/Home/HomeFooter";

const Home = () => {
  return (
    <div>
      {/* <HomeSpinner /> */}
      <HomeNavbar />
      <HomeCarousal />
      <HomeAbout />
      <HomeFeature />
      <HomeProduct />
      <HomeFirm />
      <HomeTestimonial />
      <HomeBlog />
      <HomeBack />
      <HomeFooter />
    </div>
  );
};

export default Home;

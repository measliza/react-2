import React from "react";
import HomeNavbar from "../Components/Home/HomeNavbar";
import TestimonialHeader from "../Components/Testimonial/TestimonialHeader";
import TestimonialTestimonial from "../Components/Testimonial/TestimonialTestimonial";
import TestimFooter from "../Components/Testimonial/TestimonialFooter";
import TestimBack from "../Components/Testimonial/TestimonialBack";

const Testim = () => {
  return (
    <div>
      <HomeNavbar />
      <TestimonialHeader />
      <TestimonialTestimonial />
      <TestimFooter />
      <TestimBack />
    </div>
  );
};

export default Testim;

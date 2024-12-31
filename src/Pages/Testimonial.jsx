import React, { useEffect, useState } from "react";
import HomeNavbar from "../Components/Home/HomeNavbar";
import TestimonialHeader from "../Components/Testimonial/TestimonialHeader";
import TestimonialTestimonial from "../Components/Testimonial/TestimonialTestimonial";
import TestimFooter from "../Components/Testimonial/TestimonialFooter";
import TestimBack from "../Components/Testimonial/TestimonialBack";
import HomeCart from "../Components/Home/HomeCart";

const Testim = () => {
  const [showCart, setShowCart] = useState(false);
  return (
    <div>
      <HomeNavbar setShowCart={setShowCart} />
      {showCart && <HomeCart setShowCart={setShowCart} />}
      <TestimonialHeader />
      <TestimonialTestimonial />
      <TestimFooter />
      <TestimBack />
    </div>
  );
};

export default Testim;

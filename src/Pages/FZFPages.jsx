import React, { useEffect, useState } from "react";
// import FZFNavbar from "../Components/FZFPages/FZFNavbar";
import FZFHeader from "../Components/FZFPages/FZFHeader";
import FZFStart from "../Components/FZFPages/FZFStart";
import FZFFooter from "../Components/FZFPages/FZFFooter";
import FZFBack from "../Components/FZFPages/FZFBack";
import HomeNavbar from "../Components/Product/HomeNavbar";
import HomeCart from "../Components/Home/HomeCart";

const FZFPages = () => {
  const [showCart, setShowCart] = useState(false);
  return (
    <div>
      {/* <FZFNavbar /> */}
      <HomeNavbar setShowCart={setShowCart} />
      {showCart && <HomeCart setShowCart={setShowCart} />}
      <FZFHeader />
      <FZFStart />
      <FZFFooter />
      <FZFBack />
    </div>
  );
};

export default FZFPages;

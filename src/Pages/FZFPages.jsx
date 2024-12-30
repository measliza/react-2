import React from "react";
import FZFNavbar from "../Components/FZFPages/FZFNavbar";
import FZFHeader from "../Components/FZFPages/FZFHeader";
import FZFStart from "../Components/FZFPages/FZFStart";
import FZFFooter from "../Components/FZFPages/FZFFooter";
import FZFBack from "../Components/FZFPages/FZFBack";

const FZFPages = () => {
  return (
    <div>
      <FZFNavbar />
      <FZFHeader />
      <FZFStart />
      <FZFFooter />
      <FZFBack />
    </div>
  );
};

export default FZFPages;

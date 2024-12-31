import React, { useEffect, useState } from "react";
import HomeNavbar from "../Components/Home/HomeNavbar";
import FeatureHeader from "../Components/Feature/FeatureHeader";
import FeatureFeature from "../Components/Feature/FeatureFeature";
import FeatureFooter from "../Components/Feature/FeatureFooter";
import FeatureBack from "../Components/Feature/FeatureBack";
import HomeCart from "../Components/Home/HomeCart";
const Feature = () => {
  const [showCart, setShowCart] = useState(false);
  return (
    <div>
      <HomeNavbar setShowCart={setShowCart} />
      {showCart && <HomeCart setShowCart={setShowCart} />}
      <FeatureHeader />
      <FeatureFeature />
      <FeatureFooter />
      <FeatureBack />
    </div>
  );
};

export default Feature;

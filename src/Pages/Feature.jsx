import React from "react";
import HomeNavbar from "../Components/Home/HomeNavbar";
import FeatureHeader from "../Components/Feature/FeatureHeader";
import FeatureFeature from "../Components/Feature/FeatureFeature";
import FeatureFooter from "../Components/Feature/FeatureFooter";
import FeatureBack from "../Components/Feature/FeatureBack";

const Feature = () => {
  return (
    <div>
      <HomeNavbar />
      <FeatureHeader />
      <FeatureFeature />
      <FeatureFooter />
      <FeatureBack />
    </div>
  );
};

export default Feature;

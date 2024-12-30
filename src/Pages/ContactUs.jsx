import React from "react";
import ContactNavbar from "../Components/ContactUs/ContactNavbar";
import ContactPageHeader from "../Components/ContactUs/ContactPageHeader";
import ContactContact from "../Components/ContactUs/ContactContact";
import ContactFooter from "../Components/ContactUs/ContactFooter";
import ContactMap from "../Components/ContactUs/ContactMap";
import ContactBack from "../Components/ContactUs/ContactBack";
import HomeNavbar from "../Components/Home/HomeNavbar";

const ContactUs = () => {
  return (
    <div>
      <HomeNavbar />
      <ContactPageHeader />
      <ContactContact />
      <ContactMap />
      <ContactFooter />
      <ContactBack />
    </div>
  );
};

export default ContactUs;

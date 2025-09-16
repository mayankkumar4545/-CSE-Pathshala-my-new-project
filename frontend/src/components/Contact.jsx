import React from "react";
import "./Contact.css";
import SupportSection from "./conatcts/SupportSection";
import ContactFormSection from "./conatcts/ContactFormSection";
import LocationMap from "./conatcts/LocationMap";

const Contact = () => {
  return (
    // We use a React Fragment <>...</> instead of a single wrapper div
    <>
      <SupportSection />
      <ContactFormSection />
      <LocationMap />
    </>
  );
};

export default Contact;

import React from "react";
import "./LocationMap.css";

const LocationMap = () => {
  return (
    <section className="location-map-section">
      <div className="container">
        <div className="map-container">
          <iframe
            // --- THIS IS THE CORRECTED URL ---
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.031252037147!2d77.33214537512803!3d28.5688373757017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce43453372b7b%3A0x45313a216486a5f!2sJal%20Vayu%20Vihar%2C%20Sector%2025%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1726495345123!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="CSE Pathshala Location on Google Maps"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;

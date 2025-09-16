import React from "react";
import "./SupportSection.css"; // Dedicated CSS for this component

const SupportSection = () => {
  return (
    <section className="support-section">
      <div className="container">
        {/* Header */}
        <div className="support-header text-center">
          <h1>Contact us</h1>
          <p>We'd love to talk about how we can help you.</p>
        </div>

        {/* Feature Cards */}
        <div className="row justify-content-center">
          {/* Card 1: 24/7 Assistance */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="support-card">
              <div className="support-icon-wrapper">
                {/* Changed to a question mark icon as per image */}
                <i className="bi bi-question-circle"></i>
              </div>
              <h3>24/7 Assistance</h3>
              <p>Our team of expert HRs is always at your back and call.</p>
            </div>
          </div>

          {/* Card 2: Thorough Consultation */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="support-card">
              <div className="support-icon-wrapper">
                {/* Changed to a chat bubble icon as per image */}
                <i className="bi bi-chat-dots"></i>
              </div>
              <h3>Thorough Consultation</h3>
              <p>Get thoroughly informed before making your decision.</p>
            </div>
          </div>

          {/* Card 3: Resolve Queries */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="support-card">
              <div className="support-icon-wrapper">
                {/* Changed to an arrow right icon as per image */}
                <i className="bi bi-arrow-right"></i>
              </div>
              <h3>Resolve Queries</h3>
              <p>
                Our team of HRs ensures that you get answers to all your
                questions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;

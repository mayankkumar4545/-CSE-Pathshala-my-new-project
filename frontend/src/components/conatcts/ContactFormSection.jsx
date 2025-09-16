import React from "react";
import "./ContactFormSection.css"; // Dedicated CSS for this component

const ContactFormSection = () => {
  return (
    <section className="contact-form-section">
      <div className="container">
        {/* Main Header */}
        <div className="contact-form-header text-center">
          <h1>Get in touch</h1>
          <p>We'd love to talk about how we can help you.</p>
        </div>

        {/* Two-Column Content */}
        <div className="row justify-content-center">
          {/* Left Column: Address and Contact Details */}
          <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
            <div className="office-details-card">
              <h4>Head Office</h4>
              <p>
                Office no. 810 & 811, 8th Floor, Corporate Park,
                <br />
                Sanjay Palace, Civil Lines,
                <br />
                Agra, Uttar Pradesh 282002
              </p>
            </div>
            <div className="office-details-card mt-4">
              <h4>Contact Details</h4>
              <p>
                (Mon - Sat, 10:00 AM - 06:00PM)
                <br />
                <a href="mailto:contact@jobaaj.com">contact@jobaaj.com</a>
              </p>
            </div>
          </div>

          {/* Right Column: General Inquiries Form */}
          <div className="col-lg-7 col-md-6">
            <div className="inquiry-form-card">
              <h4>General inquiries</h4>
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="fullName">Full Name *</label>
                      <input type="text" id="fullName" placeholder="Name" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="emailAddress">Email *</label>
                      <input
                        type="email"
                        id="emailAddress"
                        placeholder="email@site.com"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone Number *</label>
                  <input type="tel" id="phoneNumber" placeholder="9876543201" />
                </div>

                <div className="form-group radio-group">
                  <label>What are you looking for</label>
                  <div className="radio-options">
                    <label className="radio-label">
                      <input type="radio" name="queryType" value="job" /> Job
                    </label>
                    <label className="radio-label">
                      <input type="radio" name="queryType" value="learnings" />{" "}
                      Learnings
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="queryType"
                        value="recuriterServices"
                      />{" "}
                      Recuriter Services
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="yourQuery">Enter your Query</label>
                  <textarea
                    id="yourQuery"
                    rows="4"
                    placeholder="Enter your Query"
                  ></textarea>
                </div>

                <button type="submit" className="send-inquiry-btn">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;

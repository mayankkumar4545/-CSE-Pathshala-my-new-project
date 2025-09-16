import React from "react";
import { Link } from "react-router-dom";
import AnimatedStatCard from "./AnimatedStatCard";
import "./Hero.css";
import heroMainImage from "/assets/hero-banner.jpeg";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-decorative-top"></div>
      <div className="container">
        <div className="row align-items-center hero-main-content">
          {/* Left Column: Text Content */}
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="hero-main-title">
              Welcome to{" "}
              <span className="hero-title-gradient">CSE Pathshala</span>
            </h1>
            <p className="hero-description">
              Your path to mastering Computer Science starts right here, right
              now. Dive deep into the world of tech, logic, and innovation as we
              unlock the future of technology through fun, immersive, and
              hands-on learning. With CSE Pathshala, you're not just learning —
              you're leveling up!
            </p>
            <Link to="/courses" className="hero-cta-button">
              Explore Courses
            </Link>
          </div>

          {/* Right Column: Image */}
          <div className="col-lg-6 d-none d-lg-block">
            <div className="hero-image-wrapper">
              <img
                src={heroMainImage}
                alt="Student learning on a laptop"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stat Cards Section */}
      <div className="container hero-stats-container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <AnimatedStatCard
              endValue={300}
              label="Interactive Modules"
              suffix="+"
              icon={<i className="bi bi-book"></i>}
            />
          </div>
          <div className="col-lg-4 col-md-6">
            <AnimatedStatCard
              endValue={12}
              label="Years of Expertise"
              suffix="+"
              icon={<i className="bi bi-star"></i>}
            />
          </div>
          <div className="col-lg-4 col-md-6">
            <AnimatedStatCard
              endValue={25}
              label="Trusted Educators"
              suffix="+"
              icon={<i className="bi bi-mortarboard"></i>}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

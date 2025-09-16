import React from "react";
import Hero from "./Hero";
import WhyChoose from "./WhyChoose";
import Features from "./Features";
import Specialty from "./Specialty";
import PopularCourses from "./PopularCourses";
import Testimonials from "./Testimonials";
import Blogs from "./Blogs";
// AnimatedStatCard is no longer needed here
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <Hero /> {/* This now includes the stat cards */}
      <WhyChoose />
      <Features />
      <Specialty />
      <PopularCourses />
      <Testimonials />
      <Blogs />
    </>
  );
};

export default HomePage;

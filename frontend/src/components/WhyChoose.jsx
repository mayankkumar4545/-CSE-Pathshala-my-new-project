import React from "react";
import { useInView } from "react-intersection-observer";
import "./WhyChoose.css";
import chooseUsImage from "/assets/why-choose.jpeg";

const WhyChoose = () => {
  // This hook now triggers the animation every time
  const { ref, inView } = useInView({
    triggerOnce: false, // This ensures the animation repeats on every scroll
    threshold: 0.2,
  });

  return (
    <section className="why-choose-section" ref={ref}>
      <div className="container">
        {/* Header */}
        <div
          className={`section-title-container ${
            inView ? "animate-fade-in-up" : ""
          }`}
        >
          <h2 className="section-title">
            Why Choose{" "}
            <span className="why-choose-gradient">CSE PATHSHALA?</span>
          </h2>
        </div>

        {/* Content Row */}
        <div className="row align-items-center">
          {/* Left Column: Animated Image */}
          <div className="col-lg-6">
            <div
              className={`choose-us-image-wrapper ${
                inView ? "animate-slide-in-left" : ""
              }`}
            >
              <img
                src={chooseUsImage}
                alt="Students collaborating on a project"
                className="img-fluid choose-us-image"
              />
              <div className="sparkle"></div>
            </div>
          </div>

          {/* Right Column: Animated Text */}
          <div className="col-lg-6">
            <div
              className={`choose-us-text-wrapper ${
                inView ? "animate-slide-in-right" : ""
              }`}
            >
              <p className="why-choose-description">
                CSE Pathshala is not just a learning platform – it's your
                ultimate tech career launchpad. Whether you're a beginner eager
                to learn the basics of coding, preparing for competitive exams,
                or diving into advanced topics like Data Structures and
                Algorithms, Artificial Intelligence, or Web Development, we have
                something for everyone. Our curated content is designed to be
                student-friendly and easy to follow at every level.
              </p>
              <p className="why-choose-description">
                At CSE Pathshala, you're not judged by marks but by what you
                create. With real-world projects, personal doubt-solving
                sessions, dedicated doubt classes, reverse assessments, and
                guidance from expert mentors, we focus not just on learning but
                on real progress.
              </p>
              <p className="why-choose-description">
                Be part of a community where you grow, code, and build a legacy
                as a future technology leader. Choose CSE Pathshala – because
                your success in tech begins here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;

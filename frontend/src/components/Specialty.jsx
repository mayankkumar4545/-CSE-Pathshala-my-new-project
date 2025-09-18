import React from "react";
import "./Specialty.css";

const specialtyData = [
  {
    icon: "bi bi-people-fill",
    title: "Best Tutors",
    text: "The best tutors aren’t just brainy — they get you. They know how to turn tricky topics into simple ideas, tough days into breakthroughs, and doubts into confidence.",
    color: "yellow",
  },
  {
    icon: "bi bi-mortarboard-fill",
    title: "Best Curriculum",
    text: "A killer curriculum isn’t just about books — it’s a blend of brains, balance, and bold ideas. Ours is designed to be rock-solid yet flexible, giving you the core skills you need.",
    color: "pink",
  },
  {
    icon: "bi bi-patch-check-fill",
    title: "Certificate",
    text: `More than just paper — it's proof you’ve got the skills to think big, break barriers, and build bold solutions. It’s a badge that says, "I’m ready to innovate and lead."`,
    color: "green",
  },
  {
    icon: "bi bi-lightbulb-fill",
    title: "Creative Thinking",
    text: "It’s not just about thinking outside the box — it’s about realizing there is no box. Creative thinking fuels innovation, unlocks bold ideas, and turns challenges into opportunities.",
    color: "blue",
  },
];

const Card = ({ item }) => {
  return (
    // Animation classes and inline styles removed
    <div className="col-lg-3 col-md-6 specialty-card-wrapper">
      <div className={`specialty-card card-bg-${item.color}`}>
        <div className={`specialty-icon-circle`}>
          <i className={`${item.icon} icon-color-${item.color}`}></i>
        </div>
        <h3 className="specialty-card-title">{item.title}</h3>
        <p className="specialty-card-text">{item.text}</p>
      </div>
    </div>
  );
};

const Specialty = () => {
  // useInView hook removed
  return (
    // ref removed from section
    <section className="specialty-section">
      <div className="container">
        {/* Animation class removed */}
        <div className="specialty-title-container">
          <h4 className="specialty-subtitle">Not Your Regular Classroom</h4>
          <h2 className="specialty-title">
            Why We’re Not Just Another Tech Stop?
          </h2>
        </div>
        <div className="row">
          {specialtyData.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialty;

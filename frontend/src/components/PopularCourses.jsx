import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";
import "./PopularCourses.css";

const coursesData = [
  // Data remains the same
  {
    image: "/assets/image.png",
    title: "Yoga",
    students: "1,612",
    reviews: "8,000",
    hours: "232.00",
  },
  {
    image: "/assets/image.png",
    title: "Yoga",
    students: "1,000",
    reviews: "76,000",
    hours: "3,200",
  },
  {
    image: "/assets/image.png",
    title: "Yoga",
    students: "1,000",
    reviews: "76,000",
    hours: "3,200",
  },
  {
    image: "/assets/image.png",
    title: "Yoga",
    students: "1,000",
    reviews: "76,000",
    hours: "3,200",
  },
  {
    image: "/assets/image.png",
    title: "Yoga",
    students: "1,000",
    reviews: "76,000",
    hours: "3,200",
  },
];

// Card component with MOUSE TRACKING re-added
const AnimatedCourseCard = ({ course, index }) => {
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Pass the mouse coordinates to CSS variables
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={inViewRef}
      className={`col-lg-4 col-md-6 mb-4 course-card-wrapper ${
        inView ? "animate-slide-up" : ""
      }`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div
        className="popular-course-card"
        ref={cardRef}
        onMouseMove={handleMouseMove}
      >
        <img
          src={course.image}
          alt={course.title}
          className="popular-course-image"
        />
        <div className="popular-course-body">
          <h5 className="popular-course-title">{course.title}</h5>
          <div className="popular-course-stats">
            <span>
              <i className="bi bi-people-fill"></i> {course.students} Students
            </span>
            <span>
              <i className="bi bi-star-fill"></i> {course.reviews} Reviews
            </span>
            <span>
              <i className="bi bi-clock-fill"></i> {course.hours} Hours
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main component (no changes here)
const PopularCourses = () => {
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="popular-courses-section">
      <div className="container">
        <div
          ref={headerRef}
          className={`popular-courses-header-container ${
            headerInView ? "animate-slide-up" : ""
          }`}
        >
          <div className="popular-courses-subtitle">Popular Course</div>
          <h2 className="popular-courses-main-title">
            Most Popular Course On Our Website
          </h2>
        </div>
        <hr
          className={`popular-header-divider ${
            headerInView ? "animate-slide-up" : ""
          }`}
          style={{ animationDelay: "0.1s" }}
        />
        <div className="row">
          {coursesData.map((course, index) => (
            <AnimatedCourseCard key={index} course={course} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;

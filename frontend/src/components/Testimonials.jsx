import React, { useRef } from "react"; // 1. Add useRef to the import
import { useInView } from "react-intersection-observer";
import "./Testimonials.css";

const testimonialsData = [
  // Data remains the same...
  {
    avatar: "https://placehold.co/100x100/EFEFEF/333?text=AS",
    name: "Ankit Sharma",
    role: "B.Tech CSE 3rd year",
    text: "I have joined CSE Pathshala to develop my Data Structures and Algorithms and it was the correct choice of my academic life. The explanations are as crystal-clear as one can ever get, and the mentors are genuinely concerned with the way you progress.",
  },
  {
    avatar: "https://placehold.co/100x100/EFEFEF/333?text=MA",
    name: "Mehak Arora",
    role: "2nd Year Student, Tier-3 College",
    text: "When I came to a less-known college, I always felt a step backward. CSE Pathshala had altered the situation. Live sessions, weekly challenges and one-on-one mentor support made me have the confidence to take part in national level hackathons.",
  },
  {
    avatar: "https://placehold.co/100x100/EFEFEF/333?text=RP",
    name: "Raj Patel",
    role: "Aspiring Full Stack Developer",
    text: "I did not have any background when I joined their Full Stack Web Development course. Now I have full-fledged projects, my own site deployed, and I am even engaged in freelancing. The practical action and real-world orientation made all the difference.",
  },
  {
    avatar: "https://placehold.co/100x100/EFEFEF/333?text=SN",
    name: "Shruti Nair",
    role: "GATE CS Aspirant",
    text: "I felt very daunting preparing to take GATE until I discovered CSE Pathshala. They have gold courses on GATE. The simulated tests, small theory notes and clarification of doubts are incomparable. I could never imagine online prep could be so productive!",
  },
];

const AnimatedCard = ({ testimonial, index }) => {
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // This line was causing the error because useRef was not imported
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const direction =
    index % 2 === 0 ? "animate-slide-left" : "animate-slide-right";

  return (
    <div
      ref={inViewRef}
      className={`col-lg-6 mb-4 testimonial-card-wrapper ${
        inView ? direction : ""
      }`}
    >
      <div
        className="testimonial-card"
        ref={cardRef}
        onMouseMove={handleMouseMove}
      >
        <p className="testimonial-text">"{testimonial.text}"</p>
        <div className="testimonial-author-info">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="testimonial-avatar"
          />
          <div className="author-details">
            <h5 className="author-name">{testimonial.name}</h5>
            <p className="author-role">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="testimonials-section">
      <div className="container">
        <div
          ref={headerRef}
          className={`testimonials-header-block text-center ${
            headerInView ? "animate-slide-up" : ""
          }`}
        >
          <h2 className="testimonials-title">
            Real <span className="highlight-text">Stories,</span> Real
            <span className="highlight-text"> Growth</span>
          </h2>
          <p className="testimonials-subtitle">
            See how our students have transformed their careers with our
            programs.
          </p>
        </div>
        <div className="row">
          {testimonialsData.map((testimonial, index) => (
            <AnimatedCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

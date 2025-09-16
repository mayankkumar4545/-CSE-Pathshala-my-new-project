import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";
import "./AnimatedStatCard.css";

const AnimatedStatCard = ({
  endValue,
  label,
  duration = 2000,
  suffix = "",
  icon,
}) => {
  const [inView, setInView] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setInView(entries[0].isIntersecting);
      },
      { threshold: 0.5 }
    );

    const currentRef = cardRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const { number } = useSpring({
    from: { number: 0 },
    to: { number: inView ? endValue : 0 },
    delay: inView ? 200 : 0,
    config: { duration: inView ? duration : 0 },
  });

  return (
    <div className="animated-stat-card-container" ref={cardRef}>
      <div className="animated-stat-card">
        {icon && <div className="stat-icon-display">{icon}</div>}
        <div className="stat-text-content">
          <h3 className="stat-number">
            <animated.span>
              {number.to((val) => Math.floor(val) + suffix)}
            </animated.span>
          </h3>
          <p className="stat-label">{label}</p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedStatCard;

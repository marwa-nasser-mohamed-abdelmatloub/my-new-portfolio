import React, { useState, useEffect } from "react";
import "./Home.css";
import profileImg from "../assets/images/my-photo.jpg";
import { FaChevronDown } from "react-icons/fa";

const TypingText = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [index, text, speed]);

  return (
    <span>
      {displayedText}
      {index < text.length && <span className="cursor">|</span>}
    </span>
  );
};

const Home = () => {
  
  const scrollToNext = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="home" id="home">
      <div className="home-container">
        <div className="home-3d">
          <div className="home-3d-placeholder">
            <div className="floating-orb orb-1"></div>
            <div className="floating-orb orb-2"></div>
            <div className="floating-orb orb-3"></div>
            <div className="cube-wrapper">
              <div className="cube"></div>
            </div>
          </div>
        </div>

        <div className="home-content">
          <div className="home-greeting fade-in-delay-1">
            <span className="wave">👋</span>
            <p>Welcome to my portfolio</p>
          </div>

          <h1 className="home-title fade-in-delay-2">
            <TypingText text="I'm Marwa Nasser" speed={50} />
          </h1>

          <div className="home-image fade-in-delay-2">
            <img src={profileImg} alt="Marwa Nasser" />
          </div>

          <p className="home-subtitle fade-in-delay-3">
            Full Stack Developer crafting beautiful, interactive web experiences
            with modern technologies
          </p>

          <div className="home-cta fade-in-delay-4">
            <button
              className="btn btn-primary"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore My Work
            </button>

            <button
              className="btn btn-secondary"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get in Touch
            </button>
          </div>

          <div className="home-scroll fade-in-delay-5">
            <p>Scroll to explore</p>
            <div className="scroll-icon" onClick={scrollToNext}>
              <FaChevronDown />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

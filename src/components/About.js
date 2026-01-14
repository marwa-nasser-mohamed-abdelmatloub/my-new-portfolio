import React from "react";
import "./About.css";

const About = () => {
  const stats = [
    { number: "12+", label: "Projects Completed" },
    { number: "6+", label: "Months Experience" },
    { number: "∞", label: "Learning Passion" },
    { number: "100%", label: "Dedication" },
  ];

  const aboutCards = [
    {
      icon: "🎓",
      title: "Education",
      description: (
        <>
          <p>
            <strong>Bachelor of Arts, Islamic Archaeology</strong>
            <br /> Minya University, Grade: Good
          </p>
          <p>
            <strong>ITI Open Source Track</strong> <br /> Minya Branch
            Professional Training Program
          </p>
        </>
      ),
    },
    {
      icon: "💼",
      title: "Experience",
      description:
        "+6 months as Freelance Full Stack Developer building fitness platforms, an online Quran learning academy, and a gaming website.",
    },
    {
      icon: "🛠️",
      title: "Technical Skills",
      description:
        "Expert in React, Angular, Vue.js, Node.js, Laravel, Django. Proficient in database design, RESTful APIs, and cloud deployment.",
    },
    {
      icon: "🎯",
      title: "Approach",
      description:
        "Self-motivated and adaptable. I focus on creating user-friendly applications with clean, efficient code and strong desire to continuously learn.",
    },
  ];

  return (
    <section className="about" id="about">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>

<div className="about-grid">
  {aboutCards.map((card, idx) => (
    <div
      key={idx}
      className={`about-card glass fade-in`}
      style={{ "--delay": idx * 0.1 + "s" }}
    >
      <div className="card-icon">{card.icon}</div>
      <h3>{card.title}</h3>
      <div>{card.description}</div> 
    </div>
  ))}
</div>

        <div className="about-stats">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="stat-item"
              style={{ "--delay": idx * 0.1 + "s" }}
            >
              <h3 className="gradient-text">{stat.number}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="about-description">
          <p>
            I'm Marwa Nasser Mohamed Adeklmatloub, a self-motivated Full Stack Developer with
            6+ months of freelance experience building dynamic web applications.
            Currently undergoing intensive training at ITI's Open Source Track to
            enhance my skills in modern development practices.
          </p>
          <p>
            My expertise spans across frontend frameworks (React, Angular, Vue.js,
            Next.js) and backend technologies (Node.js, Express, Laravel, Django,
            Python). I'm passionate about creating beautiful, user-friendly web
            experiences while maintaining clean, efficient code. Known for
            adaptability and a strong desire to learn and grow within development
            teams.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

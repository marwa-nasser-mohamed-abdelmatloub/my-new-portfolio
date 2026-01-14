import React from "react";
import "./Experience.css";

const Experience = () => {
  const experiences = [
    {
      role: "Freelance Full Stack Developer",
      company: "Freelance Projects",
      duration: "2025",
      description:
        "Worked on multiple freelance projects for international and local clients, delivering full-stack, frontend, and backend solutions.",
      achievements: [
        "Tornado Movement App (UAE Client) – Laravel, MySQL, Reverb, Stripe, VPS: Developed multi-role fitness platform with real-time functionality, dual Stripe subscription models, and AI-based training assistance features.",
        "Reporting App (German Client) – Angular & Spring Boot: Built reporting system and implemented Angular front-end within Java Spring project.",
        "Sohof Academy – Django & React: Built full-stack e-learning platform with authentication and course management.",
        "KingLikeLuxury – Laravel & Vue.js: Enhanced backend and frontend, integrated PayPal payments.",
        "SmurfBoost – Django & React: Developed gaming platform with backend logic and dynamic UI.",
        "Mojamaak – Vue.js: Created admin dashboard with responsive Vue.js components.",
      ],
    },
  ];

  return (
    <section className="experience" id="experience">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">My professional journey</p>
        </div>

        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="timeline-item"
              style={{ "--delay": idx * 0.2 + "s" }}
            >
              <div className="timeline-dot">
                <div className="timeline-dot-inner"></div>
              </div>

              <div className="timeline-content glass">
                <div className="timeline-header">
                  <h3 className="role">{exp.role}</h3>
                  <span className="duration">{exp.duration}</span>
                </div>

                <p className="company">{exp.company}</p>
                <p className="description">{exp.description}</p>

                <div className="achievements">
                  <h4>Key Projects</h4>
                  <ul>
                    {exp.achievements.map((achievement, aIdx) => (
                      <li key={aIdx}>
                        <span className="achievement-dot"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="experience-cta">
          <p>Want to learn more about my experience?</p>
          <a href="#contact" className="btn btn-primary">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;

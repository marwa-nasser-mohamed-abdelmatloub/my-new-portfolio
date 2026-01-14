import React from "react";
import "./Skills.css";

const Skills = () => {
  const skillsData = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 85 },
        { name: "Angular", level: 85 },
        { name: "Vue.js", level: 83 },
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 80 },
        { name: "TypeScript", level: 75 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "Laravel", level: 90 },
        { name: "Django", level: 82 },
        { name: "Python", level: 80 },
        { name: "RESTful APIs", level: 90 },
      ],
    },
    {
      category: "Databases",
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "SQL", level: 83 },
        { name: "MySQL", level: 90 },
        { name: "PostgreSQL", level: 80 },
        { name: "Firebase", level: 70 },
      ],
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git/GitHub", level: 95 },
        { name: "Bootstrap", level: 92 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Responsive Design", level: 95 },
        { name: "Problem Solving", level: 95 },
      ],
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">Technologies I work with</p>
        </div>

        <div className="skills-grid">
          {skillsData.map((category, idx) => (
            <div
              key={idx}
              className="skills-category"
              style={{ "--delay": idx * 0.1 + "s" }}
            >
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{
                          width: `${skill.level}%`,
                          "--delay": skillIdx * 0.1 + "s",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-additional glass">
          <h3
            className="gradient-text additional-title"
            style={{ marginBottom: "1rem" }}
          >
            Additional Expertise
          </h3>
          
          <div className="skills-tags">
            {[
              "Web Design",
              "UX/UI",
              "Responsive Design",
              "Performance Optimization",
              "A11y",
              "Testing",
              "CI/CD",
              "Agile Methodology",
            ].map((tag, idx) => (
              <span
                key={idx}
                className="skill-tag"
                style={{ "--delay": idx * 0.05 + "s" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

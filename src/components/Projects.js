import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

const projectsData = [
  {
    id: 1,
    title: "Tornado Movement App (UAE Client)",
    category: "Full Stack",
    description:
      "Developed a multi-role fitness platform (Trainee, Coach, Admin) with full real-time functionality using Laravel Reverb. Implemented dual Stripe subscription models, and deployed the system on a VPS. Also contributed to AI-based training assistance features.",
    image: "🏋️‍♂️",
    imageProject: "/images/tornado-movement.png",
    tags: ["Laravel", "MySQL", "Reverb", "Stripe", "VPS"],
    github: "",
    live: "",
  },
  {
    id: 2,
    title: "Sohof Academy",
    category: "Full Stack",
    description:
      "Built full-stack platform with authentication and course management.",
    image: "🎓",
    imageProject: "/images/sohof-academy.png",
    tags: ["Django", "React"],
    github: "",
    live: "https://sohof.netlify.app/",
  },
  {
    id: 3,
    title: "SmurfBoost",
    category: "Full Stack",
    description: "Developed gaming platform with backend logic and dynamic UI.",
    image: "🎮",
    imageProject: "/images/smurfboost.png",
    tags: ["Django", "React"],
    github: "",
    live: "",
  },
  {
    id: 4,
    title: "Mojamaak",
    category: "Frontend",
    description: "Created admin dashboard with responsive Vue.js components.",
    image: "🖥️",
    imageProject: "/images/mojamaak.png",
    tags: ["Vue.js"],
    github: "",
    live: "",
  },

  {
    id: 5,
    title: "E-Commerce Website",
    category: "Full Stack",
    description:
      "Team-built full-stack e-commerce platform with payments and time tracking.",
    image: "🛍️",
    imageProject: "/images/e-commerce-project.png",
    tags: ["TypeScript", "Bootstrap", "Angular", "Node.js", "Express.js"],
    github:
      "https://github.com/marwa-nasser-mohamed-abdelmatloub/E_Commerce_Project.git",
    live: "",
  },
  {
    id: 6,
    title: "E-Learning Website",
    category: "Full Stack",
    description:
      "Team-built full-stack e-learning platform with payments and time tracking.",
    image: "📚",
    imageProject: "/images/e-learning-project.png",
    tags: ["JavaScript", "CSS", "HTML", "Firebase"],
    github: "https://github.com/AhmedMohammedSalah/e-learning.git",
    live: "",
  },
  {
    id: 7,
    title: "Job Board",
    category: "Full Stack",
    description:
      "A job board web app where users can browse and apply for jobs, and admins can manage listings.",
    image: "💼",
    imageProject: "/images/Job-Board.png",
    tags: ["Laravel", "Vue.js", "Bootstrap"],
    github: "https://github.com/AhmedMohammedSalah/job-board.git",
    live: "",
  },
  {
    id: 8,
    title: "Movie Website With Vue",
    category: "Frontend",
    description:
      "A movie app using Vue.js and JSON Server with listing, search, and favorites in a responsive UI.",
    image: "🎬",
    imageProject: "/images/Movie-Website-With-Vue.png",
    tags: ["Vue.js", "JSON Server", "Bootstrap"],
    github: "https://github.com/mashady/vueJs_movies_project.git",
    live: "",
  },
  {
    id: 9,
    title: "Cafeteria System",
    category: "Backend",
    description:
      "A basic PHP system to manage users, products, categories and orders in a cafeteria.",
    image: "☕",
    imageProject: "/images/Cafeteria-System.jpg",
    tags: ["PHP", "Blade", "Bootstrap"],
    github: "https://github.com/sarasmmahmoud/Cafetria-Project.git",
    live: "",
  },
  {
    id: 10,
    title: "Movie Website With React",
    category: "Frontend",
    description:
      "A responsive movie site built with React, showcasing movies and trailers.",
    image: "🍿",
    imageProject: "/images/Movie-Website-With-React.png",
    tags: ["React", "Tailwind"],
    github:
      "https://github.com/marwa-nasser-mohamed-abdelmatloub/Movie_WibSite.git",
    live: "",
  },
  {
    id: 11,
    title: "Facebook Clone",
    category: "Frontend",
    description:
      "A professional clone of Facebook's interface, replicating core social media functionalities.",
    image: "👥",
    imageProject: "/images/facebook-project.png",
    tags: ["CSS", "HTML", "Bootstrap"],
    github:
      "https://github.com/marwa-nasser-mohamed-abdelmatloub/Facebook_Project.git",
    live: "",
  },
  {
    id: 12,
    title: "Hosto Website",
    category: "Frontend",
    description:
      "A fully responsive website designed to present services in a clear and engaging layout using HTML, CSS, and Bootstrap.",
    image: "🏢",
    imageProject: "/images/hosto-project.png",
    tags: ["CSS", "HTML", "Bootstrap"],
    github:
      "https://github.com/marwa-nasser-mohamed-abdelmatloub/Hosto_Website_Project.git",
    live: "",
  },
  {
    id: 13,
    title: "Custom Portfolio Website",
    category: "Frontend",
    description:
      "A fully custom personal portfolio website built from scratch using Angular, TypeScript, and Bootstrap to showcase projects, skills, and experience with a clean, responsive, and professional UI.",
    image: "👩‍💻",
    imageProject: "/images/custom-portfolio.png",
    tags: ["Angular", "TypeScript", "Bootstrap", "HTML", "CSS"],
    github:
      "https://github.com/marwa-nasser-mohamed-abdelmatloub/My-Custom_Portfolio.git",
    live: "",
  },
  {
    id: 14,
    title: "Personal CV Website",
    category: "Frontend",
    description:
      "A personalized CV website designed to present resume in a visually appealing and creative format.",
    image: "📄",
    imageProject: "/images/cv-project.png",
    tags: ["CSS", "HTML"],
    github:
      "https://github.com/marwa-nasser-mohamed-abdelmatloub/CV-Project.git",
    live: "",
  },
  {
    id: 15,
    title: "ElZero Template 1",
    category: "Frontend",
    description:
      "A fully responsive website designed to present services in a clear and engaging layout using HTML, CSS, and Bootstrap.",
    image: "🎨",
    imageProject: "/images/ElZero_Template1.png",
    tags: ["CSS", "HTML"],
    github:
      "https://github.com/marwa-nasser-mohamed-abdelmatloub/ElZero_Template1.git",
    live: "",
  },
  {
    id: 16,
    title: "ElZero Template 2",
    category: "Frontend",
    description:
      "A fully responsive website designed to present services in a clear and engaging layout using HTML, CSS, and Bootstrap.",
    image: "🎯",
    imageProject: "/images/ElZero_Template2.png",
    tags: ["CSS", "HTML"],
    github:
      "https://github.com/marwa-nasser-mohamed-abdelmatloub/ElZero_Template2.git",
    live: "",
  },
  {
    id: 17,
    title: "ElZero Template 3",
    category: "Frontend",
    description:
      "A fully responsive website designed to present services in a clear and engaging layout using HTML, CSS, and Bootstrap.",
    image: "🌟",
    imageProject: "/images/ElZero_Template3.png",
    tags: ["CSS", "HTML"],
    github:
      "https://github.com/marwa-nasser-mohamed-abdelmatloub/ElZero_Template3.git",
    live: "",
  },
];


  return (
    <section className="projects" id="projects">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">Explore my latest work</p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project, idx) => (
            <div
              key={project.id}
              className="project-card glass"
              style={{ "--delay": idx * 0.1 + "s" }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-image">{project.image}</div>
              <div className="floating-image">
                <img src={project.imageProject} alt={project.title} />
              </div>
              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="project-overlay">
                <button className="overlay-btn">View Details</button>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div
            className="modal-overlay"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="modal-content glass"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </button>
              <div className="modal-image">{selectedProject.image}</div>
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
              <div className="modal-tags">
                {selectedProject.tags.map((tag, idx) => (
                  <span key={idx}>{tag}</span>
                ))}
              </div>
              <div className="modal-links">
                <a
                  href={selectedProject.github ? selectedProject.github : "#"}
                  className={`modal-link ${
                    !selectedProject.github ? "disabled" : ""
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    if (!selectedProject.github) e.preventDefault();
                  }}
                >
                  <FaGithub /> GitHub
                </a>

                <a
                  href={selectedProject.live ? selectedProject.live : "#"}
                  className={`modal-link primary ${
                    !selectedProject.live ? "disabled" : ""
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    if (!selectedProject.live) e.preventDefault();
                  }}
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

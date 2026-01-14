import React, { useState } from "react";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";
import "./Navigation.css";

const Navigation = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
    { id: "cv", label: "CV", isDownload: true, file: "/Marwa_Nasser_CV_Full_Stack_Developer.pdf" },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar glass">
      <div className="nav-container">
        <div className="nav-logo gradient-text">Portfolio</div>

        <div className="nav-menu">
          {navItems.map((item) =>
            item.isDownload ? (
              <a
                key={item.id}
                href={item.file}
                download
                className="nav-link download-link"
              >
                {item.label}{" "}
                <FaDownload size={14} style={{ marginLeft: "5px" }} />
              </a>
            ) : (
              <button
                key={item.id}
                className={`nav-link ${
                  activeSection === item.id ? "active" : ""
                }`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="active-indicator" />
                )}
              </button>
            )
          )}
        </div>

        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="nav-mobile">
          {navItems.map((item) =>
            item.isDownload ? (
              <a
                key={item.id}
                href={item.file}
                download
                className="nav-mobile-link download-link"
              >
                {item.label}{" "}
                <FaDownload size={14} style={{ marginLeft: "5px" }} />
              </a>
            ) : (
              <button
                key={item.id}
                className={`nav-mobile-link ${
                  activeSection === item.id ? "active" : ""
                }`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navigation;

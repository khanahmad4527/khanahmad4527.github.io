import React from "react";
import "./projectset.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectSet({ image, title, description, tech_stack, github, deploy }) {
  const openLink = (url) => {
    window.open(url);
  };

  return (
    <div className="project-card">
      <div className="project-card-container">
        <div>
          <img src={image} alt={title} />
        </div>
        <div className="project-card-text">
          <h1 className="project-title">{title}</h1>
          <p className="project-description">{description}</p>
          <div className="project-tech-stack">
            {tech_stack.map((elm) => (
              <div key={Date.now() + Math.random()} className="skills-card">
                <img
                  src={elm.src}
                  alt={elm.title}
                  className="skills-card-img"
                />
                <p className="skills-card-name">{elm.title}</p>
              </div>
            ))}
          </div>
          <div className="project-card-btn">
            <div
              onClick={() => openLink(github)}
              className="project-github-link"
            >
              GitHub <FaGithub />
            </div>
            <div
              onClick={() => openLink(deploy)}
              className="project-deployed-link"
            >
              Deploy <FaExternalLinkAlt />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectSet;

import React from "react";
import Styles from "./ProjectSet.module.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectSet({ image, title, description, tech_stack, github, deploy }) {
  const openLink = (url) => {
    window.open(url);
  };

  return (
    <div className={Styles.set} class="project-card">
      <div className={Styles.container}>
        <div class="project-title">
          <img src={image} alt={title} />
        </div>
        <div className={Styles.text}>
          <h1 className={Styles.textTitle}>{title}</h1>
          <p class="project-description">{description}</p>
          <div className={Styles.techStack} class="project-tech-stack">
            {tech_stack.map((elm) => (
              <img
                key={Date.now() + Math.random()}
                src={elm.src}
                alt={elm.title}
              />
            ))}
          </div>
          <div className={Styles.btn}>
            <div onClick={() => openLink(github)} class="project-github-link">
              GitHub <FaGithub />
            </div>
            <div onClick={() => openLink(deploy)} class="project-deployed-link">
              Deploy <FaExternalLinkAlt />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectSet;

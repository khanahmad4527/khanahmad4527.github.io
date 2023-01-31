import React from "react";
import Styles from "./ProjectSet.module.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectSet({ image, title, description, tech_stack, github, deploy }) {
  const openLink = (url) => {
    window.open(url);
  };

  return (
    <div className={Styles["project-card"]}>
      <div className={Styles.container}>
        <div>
          <img src={image} alt={title} />
        </div>
        <div className={Styles.text}>
          <h1 className={Styles["project-title"]}>{title}</h1>
          <p className={Styles["project-description"]}>{description}</p>
          <div className={Styles["project-tech-stack"]}>
            {tech_stack.map((elm) => (
              <div
                key={Date.now() + Math.random()}
                className={Styles["skills-card"]}
              >
                <img
                  src={elm.src}
                  alt={elm.title}
                  className={Styles["skills-card-img"]}
                />
                <p className={Styles["skills-card-name"]}>{elm.title}</p>
              </div>
            ))}
          </div>
          <div className={Styles.btn}>
            <div
              onClick={() => openLink(github)}
              className={Styles["project-github-link"]}
            >
              GitHub <FaGithub />
            </div>
            <div
              onClick={() => openLink(deploy)}
              className={Styles["project-deployed-link"]}
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

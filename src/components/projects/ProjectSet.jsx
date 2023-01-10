import React from "react";
import Styles from "./ProjectSet.module.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectSet({ image, title, description, tech_stack, github, deploy }) {
  const openLink = (url) => {
    window.open(url);
  };

  return (
    <div className={Styles.set}>
      <div className={Styles.container}>
        <div>
          <img src={image} alt={title} />
        </div>
        <div className={Styles.text}>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className={Styles.techStack}>
            {tech_stack.map((elm) => (
              <img key={Date.now()+Math.random()} src={elm.src} alt={elm.title} />
            ))}
          </div>
          <div className={Styles.btn}>
            <div onClick={() => openLink(github)}>
              GitHub <FaGithub />
            </div>
            <div onClick={() => openLink(deploy)}>
              Deploy <FaExternalLinkAlt />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectSet;

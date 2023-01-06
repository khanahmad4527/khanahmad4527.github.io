import Styles from "./Projects.module.css";
import ProjectSet from "./ProjectSet";
import data from "../../db.json";

function Projects() {
  return (
    <div className={Styles.projects}>
      <h1>My Projects</h1>
      {data.projects.map((elm) => {
        return <ProjectSet key={elm.id} {...elm} />;
      })}
    </div>
  );
}

export default Projects;

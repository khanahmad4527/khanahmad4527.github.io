import "./projects.css";
import ProjectSet from "./ProjectSet";
import data from "../../db.json";

function Projects() {
  return (
    <div className="projects-projects" id="projects">
      <h1 className="projects-heading">My Projects</h1>
      {data.projects.map((elm) => {
        return <ProjectSet key={elm.id} {...elm} />;
      })}
    </div>
  );
}

export default Projects;

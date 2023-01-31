import Styles from "./Skills.module.css";
import TechStack from "./TechStack";
import data from "../../db.json";

function Skills() {
  return (
    <div className={Styles.skills} id="skills">
      <div className={Styles.skillsWrapper}>
        <h1 className={Styles.heading}>Languages & Frameworks</h1>
        <div className={Styles.skillsTechnologiesDiv}>
          {data.language_framework.map((elm) => (
            <TechStack key={elm.id} {...elm} />
          ))}
        </div>
        <h1 className={Styles.heading}>Tools</h1>
        <div className={Styles.skillsToolsDiv}>
          {data.tools.map((elm) => (
            <TechStack key={elm.id} {...elm} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;

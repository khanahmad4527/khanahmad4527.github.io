import Styles from "./TechStack.module.css";

function TechStack({ src, title }) {
  return (
    <div className={Styles.main}>
      <div>
        <img src={src} alt={title} />
      </div>
      <p>{title}</p>
    </div>
  );
}

export default TechStack;

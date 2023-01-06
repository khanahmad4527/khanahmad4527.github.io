import Styles from "./About.module.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function About() {
  const openLink = (url) => {
    window.open(url);
  };

  return (
    <div className={Styles.about} id="aboutScroll">
      <h1 className={Styles.aboutH1}>About me</h1>
      <div className={Styles.aboutWrapper}>
        <div className={Styles.aboutWrapperText}>
          <div className={Styles.aboutWrapperTextDiv1}>
            Detailed-oriented, responsible, and committed developer, with a
            get-it-done, on-time, and high-quality product spirit, and more than
            a year of experience defining requirements, designing, implementing,
            testing, and delivering complex back-end and web applications using
            a variety of programming and technologies.
          </div>
          <div className={Styles.aboutWrapperTextDiv2}>
            Love to travel and explore. It refreshes my mind, body, anxiety,
            stress and keeps me active all the time. While exploring keeping all
            the moments as memory in the camera, and this is how you became a
            photographer also. And I enjoying the journey than the destination
          </div>
          <div className={Styles.aboutWrapperTextDiv3}>
            <AiFillGithub
              onClick={() => openLink("https://github.com/khan4527")}
            className={Styles.githubBtn}/>
            <AiFillLinkedin
              onClick={() =>
                openLink("https://www.linkedin.com/in/ahmadkhan45")
              }
              className={Styles.linkedinBtn}/>
          </div>
        </div>
        <div className={Styles.aboutWrapperImg}>
          <img
            src={process.env.PUBLIC_URL + "./Images/About.png"}
            alt="About"
          />
        </div>
      </div>
    </div>
  );
}

export default About;

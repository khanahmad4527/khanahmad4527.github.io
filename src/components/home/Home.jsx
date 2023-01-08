import Styles from "./Home.module.css";
import { FaCloudDownloadAlt } from "react-icons/fa";
import resume from "../../Ahmad-Khan-Resume.pdf";

function Home() {
  const openLink = (url) => {
    window.open(url);
  };
  return (
    <div className={Styles.home} id="homeScroll">
      <div className={Styles.homeWrapper}>
        <div className={Styles.homeLeft}>
          <div>Hi, I'm Ahmad Khan</div>
          <div>Full Stack Web Developer 💻</div>
          <div>
            Analytical and detail-oriented aspiring full stack web developer,
            capable of writing production-ready code using react, javascript,
            and redux on the front end, nodejs, and express on the backend to
            build single page applications. Passionate about coding and new
            technologies
          </div>
          <a href={resume} download>
            <div
              onClick={() =>
                openLink(
                  "https://drive.google.com/file/d/14xQ3jd2ktenVIdvL8SkSQjf5lTnUyj7b/view?usp=share_link"
                )
              }
              className={Styles.resume}
            >
              Resume <FaCloudDownloadAlt />
            </div>
          </a>
        </div>

        <div className={Styles.homeRight}>
          <img
            src={process.env.PUBLIC_URL + "./Images/Profile.jpg"}
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

import Styles from "./Home.module.css";
import { FaCloudDownloadAlt } from "react-icons/fa";

function Home() {
  const openLink = (url) => {
    window.open(url);
  };
  return (
    <div className={Styles.home} id="home">
      <div className={Styles.homeWrapper}>
        <div className={Styles.homeLeft}>
          <div id="user-detail-name">Hello, I'm Ahmad Khan</div>
          <div>
            A skilled{" "}
            <strong id="user-detail-intro">Full Stack Web Developer 💻</strong>
          </div>
          <a href="https://drive.google.com/uc?id=14xQ3jd2ktenVIdvL8SkSQjf5lTnUyj7b&export=download">
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

        <div className={Styles.home - img}>
          <img
            src={process.env.PUBLIC_URL + "./Images/Profile.png"}
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

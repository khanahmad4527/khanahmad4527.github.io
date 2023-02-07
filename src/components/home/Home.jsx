import "./home.css";
import { FaCloudDownloadAlt } from "react-icons/fa";

function Home() {
  const openLink = (url) => {
    window.open(url);
  };
  return (
    <div className="home-main" id="home">
      <div className="homeWrapper">
        <div className="homeLeft">
          <div id="user-detail-name">Hello, I'm Ahmad Khan</div>
          <div>
            A skilled{" "}
            <strong id="user-detail-intro">Full Stack Web Developer 💻</strong>
          </div>
          <a
            href="https://drive.google.com/uc?id=14xQ3jd2ktenVIdvL8SkSQjf5lTnUyj7b&export=download"
            id="resume-link-2"
          >
            <div
              onClick={() =>
                openLink(
                  "https://drive.google.com/file/d/14xQ3jd2ktenVIdvL8SkSQjf5lTnUyj7b/view?usp=share_link"
                )
              }
              className="home-resume"
              id="resume-button-2"
            >
              Resume <FaCloudDownloadAlt />
            </div>
          </a>
        </div>

        <div className="home-img">
          <img src={"https://i.imgur.com/pHAVRHW.png"} alt="profile" />
        </div>
      </div>
    </div>
  );
}

export default Home;

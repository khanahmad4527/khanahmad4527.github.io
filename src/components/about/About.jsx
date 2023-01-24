import Styles from "./About.module.css";

function About() {
  const openLink = (url) => {
    window.open(url);
  };

  return (
    <div className={Styles.about} id="aboutScroll">
      <h1 className={Styles.aboutH1}>About me</h1>
      <div className={Styles.aboutWrapper}>
        <div className={Styles.aboutWrapperDiv}>
          <div className={Styles.aboutMe}>
            Analytical and detail oriented aspiring full stack web developer
            with a passion for coding and new technologies. Strong skillset in
            technologies such as React, JavaScript, Next.js, Redux, Node.js, and
            MongoDB. Capable of building both single-page and multi-page web
            applications, continuously seeking to learn and grow as a developer
            and bring skills and passion to a new opportunity.
          </div>
          <div className={Styles.socialLink}>
            <img
              onClick={() => openLink("https://github.com/khanahmad4527")}
              src={process.env.PUBLIC_URL + "./Images/github.svg"}
              alt="About"
            />
            <img
              onClick={() =>
                openLink("https://www.linkedin.com/in/khanahmad4527")
              }
              src={process.env.PUBLIC_URL + "./Images/linkedin.svg"}
              alt="About"
            />
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

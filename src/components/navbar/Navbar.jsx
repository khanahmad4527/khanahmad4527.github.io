import React from "react";
import Styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={Styles.navbar}>
      <div className={Styles.wrapper}>
        <div className={Styles.wrapperLeft}>
          <img src={process.env.PUBLIC_URL + "./Images/icon.png"} alt="icon" />
        </div>
        <div className={Styles.wrapperRight}>
          <p>Home</p>
          <p>About</p>
          <p>Skills</p>
          <p>Projects</p>
          <p>Contact</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

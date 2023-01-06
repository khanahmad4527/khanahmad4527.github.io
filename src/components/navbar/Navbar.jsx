import React from "react";
import Styles from "./Navbar.module.css";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className={Styles.navbar}>
      <div className={Styles.wrapper}>
        <div className={Styles.wrapperLeft}>
          <Link to="homeScroll" smooth={true} offset={-100} duration={500}>
            <img
              src={process.env.PUBLIC_URL + "./Images/icon.png"}
              alt="icon"
            />
          </Link>
        </div>
        <div className={Styles.wrapperRight}>
          <p>
            <Link to="homeScroll" smooth={true} offset={-100} duration={500}>
              Home
            </Link>
          </p>
          <p>
            <Link to="aboutScroll" smooth={true} offset={-79} duration={500}>
              About
            </Link>
          </p>
          <p>
            <Link to="skillsScroll" smooth={true} offset={-79} duration={500}>
              Skills
            </Link>
          </p>
          <p>
            <Link to="projectsScroll" smooth={true} offset={-79} duration={500}>
              Projects
            </Link>
          </p>
          <p>
            <Link to="contactScroll" smooth={true} offset={-79} duration={500}>
              Contact
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

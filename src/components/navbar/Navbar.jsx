import React from "react";
import Styles from "./Navbar.module.css";
import { Link } from "react-scroll";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

function Navbar() {
  const openLink = (url) => {
    window.open(url);
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div id="nav-menu" className={Styles.navbar}>
      <div className={Styles.wrapper}>
        <div className={Styles.wrapperLeft}>
          <Link to="home" smooth={true} offset={-100} duration={500}>
            <img
              src={process.env.PUBLIC_URL + "./Images/icon.png"}
              alt="icon"
            />
          </Link>
        </div>
        <div className={Styles.wrapperRight}>
          <div>
            <Link
              to="home"
              smooth={true}
              offset={-100}
              duration={500}
              className="nav-link home"
            >
              Home
            </Link>
          </div>
          <div>
            <Link
              to="about"
              smooth={true}
              offset={-79}
              duration={500}
              className="nav-link about"
            >
              About
            </Link>
          </div>
          <div>
            <Link
              to="skills"
              smooth={true}
              offset={-79}
              duration={500}
              className="nav-link skills"
            >
              Skills
            </Link>
          </div>
          <div>
            <Link
              to="projects"
              smooth={true}
              offset={-79}
              duration={500}
              className="nav-link projects"
            >
              Projects
            </Link>
          </div>
          <div>
            <Link
              to="contact"
              smooth={true}
              offset={-79}
              duration={500}
              className="nav-link contact"
            >
              Contact
            </Link>
          </div>
          <div>
            <a
              href="https://drive.google.com/uc?id=14xQ3jd2ktenVIdvL8SkSQjf5lTnUyj7b&export=download"
              className="nav-link resume"
            >
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
        </div>
        <div className={Styles.responce}>
          <RxHamburgerMenu onClick={onOpen} />
          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerBody marginTop={"30px"}>
                <div className={Styles.drawerbody}>
                  <div>
                    <Link
                      to="home"
                      smooth={true}
                      offset={-100}
                      duration={500}
                      onClick={onClose}
                      className="nav-link home"
                    >
                      Home
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="about"
                      smooth={true}
                      offset={-68}
                      duration={500}
                      onClick={onClose}
                      className="nav-link about"
                    >
                      About
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="skills"
                      smooth={true}
                      offset={-79}
                      duration={500}
                      onClick={onClose}
                      className="nav-link skills"
                    >
                      Skills
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="projects"
                      smooth={true}
                      offset={-79}
                      duration={500}
                      onClick={onClose}
                      className="nav-link projects"
                    >
                      Projects
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="contact"
                      smooth={true}
                      offset={-79}
                      duration={500}
                      onClick={onClose}
                      className="nav-link contact"
                    >
                      Contact
                    </Link>
                  </div>
                  <div>
                    <a
                      href="https://drive.google.com/uc?id=14xQ3jd2ktenVIdvL8SkSQjf5lTnUyj7b&export=download"
                      className="nav-link resume"
                      id="resume-link-1"
                    >
                      <div
                        onClick={() => {
                          onClose();
                          openLink(
                            "https://drive.google.com/file/d/14xQ3jd2ktenVIdvL8SkSQjf5lTnUyj7b/view?usp=share_link"
                          );
                        }}
                        className={Styles.resume}
                        id="resume-button-1"
                      >
                        Resume <FaCloudDownloadAlt />
                      </div>
                    </a>
                  </div>
                </div>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

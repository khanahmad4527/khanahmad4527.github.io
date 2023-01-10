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
          <div>
            <Link to="homeScroll" smooth={true} offset={-100} duration={500}>
              Home
            </Link>
          </div>
          <div>
            <Link to="aboutScroll" smooth={true} offset={-68} duration={500}>
              About
            </Link>
          </div>
          <div>
            <Link to="skillsScroll" smooth={true} offset={-79} duration={500}>
              Skills
            </Link>
          </div>
          <div>
            <Link to="projectsScroll" smooth={true} offset={-79} duration={500}>
              Projects
            </Link>
          </div>
          <div>
            <Link to="contactScroll" smooth={true} offset={-79} duration={500}>
              Contact
            </Link>
          </div>
          <div>
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
                      to="homeScroll"
                      smooth={true}
                      offset={-100}
                      duration={500}
                      onClick={onClose}
                    >
                      Home
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="aboutScroll"
                      smooth={true}
                      offset={-68}
                      duration={500}
                      onClick={onClose}
                    >
                      About
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="skillsScroll"
                      smooth={true}
                      offset={-79}
                      duration={500}
                      onClick={onClose}
                    >
                      Skills
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="projectsScroll"
                      smooth={true}
                      offset={-79}
                      duration={500}
                      onClick={onClose}
                    >
                      Projects
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="contactScroll"
                      smooth={true}
                      offset={-79}
                      duration={500}
                      onClick={onClose}
                    >
                      Contact
                    </Link>
                  </div>
                  <div>
                    <a href="https://drive.google.com/uc?id=14xQ3jd2ktenVIdvL8SkSQjf5lTnUyj7b&export=download">
                      <div
                        onClick={() => {
                          onClose();
                          openLink(
                            "https://drive.google.com/file/d/14xQ3jd2ktenVIdvL8SkSQjf5lTnUyj7b/view?usp=share_link"
                          );
                        }}
                        className={Styles.resume}
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

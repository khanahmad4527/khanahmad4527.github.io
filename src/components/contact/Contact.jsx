import Styles from "./Contact.module.css";
import { SiGmail } from "react-icons/si";
import { IoMdCall } from "react-icons/io";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";

function Contact() {
  const openLink = (url) => {
    window.open(url);
  };
  return (
    <div className={Styles.contact} id="contactScroll">
      <div className={Styles.wrapper}>
        <h1 className={Styles.heading}>Contact</h1>
        <div className={Styles.wrapperDiv}>
          <div>
            <img
              src="https://www.genscript.com/gsimages/support/image-contactus.png"
              alt="contactme"
            />
          </div>
          <div>
            <div>
              <SiGmail /> khanahmad4527@gmail.com
            </div>
            <div>
              <IoMdCall /> +917021764527
            </div>
            <div>
              <MdLocationOn /> Thane, Maharashtra
            </div>
            <div>
              <AiFillLinkedin
                onClick={() =>
                  openLink("https://www.linkedin.com/in/ahmadkhan45")
                }
              />
              <AiFillGithub
                onClick={() => openLink("https://github.com/khan4527")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

import Styles from "./Contact.module.css";
import { SiGmail } from "react-icons/si";
import { IoMdCall } from "react-icons/io";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
function Contact() {
  return (
    <div className={Styles.contact}>
      <div className={Styles.wrapper}>
        <h1>Contact</h1>
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
              <AiFillLinkedin />
              <AiFillGithub />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

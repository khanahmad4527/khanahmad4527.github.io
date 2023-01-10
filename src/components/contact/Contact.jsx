import Styles from "./Contact.module.css";
import { SiGmail } from "react-icons/si";
import { IoMdCall } from "react-icons/io";
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
          <div className={Styles.wrapperDivLeft}>
            <img
              src="https://www.genscript.com/gsimages/support/image-contactus.png"
              alt="contactme"
            />
          </div>
          <div className={Styles.wrapperDivRight}>
            <div className={Styles.gmail}>
              <SiGmail /> khanahmad4527@gmail.com
            </div>
            <div className={Styles.number}>
              <IoMdCall /> +917021764527
            </div>
            <div className={Styles.location}>
              <MdLocationOn /> Thane, Maharashtra
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
        </div>
      </div>
    </div>
  );
}

export default Contact;

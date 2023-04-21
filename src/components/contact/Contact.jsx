import "./contact.css";
import { SiGmail } from "react-icons/si";
import { IoMdCall } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";

function Contact() {
  const openLink = (url) => {
    window.open(url);
  };
  return (
    <div className="contact-main" id="contact">
        <h1 className="contactheading">Contact</h1>
        <div className="headingwrapperDiv">
          <div className="headingwrapperDivLeft">
            <img
              src="https://www.genscript.com/gsimages/support/image-contactus.png"
              alt="contactme"
            />
          </div>
          <div className="headingwrapperDivRight">
            <div className="contact-gmail" id="contact-email">
              <SiGmail /> khanahmad4527@gmail.com
            </div>
            <div className="contact-number" id="contact-phone">
              <IoMdCall /> +91 7021764527
            </div>
            <div className="contact-location">
              <MdLocationOn /> Thane, Maharashtra
            </div>
            <div className="contact-socialLink">
              <img
                onClick={() => openLink("https://github.com/khanahmad4527")}
                src={process.env.PUBLIC_URL + "./Images/github.svg"}
                alt="About"
                id="contact-github"
              />
              <img
                onClick={() =>
                  openLink("https://www.linkedin.com/in/khanahmad4527")
                }
                src={process.env.PUBLIC_URL + "./Images/linkedin.svg"}
                alt="About"
                id="contact-linkedin"
              />
            </div>
          </div>
        </div>
    </div>
  );
}

export default Contact;

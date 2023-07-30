import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import logo from "../images/favico.png";

//logos
import {
  faFacebook,
  faPinterest,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer>
      <div className="footerContainer1 footerContainer">
        <div className="logoContainer">
          <img src={logo} alt="" className="logo" />
          <div className="logoText">
            <p className="upperLogoText">BOMBAY</p>
            <p className="lowerLogoText">ESTATES.</p>
          </div>
        </div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <div className="mediaLogosContainer">
          <Link to={"/"}>
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
          <Link to={"/"}>
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <Link to={"/"}>
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
          <Link to={"/"}>
            <FontAwesomeIcon icon={faPinterest} />
          </Link>
          <Link to={"/"}>
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
        </div>
      </div>
      <div className="footerContainer2 footerContainer">
        <h3>HELP</h3>
        <Link to="/">Privacy Policy</Link>
        <Link to="/">Contact Suppourt</Link>
        <Link to="/">Knowledge Base</Link>
        <Link to="/">Careers</Link>
        <Link to="/">FAQs</Link>
      </div>
      <div className="footerContainer3 footerContainer">
        <h3>LINKS</h3>
        <Link to="/">Properties</Link>
        <Link to="/">Agents</Link>
        <Link to="/">Services</Link>
        <Link to="/">Blogs</Link>
        <Link to="/">Contact</Link>
      </div>
      <div className="footerContainer4 footerContainer">
        <h3>NEWSLETTER</h3>
        <h6>Subscribe to our newsletter</h6>
        <input type="text" placeholder="Email" />
        <button className="btn">Subscribe</button>
      </div>
    </footer>
  );
};

export default Footer;

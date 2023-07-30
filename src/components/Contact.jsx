import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//logos
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
const Contact = ({ contactSecRef }) => {
  return (
    <section className="contactSection" ref={contactSecRef}>
      <div className="leftContact">
        <ContactCard
          logo={faLocationDot}
          heading={"Address"}
          content="Mulund Goregaon Link Rd Wockhardt Hospital Bhandup,Mumbai,400078,India"
        />
        <ContactCard logo={faPhone} heading={"Phone"} content=" 123-456-XXX" />
        <ContactCard
          logo={faEnvelope}
          heading={"Mail"}
          content="samplemail@gmail.com"
        />
      </div>
      <div className="rightContact">
        <iframe
          title="current office location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30151.774829478392!2d72.85809836444531!3d19.15270930230801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b65a7edbbdb9%3A0xf447c38599143078!2sGoregaon%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1689832126500!5m2!1sen!2sin"
          height="450"
          style={{ border: 0, width: "100%" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

const ContactCard = ({ logo, heading, content }) => {
  return (
    <div className="contactCard">
      <div className="leftPortion">
        <FontAwesomeIcon icon={logo} />
      </div>
      <div className="rightPortion">
        <h2>{heading}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";

import { faHandshake } from "@fortawesome/free-regular-svg-icons";
import {
  faPiggyBank,
  faLocation,
  faBuildingColumns,
} from "@fortawesome/free-solid-svg-icons";
import Servicescard from "./Servicescard";

const Services = ({ servicesSecRef }) => {
  return (
    <section id="serviceSection" ref={servicesSecRef}>
      <h5 className="secondaryHeading">Our Services</h5>
      <h1 className="primaryHeading">We offer more than your expectations</h1>
      <div className="servicesCardWrapper">
        <Servicescard
          heading="Free Consulatncy"
          icon={faHandshake}
          content=""
        />
        <Servicescard heading="No Downpayment" icon={faPiggyBank} content="" />
        <Servicescard
          heading="Unlimited Site Visits"
          icon={faLocation}
          content=""
        />
        <Servicescard
          heading="Help in Bank Processes"
          icon={faBuildingColumns}
          content=""
        />
      </div>
    </section>
  );
};

export default Services;

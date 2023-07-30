import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Servicescard = ({ heading, icon, content }) => {
  return (
    <div className="servicesCard">
      <div className="iconBox">
        <FontAwesomeIcon icon={icon} />
      </div>
      <h3>{heading}</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        fugit ex sint rerum, provident fugiat veritatis maxime pariatur ad
        praesentium, iste velit. Ab, commodi nemo.
      </p>
    </div>
  );
};

export default Servicescard;

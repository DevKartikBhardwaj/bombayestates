import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//logos
import {
  faBathtub,
  faBed,
  faLink,
  faMap,
} from "@fortawesome/free-solid-svg-icons";
const PropertyCard = ({
  actualPrice,
  discountedPrice,
  img,
  bedrooms,
  bathrooms,
  area,
  mainHeading,
  secHeading,
}) => {
  return (
    <div className="propertycard">
      <img src={img} alt="property img" className="propertycardImage" />
      <div className="splittedPart">
        <div className="upperSplittedCard">
          <h3 className="actualPrice">${actualPrice}</h3>
          <h3 className="dicountedPrice">${discountedPrice}</h3>
        </div>
        <div className="moreInfo">
          <div className="clubIconText">
            <FontAwesomeIcon icon={faBed} />
            <h6>{bedrooms}</h6>
          </div>
          <div className="clubIconText">
            <FontAwesomeIcon icon={faBathtub} />
            <h6>{bathrooms}</h6>
          </div>
          <div className="clubIconText">
            <FontAwesomeIcon icon={faMap} />
            <h6>{area}sqft</h6>
          </div>
        </div>
        <div className="cardHeadings">
          <h3>{mainHeading}</h3>
          <h4>{secHeading}</h4>
        </div>
        <div className="link">
          <FontAwesomeIcon icon={faLink} />
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

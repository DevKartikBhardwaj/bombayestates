import React from "react";
//images
import p1 from "../images/propertycard/p1.jpg";
import p2 from "../images/propertycard/p2.jpg";
import p3 from "../images/propertycard/p3.jpg";
import PropertyCard from "./PropertyCard";

const PropertyComponent = ({ propertiesSecRef }) => {
  return (
    <section id="exclusiveProperties" ref={propertiesSecRef}>
      <h5 className="secondaryHeading">Exclusive Properties</h5>
      <h1 className="primaryHeading">
        Properties that are benefitial to purchase
      </h1>
      <div className="propertycardWrapper">
        <PropertyCard
          actualPrice={800000}
          discountedPrice={750000}
          img={p1}
          bedrooms={3}
          bathrooms={2}
          area="12,386"
          mainHeading="The Vanilla Park Homes"
          secHeading="Ohio"
        />
        <PropertyCard
          actualPrice={800000}
          discountedPrice={750000}
          img={p2}
          bedrooms={3}
          bathrooms={2}
          area="12,386"
          mainHeading="The Vanilla Park Homes"
          secHeading="Ohio"
        />
        <PropertyCard
          actualPrice={800000}
          discountedPrice={750000}
          img={p3}
          bedrooms={3}
          bathrooms={2}
          area="12,386"
          mainHeading="The Vanilla Park Homes"
          secHeading="Ohio"
        />

        {/* <div className="propertycard">
          <img src={p2} alt="property img" className="propertycardImage" />
          <div className="splittedPart"></div>
        </div>
        <div className="propertycard">
          <img src={p3} alt="property img" className="propertycardImage" />
          <div className="splittedPart"></div>
        </div> */}
      </div>
    </section>
  );
};

export default PropertyComponent;

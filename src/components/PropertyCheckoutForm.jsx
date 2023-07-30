import React, { useRef, useState } from "react";
const PropertyCheckoutForm = () => {
  const inputPropertyArea = useRef();
  const inputPropertyPrice = useRef();
  const [propertySize, setPropertySize] = useState(0);
  const [propertyPrice, setPropertyPrice] = useState(0);

  const handleSizeChange = () => {
    setPropertySize(inputPropertyArea.current.value);
  };
  const handlePriceChange = () => {
    setPropertyPrice(inputPropertyPrice.current.value);
  };
  return (
    <div className="formWrapper">
      <div className="propertyForm">
        <h2 className="primaryHeading">Lookout for properties</h2>
        <form action="#">
          <select name="#" className="selects">
            <option value="#">Choose the city</option>
          </select>
          <select name="#" className="selects">
            <option value="#">Location</option>
          </select>
          <select name="#" className="selects">
            <option value="#">Property Status</option>
          </select>
          <select name="#" className="selects">
            <option value="#">Property Type</option>
          </select>
          <select name="#" className="selects">
            <option value="#">No of Bedrooms</option>
          </select>
          <select name="#" className="selects">
            <option value="#">No of Bathrooms</option>
          </select>
          <div className="rangeWrapper">
            <p>
              <span>Size: under sqft</span>
              {propertySize}
            </p>
            <input
              type="range"
              name="#"
              className="rangeInputs"
              min={500}
              max={10000}
              onChange={() => handleSizeChange()}
              ref={inputPropertyArea}
            />
          </div>
          <div className="rangeWrapper">
            <p>
              <span>Price: under $</span>
              {propertyPrice}
            </p>
            <input
              type="range"
              name="#"
              className="rangeInputs"
              min={100000}
              max={1000000}
              onChange={() => handlePriceChange()}
              ref={inputPropertyPrice}
            />
          </div>
          <button
            className="btn propertyFormBtn"
            onClick={(e) => e.preventDefault()}
          >
            search
          </button>
        </form>
      </div>
    </div>
  );
};

export default PropertyCheckoutForm;

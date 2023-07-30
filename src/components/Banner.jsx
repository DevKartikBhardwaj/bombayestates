import React from "react";

const Banner = ({ homeSecRef }) => {
  return (
    <div className="bannerArea" id="banner" ref={homeSecRef}>
      <div className="bannerContentWrapper">
        <h2 id="bannerHeading">
          Buy ,rent or sell your property without any issue
        </h2>
        <button className="btn bannerBtn">Check out our services</button>
      </div>
    </div>
  );
};

export default Banner;

import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

//images
import t1 from "../images/testimonialcard/t1.jpg";
import t2 from "../images/testimonialcard/t2.jpg";
import t3 from "../images/testimonialcard/t3.jpg";
import t4 from "../images/testimonialcard/t4.jpg";
import t5 from "../images/testimonialcard/t5.jpg";
import t6 from "../images/testimonialcard/t6.jpg";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1500 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1500, min: 1010 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 1010, min: 0 },
    items: 1,
  },
};

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h5 className="secondaryHeading">Testimonials</h5>
      <h1 className="primaryHeading">Know what clients say about us</h1>
      <Carousel
        responsive={responsive}
        draggable={true}
        arrows={false}
        autoPlay={true}
        infinite={true}
      >
        <TestimonialCard name={"Smith "} img={t1} />
        <TestimonialCard name={"Olivia Brose"} img={t4} />
        <TestimonialCard name={"John"} img={t2} />
        <TestimonialCard name={"Daisy"} img={t5} />
        <TestimonialCard name={"Williams"} img={t3} />
        <TestimonialCard name={"Shanell"} img={t6} />
      </Carousel>
    </section>
  );
};

const TestimonialCard = ({
  name,
  img,
  designation = "Business Person",
  review = "The best real estate company I have ever dealt with. Very professional,experienced and helpful agents and brokers. Highly recommend.",
}) => {
  return (
    <div className="testimonialCard">
      <p className="testimonialContent">{review}</p>
      <div className="bottomContainer">
        <img src={img} alt="client img" />
        <div className="rightContainer">
          <h2>{name}</h2>
          <h3>{designation}</h3>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

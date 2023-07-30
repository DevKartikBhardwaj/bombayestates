import React, { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
//components
import Banner from "../components/Banner";
import PropertyCheckoutForm from "../components/PropertyCheckoutForm";
import Services from "../components/Services";
import PropertyComponent from "../components/PropertyComponent";
import WorkFlow from "../components/WorkFlow";
import Testimonials from "../components/Testimonials";
import Agents from "../components/Agents";
import Blogs from "../components/Blogs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  //refrences
  const homeSecRef = useRef(null);
  const propertiesSecRef = useRef(null);
  const servicesSecRef = useRef(null);
  const agentsSecRef = useRef(null);
  const blogsSecRef = useRef(null);
  const contactSecRef = useRef(null);

  const [scrollValue, setScrollValue] = useState(0);

  window.addEventListener("scroll", () => {
    setScrollValue(window.scrollY);
  });

  return (
    <>
      <Navbar
        propertiesSecRef={propertiesSecRef}
        servicesSecRef={servicesSecRef}
        agentsSecRef={agentsSecRef}
        blogsSecRef={blogsSecRef}
        contactSecRef={contactSecRef}
      />
      <Banner homeSecRef={homeSecRef} />
      <PropertyCheckoutForm />
      <Services servicesSecRef={servicesSecRef} />
      <PropertyComponent propertiesSecRef={propertiesSecRef} />
      <WorkFlow />
      <Testimonials />
      <Agents agentsSecRef={agentsSecRef} />
      <Blogs blogsSecRef={blogsSecRef} />
      <Contact contactSecRef={contactSecRef} />
      <Footer />
      {scrollValue > 300 && <ScrollOnTop homeSecRef={homeSecRef} />}
    </>
  );
};

const ScrollOnTop = ({ homeSecRef }) => {
  const scrollOnClick = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Link to="#banner" onClick={() => scrollOnClick(homeSecRef)}>
      <div className="box">
        <FontAwesomeIcon icon={faArrowUp} />
      </div>
    </Link>
  );
};

export default Home;

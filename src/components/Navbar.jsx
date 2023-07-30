import React, { useRef } from "react";
import { Link } from "react-router-dom";
//images
import logo from "../images/favico.png";

const Navbar = ({
  propertiesSecRef,
  servicesSecRef,
  agentsSecRef,
  blogsSecRef,
  contactSecRef,
}) => {
  const hamburgerRef = useRef();
  const stick1 = useRef();
  const stick2 = useRef();

  const handleClick = () => {
    console.log(hamburgerRef.current.style.display);
    if (hamburgerRef.current.style.display === "none") {
      hamburgerRef.current.style.display = "block";
      stick1.current.style.width = "15px";
      stick2.current.style.width = "25px";
    } else {
      hamburgerRef.current.style.display = "none";
      stick1.current.style.width = "35px";
      stick2.current.style.width = "35px";
    }
  };

  // const [
  //   propertiesSecRef,
  //   servicesSecRef,
  //   agentsSecRef,
  //   blogsSecRef,
  //   contactSecRef,
  // ] = refrencesArr;

  const scrollOnClick = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className="container navbar">
        <div className="leftNav">
          <img src={logo} alt="" className="logo" />
          <div className="logoText">
            <p className="upperLogoText">BOMBAY</p>
            <p className="lowerLogoText">ESTATES.</p>
          </div>
        </div>
        <div className="midNav">
          <ul className="midnavul">
            <li className="listItem">
              <Link to="/">Home</Link>
            </li>
            <li className="listItem">
              <Link
                to="#exclusiveProperties"
                onClick={() => scrollOnClick(propertiesSecRef)}
              >
                Properties
              </Link>
            </li>
            <li className="listItem">
              <Link
                to="#serviceSection"
                onClick={() => scrollOnClick(servicesSecRef)}
              >
                Services
              </Link>
            </li>
            <li className="listItem">
              <Link
                to="#agentSection"
                onClick={() => scrollOnClick(agentsSecRef)}
              >
                Agents
              </Link>
            </li>
            <li className="listItem">
              <Link
                to="#blogSection"
                onClick={() => scrollOnClick(blogsSecRef)}
              >
                Blogs
              </Link>
            </li>
            <li className="listItem">
              <Link
                to="#contactsSection"
                onClick={() => scrollOnClick(contactSecRef)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="rightNav">
          <button className="btn navBtn">Inquire</button>
        </div>
      </nav>
      <div className="threeSticks" onClick={() => handleClick()}>
        <div className="stick" style={{ width: "35px" }} ref={stick1}></div>
        <div className="stick" style={{ width: "35px" }} ref={stick2}></div>
        <div className="stick" style={{ width: "35px" }}></div>
      </div>
      <div
        className="smallScreenNav"
        ref={hamburgerRef}
        style={{ display: "none" }}
      >
        <div className="smallScreenNavWrapper">
          <li className="listItem">
            <Link to="/">Home</Link>
          </li>
          <li className="listItem">
            <Link to="/properties">Properties</Link>
          </li>
          <li className="listItem">
            <Link to="/services">Services</Link>
          </li>
          <li className="listItem">
            <Link to="/agent">Agents</Link>
          </li>
          <li className="listItem">
            <Link to="/blog">Blogs</Link>
          </li>
          <li className="listItem">
            <Link to="/contact">Contact</Link>
          </li>
          <button className="btn navBtn">Inquire</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

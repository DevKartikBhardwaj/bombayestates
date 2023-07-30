import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//logos
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

//images
import agent1 from "../images/agentsCard/agent1.jpg";
import agent2 from "../images/agentsCard/agent2.jpg";
import agent3 from "../images/agentsCard/agent3.jpg";
const Agents = ({ agentsSecRef }) => {
  return (
    <section className="agentsSection" ref={agentsSecRef}>
      <h5 className="secondaryHeading">Our Agents</h5>
      <div className="agentCardsWrapper">
        <AgentsCard
          img={agent1}
          name={"James Adams"}
          number={"123-456-789"}
          content={
            " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quodcumque pariatur quibusdam quidem earum, asperiores ipsa velit esseculpa?"
          }
        />
        <AgentsCard
          img={agent2}
          name={"Emily Watson"}
          number={"123-456-789"}
          content={
            " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quodcumque pariatur quibusdam quidem earum, asperiores ipsa velit esseculpa?"
          }
        />
        <AgentsCard
          img={agent3}
          name={"John Carlos"}
          number={"123-456-789"}
          content={
            " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quodcumque pariatur quibusdam quidem earum, asperiores ipsa velit esseculpa?"
          }
        />
      </div>
    </section>
  );
};

const AgentsCard = ({ img, name, number, content }) => {
  return (
    <div className="agentsCard">
      <img src={img} alt="agent img" className="agentImg onHover" />
      <h2 className="onHover">{name}</h2>
      <h4 className="onHover">{number}</h4>
      <p className="onHover">{content}</p>
      <div className="mediaContainer onHover">
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faEnvelope} />
      </div>
    </div>
  );
};

export default Agents;

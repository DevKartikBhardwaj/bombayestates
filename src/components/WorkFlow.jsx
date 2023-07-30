import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

const WorkFlow = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: "true" });
  }, []);

  return (
    <section className="workflow">
      <h5 className="secondaryHeading">Workflow</h5>
      <h1 className="primaryHeading">How it all goes</h1>
      <div className="workflowCardWrapper" data-aos="fade-up">
        <WorkFlowCard
          num={"01"}
          heading="Visit and evaluate property"
          content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        tempore, consequuntur aspernatur nesciunt asperiores culpa."
        />
        <WorkFlowCard
          num={"02"}
          heading="Meet our agent and close the deal"
          content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        tempore, consequuntur aspernatur nesciunt asperiores culpa."
        />
        <WorkFlowCard
          num={"03"}
          heading="Claim your property"
          content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        tempore, consequuntur aspernatur nesciunt asperiores culpa."
        />
      </div>
    </section>
  );
};

const WorkFlowCard = ({ num, heading, content }) => {
  return (
    <div className="workflowcard">
      <span className="stepNum">{num}</span>
      <h3>{heading}</h3>
      <p id="workflowparah">{content}</p>
    </div>
  );
};

export default WorkFlow;

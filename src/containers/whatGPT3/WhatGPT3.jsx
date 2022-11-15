import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatGPT3.css";

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="EVNT's Mission"
        text="To build the world's most exclusive online university for building real-life skills and networking with the smartest people."
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="wgpt3_text">
        Our ultimate aim is to fill the gap between tier 3 and tier 1 colleges
        by conducting dynamic events and empowering every student get access to
        enhanced learning experience and amazing people.
      </h1>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature
        title="Career "
        text="Providing different carrier options through our dynamic events with top Industry experts"
      />
      <Feature
        title="Clubs"
        text="Students interact with similar mindsets of people with segregated different clubs."
      />
      <Feature
        title="Events"
        text="Exclusive Events with Personalised Discussion with your Q/A"
      />
      <Feature
        title="Speakers"
        text="Providing speakers and sponsors
for colleges(clubs) and the public
way too in free mode and minimal
price too."
      />
    </div>
  </div>
);

export default WhatGPT3;

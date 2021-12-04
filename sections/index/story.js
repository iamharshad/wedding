import * as React from "react";

import Section from "../../components/section";
import StorybookTimeline from "../../components/storyTimeline";

const Story = () => {
  return (
    <Section id="story">
      <div className="container">
        <h2 className="sub-heading text-center">WE LOVE EACH OTHER</h2>

        <h1 className="heading-1 cursive primary-text mb-3 text-center">
          Our Story
        </h1>
        <p className="section-description secondary-text text-center">
          Here we have mentioned some special moments of our story
        </p>
        <StorybookTimeline />
      </div>
    </Section>
  );
};

export default Story;

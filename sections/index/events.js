import * as React from "react";
import Section from "../../components/section";
import EventCard from "../../components/eventCard";
import Overlay from "../../components/overlay";
import { eventDetails } from "../../shared/dataset";
const Events = () => {
  return (
    <Section id="events" className="events position-relative">
      <Overlay opacity={0.4} />

      <div className="container">
        <div className="position-relative">
          <div className="sub-heading text-center text-off-white">
            our special events
          </div>
          <h1 className="heading-1 cursive text-white text-center">
            Wedding Events
          </h1>
          <div className="row ">
            <div className="col-12 col-md-10 offset-md-1">
              <div className="row">
                {eventDetails.map((eventDetail, i) => {
                  return (
                    <div className="col-12 col-md-6" key={i}>
                      <EventCard details={eventDetail} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Events;

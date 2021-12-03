import * as React from "react";

const EventCard = ({
  details: { heading = "", description = "", time = "", date = "", link } = {},
}) => {
  return (
    <div className="event-card text-center text-white">
      <h2 className="event-card-heading">{heading}</h2>
      <div className="event-time">
        <div className="row ">
          <div className="col-6">
            <i class="fas fa-clock mx-auto mb-1"></i>
            <br />
            {time}
          </div>
          <div className="col-6">
            <i class="fas fa-calendar-alt"></i> <br />
            {date}
          </div>
        </div>
      </div>
      <p>
        <a href={link} className="text-white" target="_blank">
          {description}
          <br /> <i class="fas fa-map-marker-alt mt-3"></i> <br />
          <small>Open in maps</small>
        </a>
      </p>
    </div>
  );
};

export default EventCard;

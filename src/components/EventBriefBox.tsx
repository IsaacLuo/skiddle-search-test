import React, { FunctionComponent } from "react";
import { GREEN_BACKGROUND_COLOR } from "../const";
import styled from "styled-components";
import { CalendarOutlined, PushpinOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Link } from "react-router-dom";

const EventBox = styled.div`
  width: 200px;
  height: 500px;
  display: flex;
  flex-direction: column;
  margin: 50px;
`;

const EventImage = styled.img`
  width: 200px;
  height: 200px;
`;

const EventTitle = styled.div`
  font-weight: bold;
  font-size: 150%;
`;

const EventDescription = styled.p`
  height: 200px;
  text-overflow: ellipsis;
`;

const EventBriefBox: FunctionComponent<{ event: IEvent }> = ({ event }) => {
  return (
    <EventBox>
      <EventImage src={event.largeimageurl} alt="event" />
      <EventTitle>{event.eventname}</EventTitle>
      <EventDescription>{event.description}</EventDescription>
      <div>
        <CalendarOutlined /> {event.date}
      </div>
      <div>
        <PushpinOutlined /> {event.venue.town}
      </div>
      <Link to={`/events/${event.id}`}>
        <Button
          type="primary"
          style={{ backgroundColor: GREEN_BACKGROUND_COLOR }}
        >
          view details
        </Button>
      </Link>
    </EventBox>
  );
};

export default EventBriefBox;

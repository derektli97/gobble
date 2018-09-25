import React from "react";
import { Flex } from "grid-styled";
import { Card, Button } from "antd";
import { EventCardTitle, EventCardDate } from "Pages/Events/EventsCard/EventsCardStyles";

class EventsCard extends React.Component {
  render () {
    const { event } = this.props;
    const eventDateTime = new Date(event.start.local);
    const localDateTime = new Date();
    // If the event has already passed, return an empty element.
    if (eventDateTime < localDateTime) {
      return <React.Fragment />;
    }
    return (
      <Card bordered={false} style={{ padding: "0px", width: 400, margin: "10px" }}>
        <Flex justifyContent='space-between'>
          <Flex flexDirection='column'>
            <EventCardTitle>{ event.name.text }</EventCardTitle>
            <EventCardDate>{ eventDateTime.toLocaleString("en-US", { hour12: true }) }</EventCardDate>
          </Flex>
          <Button target='_blank' href={event.url}>Sign Up</Button>
        </Flex>
      </Card>
    );
  }
}

export default EventsCard;

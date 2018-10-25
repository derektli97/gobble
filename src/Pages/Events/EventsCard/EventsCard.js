import React from "react";
import { Flex } from "grid-styled";
import { Card, Button } from "antd";
import { EventCardTitle, EventCardDate } from "Pages/Events/EventsCard/EventsCardStyles";
import moment from "moment";

export class EventsCard extends React.Component {
  render () {
    const { time, title, url } = this.props;
    const eventDateTime = moment(time);
    const localDateTime = moment();
    // If the event has already passed, return an empty element.
    if (eventDateTime < localDateTime) {
      return <React.Fragment />;
    }

    return (
      <Card bordered={false} style={{ padding: "0px", maxWidth: 400, margin: "10px" }}>
        <Flex justifyContent='space-between'>
          <Flex flexDirection='column'>
            <EventCardTitle>{ title }</EventCardTitle>
            <EventCardDate>{ eventDateTime.format("MMMM Do YYYY, h:mm:ss a") }</EventCardDate>
          </Flex>
          <Button target='_blank' href={url}>Sign Up</Button>
        </Flex>
      </Card>
    );
  }
}

export class EventsCardLoading extends React.Component {
  render () {
    return (
      <Card loading bordered={false} style={{ padding: "0px", maxWidth: 400, margin: "10px" }} />
    );
  }
}

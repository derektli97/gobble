import React from "react";
import { Flex } from "grid-styled";

import EventsCard from "Pages/Events/EventsCard/EventsCard";
import NavBar from "CommonComponents/Navbar/Navbar";
import { Background, EventTitle, EventSubtitle, EventParagraph } from "Pages/Events/EventsStyles";
import SubmitField from "Pages/Landing/HomePage/Content/SubmitField/SubmitField";

class Events extends React.Component {
  // Tamuhack events are stored in a js object.
  state = { events: null, isLoaded: false };

  componentDidMount () {
    // Hit our backend to get all events.
    fetch("https://quack.tamuhack.com/events")
      .then(response => response.json())
      .then(events => this.setState({ events: events.events, isLoaded: true }));
  }

  // Parses an event, and return an EventsCard component.
  parseEventCard (event) {
    return (<EventsCard key={event.name.text} event={event} />);
  }

  // Checks for a valid event.
  isValidEvent (event) {
    const { name: { text } } = event;
    if (text == null || text.length === 0) {
      return false;
    }
    return true;
  }

  render () {
    const { isLoaded } = this.state;
    const { isWebView } = this.props;
    return (
      <Background>
        <NavBar simple='true' />
        <Flex
          flexDirection='row'
          justifyContent='center'
          flexWrap='wrap'
          css={{
            width: "100vw",
            height: "100%",
            minHeight: "100vh",
            overflow: "hidden",
            zIndex: "1"
          }}
        >
          <Flex
            flexDirection='column'
            css={{ paddingTop: "110px" }}
          >
            <Flex
              flexDirection='column'
              css={{ maxWidth: "550px", minWidth: "310px" }}
            >
              <EventTitle {...{ isWebView }} >Events on Campus</EventTitle>
              <EventSubtitle {...{ isWebView }} >Subscribe</EventSubtitle>
              <EventParagraph {...{ isWebView }} >This year, we're upping our workshop game and bringing you MLH Localhost,
                company events, and new swag. Check out all our events here and subscribe so you don't miss out!</EventParagraph>
              <EventParagraph>Email notifications</EventParagraph>
              <SubmitField fontSize='13px' {...{ isWebView }} />
              <EventTitle {...{ isWebView }} >Upcoming</EventTitle>
              { isLoaded
                ? this.state.events
                  .filter(this.isValidEvent)
                  .map(this.parseEventCard)
                : <p style={{ margin: "100px" }}> Loading ...</p>
              }
            </Flex>
          </Flex>
          <img
            alt=''
            src={require("assets/coffee-graphic.png")}
            style={{ width: (isWebView) ? "400px" : "300px", maxWidth: (isWebView) ? "500px" : "300px", height: "650px", marginTop: "110px", marginBottom: "30px" }}
          />
        </Flex>
      </Background>
    );
  }
}

export default Events;

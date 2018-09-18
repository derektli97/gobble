import React from "react";
import { Flex } from "grid-styled";

import EventsCard from "Pages/Events/EventsCard/EventsCard";
import NavBar from "CommonComponents/Navbar/Navbar";
import { Background, EventTitle, EventSubtitle, EventParagraph } from "Pages/Events/EventsStyles";
import SubmitField from "../Landing/HomePage/Content/SubmitField/SubmitField";
import Footer from "CommonComponents/Footer/Footer";

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
    // TODO(all) Add more fields for the events and style the events card.
    const { name } = event;
    return (<EventsCard key={name.text} name={name.text} />);
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
            width: "100%",
            height: "100%",
            overflow: "hidden",
            zIndex: "1"
          }}
        >
          <div style={{ paddingTop: "80px" }}>
            <div style={{ maxWidth: "550px", alignItems: "center" }}>
              <EventTitle {...{ isWebView }} >Events on Campus</EventTitle>
              <EventSubtitle {...{ isWebView }} >Subscribe</EventSubtitle>
              <EventParagraph {...{ isWebView }} >This year, we're upping our workshop game and bringing you MLH Localhost, company events, and new swag. Check out all our events here and subscribe so you don't miss out!</EventParagraph>
              <EventParagraph>Email notifications</EventParagraph>
              <SubmitField fontSize='13px' {...{ isWebView }} />
            </div>
            <div>
              {/* This div is for the event cards */}
              { isLoaded
                ? this.state.events
                  .filter(this.isValidEvent)
                  .map(this.parseEventCard)
                : <p style={{ margin: "100px" }}> Loading ...</p>
              }
            </div>
          </div>
          <img
            alt=''
            src={require("assets/coffee-graphic.png")}
            style={{ width: (isWebView) ? "400px" : "300px", maxWidth: (isWebView) ? "500px" : "300px", height: "650px", marginTop: "70px", marginBottom: "30px" }}
          />

        </Flex>
        <Footer {...{ isWebView }} />
      </Background>
    );
  }
}

export default Events;

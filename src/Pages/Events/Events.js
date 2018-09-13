import React from "react";
import { Flex } from "grid-styled";

import EventsCard from "Pages/Events/EventsCard/EventsCard";
import NavBar from "CommonComponents/Navbar/Navbar";
import { Background } from "Pages/Events/EventsStyles";

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
    return (
      <Background>
        <Flex
          css={{
            position: "relative",
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
            zIndex: "1"
          }}
        >
          <NavBar simple='true' />
          { isLoaded
            ? this.state.events
              .filter(this.isValidEvent)
              .map(this.parseEventCard)
            : <p style={{ margin: "100px" }}> Loading ...</p>
          }
        </Flex>
      </Background>
    );
  }
}

export default Events;

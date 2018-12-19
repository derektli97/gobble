import React from "react";
import { Flex } from "grid-styled";

import { EventsCard, EventsCardLoading } from "Pages/Events/EventsCard/EventsCard";
import NavBar from "CommonComponents/Navbar/Navbar";
import { Background, EventTitle, EventSubtitle, EventParagraph } from "Pages/Events/EventsStyles";
import SubmitField from "Pages/Landing/HomePage/Content/SubmitField/SubmitField";

class Events extends React.Component {
  constructor (props) {
    super(props);
    this.submitLink = "https://tamuhack.typeform.com/to/UpEv1l";
    this.buttonText = "Apply Now";
  }
  // Tamuhack events are stored in a js object.
  state = { events: null, isLoaded: false };

  componentDidMount () {
    // Hit our backend to get all events.
    fetch("https://quack.tamuhack.com/events")
      .then(response => response.json())
      .then(events => this.setState({ events: events.events, isLoaded: true }));
  }

  renderLoadingCard () {
    return (
      <React.Fragment>
        <EventsCardLoading />
      </React.Fragment>
    );
  }

  parseEventCard (event) {
    console.log(event);
    return (<EventsCard key={event.name.text} title={event.name.text} time={event.start.local} url={event.url} />);
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
    const { isWebView } = this.props;
    const { isLoaded } = this.state;
    const submitLink = this.submitLink;
    const buttonText = this.buttonText;
    return (
      <Background>
        <NavBar simple />
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
              <EventParagraph {...{ isWebView }} >
                This year, were upping our workshop game and bringing you MLH Localhost,
                company events, and new swag. Check out all our events here and subscribe
                so you dont miss out!
              </EventParagraph>
              <EventParagraph>Email notifications</EventParagraph>
              <SubmitField fontSize='13px' {...{ isWebView, submitLink, buttonText }} />
              <EventTitle {...{ isWebView }} >Upcoming</EventTitle>
              {isLoaded ? this.state.events
                .filter(this.isValidEvent)
                .map(this.parseEventCard)
                : this.renderLoadingCard()
              }
            </Flex>
          </Flex>
          {isWebView &&
          <img
            alt=''
            src={require("assets/coffee-graphic.png")}
            style={{ width: "300px", maxWidth: "300px", height: "650px", marginTop: "110px", marginBottom: "30px" }}
          />
          }
        </Flex>
      </Background>
    );
  }
}

export default Events;

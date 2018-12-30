import React from "react";
import { Flex } from "grid-styled";

import NavBar from "CommonComponents/Navbar/Navbar";
import { Background, EventTitle, EventParagraph } from "Pages/Events/EventsStyles";
import SubmitField from "Pages/Landing/HomePage/Content/SubmitField/SubmitField";
import VolunteerFAQ from "Pages/Volunteer/VolunteerFAQ/VolunteerFAQ";
import FAQData from "Pages/Volunteer/VolunteerFAQ/VolunteerFAQData.json";

class Volunteer extends React.Component {
  // Tamuhack events are stored in a js object.
  state = { events: null, isLoaded: false };

  render () {
    const { isWebView } = this.props;
    const submitLink = "https://www.signupgenius.com/go/60b0c48abab22a5fa7-tamuhack1";
    const buttonText = "Volunteer Now";
    return (
      <Background>
        <NavBar simple />
        <Flex
          flexDirection='row'
          justifyContent='center'
          flexWrap='wrap'
          css={{
            width: "100vw",
            overflow: "hidden",
            zIndex: "1",
            height: "100%",
            minHeight: "100vh"
          }}
        >
          <Flex
            flexDirection='column'
            alignItems='flex-start'
            css={{ paddingLeft: "14.2vw", width: "100vw", paddingTop: "110px", paddingBottom: "50px" }}
          >
            <Flex
              flexDirection='column'
              css={{ maxWidth: "550px", minWidth: "310px" }}
            >
              <EventTitle {...{ isWebView }} >TAMUhack Volunteering</EventTitle>
              <EventParagraph {...{ isWebView }} style={{ paddingBottom: "30px" }} >
                Help us make TAMUhack a success! Volunteers have played an
                important role in the event every time and this year is no different.
                This is your chance to be an integral part of one of A&M's
                biggest events, with some cool perks on the side.
              </EventParagraph>
            </Flex>
            <SubmitField {...{ isWebView, submitLink, buttonText }} />
          </Flex>
          {
            isWebView &&
            <VolunteerFAQ {...{ isWebView }} faqData={FAQData} />
          }
        </Flex>
      </Background>
    );
  }
}

export default Volunteer;

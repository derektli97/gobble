import React from "react";
import Navbar from "Pages/Live/LiveNavbar/LiveNavbar";
import {
  Background,
  ScheduleContainer,
  DayTitle,
  ScheduleRow,
  StartTab,
  EndTab,
  LabelTab,
  EventTab,
  LocationTab } from "Pages/Live/LiveSchedule/LiveScheduleStyles";
import LiveScheduleJson from "Pages/Live/LiveSchedule/LiveSchedule.json";
class LiveSchedule extends React.Component {
  state = {};

  constructor (props) {
    super(props);
    const { saturday, sunday } = LiveScheduleJson["schedule"];
    this.saturdayRender = saturday["events"].map((event, index) => {
      return (
        <ScheduleRow style={{
          backgroundColor: index % 2 === 0 ? "white" : "#efefef",
          borderBottomLeftRadius: index === saturday["events"].length - 1 ? "27px" : "0px",
          borderBottomRightRadius: index === saturday["events"].length - 1 ? "27px" : "0px" }}>
          <StartTab>
            {event.start}
          </StartTab>
          <EndTab>
            {event.end}
          </EndTab>
          <LabelTab>
            {event.label}
          </LabelTab>
          <EventTab>
            {event.event}
          </EventTab>
          <LocationTab>
            {event.location}
          </LocationTab>
        </ScheduleRow>
      );
    });
    this.sundayRender = sunday["events"].map((event, index) => {
      console.log(sunday["events"].length);
      return (
        <ScheduleRow style={{
          backgroundColor: index % 2 === 0 ? "white" : "#efefef",
          borderBottomLeftRadius: index === sunday["events"].length - 1 ? "20px" : "0px",
          borderBottomRightRadius: index === sunday["events"].length - 1 ? "20px" : "0px",
          width: index === sunday["events"].length - 1 ? "99%" : "100%" }}
        >
          <StartTab>
            {event.start}
          </StartTab>
          <EndTab>
            {event.end}
          </EndTab>
          <LabelTab>
            {event.label}
          </LabelTab>
          <EventTab>
            {event.event}
          </EventTab>
          <LocationTab>
            {event.location}
          </LocationTab>
        </ScheduleRow>
      );
    });
  }

  render () {
    const { isWebView } = this.props;
    const satRender = this.saturdayRender;
    const sunRender = this.sundayRender;
    return (
      <React.Fragment>
        <Navbar {...{ isWebView }} />
        <Background>
          <ScheduleContainer>
            <DayTitle>Saturday</DayTitle>
            {satRender}
          </ScheduleContainer>
          <ScheduleContainer>
            <DayTitle>Sunday</DayTitle>
            {sunRender}
          </ScheduleContainer>
        </Background>
      </React.Fragment>
    );
  }
}

export default LiveSchedule;

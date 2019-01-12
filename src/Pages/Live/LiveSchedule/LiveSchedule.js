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
  Label,
  EventTab,
  LocationTab } from "Pages/Live/LiveSchedule/LiveScheduleStyles";
import LiveScheduleJson from "Pages/Live/LiveSchedule/LiveSchedule.json";
class LiveSchedule extends React.Component {
  state = {};

  constructor (props) {
    super(props);
    const { saturday, sunday } = LiveScheduleJson["schedule"];
    this.saturdayRender = saturday["events"].map((event, index) => {
      let labelColor = "";
      console.log(event.label);
      switch (event.label) {
        case "Food":
          labelColor = "#7ed2e7";
          break;
        case "Event":
          labelColor = "#fea569";
          break;
        case "Workshop":
          labelColor = "#c1d98e";
          break;
        default:
          labelColor = "";
      }
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
            {labelColor !== "" &&
            (
              <Label style={{ backgroundColor: labelColor }}>
                {event.label}
              </Label>
            )
            }
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
      let labelColor = "";
      console.log(event.label);
      switch (event.label) {
        case "Food":
          labelColor = "#7ed2e7";
          break;
        case "Event":
          labelColor = "#fea569";
          break;
        case "Workshop":
          labelColor = "#c1d98e";
          break;
        default:
          labelColor = "";
      }
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
            {labelColor !== "" &&
            (
              <Label style={{ backgroundColor: labelColor }}>
                {event.label}
              </Label>
            )
            }
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
            <ScheduleRow style={{ backgroundColor: "#efefef" }}>
              <StartTab>Start</StartTab>
              <EndTab>
                <span style={{ fontWeight: 600 }}>End</span>
              </EndTab>
              <LabelTab style={{ fontWeight: 600 }}>
                Label
              </LabelTab>
              <EventTab>
                <span style={{ fontWeight: 600 }}>Event</span>
              </EventTab>
              <LocationTab>
                <span style={{ fontWeight: 600 }}>Location</span>
              </LocationTab>
            </ScheduleRow>
            {satRender}
          </ScheduleContainer>
          <ScheduleContainer>
            <DayTitle>Sunday</DayTitle>
            <ScheduleRow style={{ backgroundColor: "#efefef" }}>
              <StartTab>Start</StartTab>
              <EndTab>
                <span style={{ fontWeight: 600 }}>End</span>
              </EndTab>
              <LabelTab style={{ fontWeight: 600 }}>
                Label
              </LabelTab>
              <EventTab>
                <span style={{ fontWeight: 600 }}>Event</span>
              </EventTab>
              <LocationTab>
                <span style={{ fontWeight: 600 }}>Location</span>
              </LocationTab>
            </ScheduleRow>
            {sunRender}
          </ScheduleContainer>
        </Background>
      </React.Fragment>
    );
  }
}

export default LiveSchedule;

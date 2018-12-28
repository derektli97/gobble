import React from "react";
import {
  Background,
  DayContainer,
  ScheduleContainer,
  DayLabel,
  DayRow,
  EventName,
  EventDate } from "./SchedulePageStyles.js";
import ScheduleJson from "./ScheduleJson.json";

class SchedulePage extends React.Component {
  getSchedule (events) {
    return events.map((event) =>
      <DayRow>
        <EventName>{event["name"]}</EventName>
        <EventDate>{event["time"]}</EventDate>
      </DayRow>
    );
  }

  render () {
    var saturday = ScheduleJson["schedule"]["saturday"];
    var sunday = ScheduleJson["schedule"]["sunday"];

    return (
      <Background>
        <ScheduleContainer>
          <DayContainer>
            <DayLabel>{saturday[0]}</DayLabel>
            {this.getSchedule(saturday["events"])}
          </DayContainer>
          <DayContainer>
            <DayLabel>{sunday[0]}</DayLabel>
            {this.getSchedule(sunday["events"])}
          </DayContainer>
        </ScheduleContainer>
      </Background>
    );
  }
}

export default SchedulePage;

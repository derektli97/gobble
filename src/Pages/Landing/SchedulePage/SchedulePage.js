import React from "react";
import {
  Background,
  DayContainer,
  ScheduleContainer,
  DayLabel,
  DayRow,
  EventName,
  EventDate,
  ScheduleTitle } from "./SchedulePageStyles.js";
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
        <ScheduleTitle>
          Schedule
        </ScheduleTitle>
        <hr style={{ width: "180px", border: "solid 2px #3F688D" }} />
        <ScheduleContainer>
          <DayContainer>
            <DayLabel>{saturday["name"]}</DayLabel>
            {this.getSchedule(saturday["events"])}
          </DayContainer>
          <DayContainer>
            <DayLabel>{sunday["name"]}</DayLabel>
            {this.getSchedule(sunday["events"])}
          </DayContainer>
        </ScheduleContainer>
      </Background>
    );
  }
}

export default SchedulePage;

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
  state = {};

  constructor (props) {
    super(props);
    this.saturdayInfo = Object.entries(ScheduleJson)[0];
    this.sundayInfo = Object.entries(ScheduleJson)[1];
    var satItinerary = Object.entries(this.saturdayInfo[1]);
    var sunItinerary = Object.entries(this.sundayInfo[1]);

    this.satComp = satItinerary.map((item) =>
      <DayRow>
        <EventName>{item[0]}</EventName>
        <EventDate>{item[1]}</EventDate>
      </DayRow>
    );

    this.sunComp = sunItinerary.map((item) =>
      <DayRow>
        <EventName>{item[0]}</EventName>
        <EventDate>{item[1]}</EventDate>
      </DayRow>
    );
  }
  render () {
    var saturday = this.saturdayInfo;
    var sunday = this.sundayInfo;
    const satItin = this.satComp;
    const sunItin = this.sunComp;
    return (
      <Background>
        <ScheduleContainer>
          <DayContainer>
            <DayLabel>{saturday[0]}</DayLabel>
            {satItin}
          </DayContainer>
          <DayContainer>
            <DayLabel>{sunday[0]}</DayLabel>
            {sunItin}
          </DayContainer>
        </ScheduleContainer>
      </Background>
    );
  }
}

export default SchedulePage;

import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  minHeight: 100vh;
  margin: 0px;
  padding-top: 10vh;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const ScheduleContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;

export const DayContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
  align-items: center;
`;

export const DayLabel = styled.div`
  display: flex;
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 20px;
  margin-top: 25px;
`;

export const DayRow = styled.div`
  display: flex;
  width: 85%;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 15px;
  border-bottom: 1px solid #bbbbbb;
`;

export const EventName = styled.div`
  display: flex;
  font-size: 20px;
`;

export const EventDate = styled.div`
  display: flex;
  font-size: 20px;
`;

export const ScheduleTitle = styled.div`
  font-size: 40px;
  font-weight: 600;
  color: #3F688D;
  margin: 40px;
  margin-bottom: 0px;
`;

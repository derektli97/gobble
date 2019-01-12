import styled from "styled-components";

export const Background = styled.div`
  background: white;
  margin-top: 10%;
  margin-bottom: 5%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ScheduleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
  height: 100%;
  align-items: center;
  border-radius: 30px;
  margin-bottom: 20px;
  box-shadow: 0px 0px 10px #888888;
`;

export const DayTitle = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: #E8678B;
  font-size: 20px
  border-top-left-radius: 31px;
  border-top-right-radius: 31px;
  font-weight: 600;
`;

export const ScheduleRow = styled.div`
  display: flex;
  width: 100%;
  minHeight: 30px;
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 15px;
  align-items: center;
  justify-content: space-evenly;
  &:hover {
   font-weight: 600;
   background-color: #FFF8F9;
  }
`;

export const StartTab = styled.div`
  display: flex;
  font-weight: 600;
  align-items: center;
  width: 10%;
`;

export const EndTab = styled.div`
  display: flex;
  align-items: center;
  width: 10%;
`;

export const LabelTab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
`;

export const Label = styled.div`
  display: flex;
  font-weight: 400;
  border-radius: 10px;
  background-color: #7ed2e7;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 100%
`;

export const EventTab = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;

export const LocationTab = styled.div`
  display: flex;
  align-items: center;
  width: 10%;
`;

export const TitleTab = styled.div`
  font-weight: 600;
`;

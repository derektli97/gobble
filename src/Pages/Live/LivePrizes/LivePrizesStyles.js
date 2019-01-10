import styled from "styled-components";

export const Background = styled.div`
  background: linear-gradient(0deg, #F9ECEE 0%, #F9DFE5 36.34%, #F9DEE4 38.4%, #E2DCEB 60.31%, #BAD9F7 99.44%);
  height: 100%;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 10%;
  align-items: center;
`;

export const PrizeRow = styled.div`
  display: flex;
  width: 70vw;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
  border: 2px solid black;
  margin-bottom: 30px;
`;

export const TAMUPrizeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 280px;
  box-shadow: 0px 0px 10px #888888;
  border-radius: 10px;
  border: 2px solid red;
`;

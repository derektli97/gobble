import styled from "styled-components";

export const Background = styled.div`
  background: linear-gradient(0deg, #F9ECEE 0%, #F9DFE5 36.34%, #F9DEE4 38.4%, #E2DCEB 60.31%, #BAD9F7 99.44%);
  width: 100%;
  min-height: 100vh;
  padding-top: 10%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  border: 2px solid black;
`;

export const BoxRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80vw;
  border: 2px solid black;
  justify-content: space-evenly;
`;

export const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  box-shadow: 0px 0px 10px #888888;
  border-radius: 10px;
`;

export const DetailTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #E8678B;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  height: 35px;
  font-size: 20px;
`;

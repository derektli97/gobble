import styled from "styled-components";

export const Background = styled.div`
  background: linear-gradient(0deg, #F9ECEE 0%, #F9DFE5 36.34%, #F9DEE4 38.4%, #E2DCEB 60.31%, #BAD9F7 99.44%);
  width: 100%;
  min-height: 100vh;
  padding-top: ${props => (props.isWebView === true) ? "10%" : "20%"};
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export const BoxRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${props => (props.isWebView) ? "row" : "column"};
  width: ${props => (props.isWebView) ? "60vw" : "80vw"};
  justify-content: ${props => (props.isWebView) ? "space-between" : "center"};
`;

export const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => (props.isWebView === true) ? "450px" : "100%"};
  box-shadow: 0px 0px 10px #888888;
  border-radius: 10px;
  margin-bottom: 40px;
`;

export const DetailTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #E8678B;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  height: 60px;
  font-size: 20px;
  color: white;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  min-height: 150px;
  height: 100%;
  padding: 25px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin-bottom: 25px;
`;

export const Label = styled.div`
  display: flex;
  background-color: #e8e8e8;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  padding: 10px 15px 10px 15px;
  border-radius: 10px;
`;

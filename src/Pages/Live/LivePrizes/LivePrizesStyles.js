import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  background: linear-gradient(0deg, #F9ECEE 0%, #F9DFE5 36.34%, #F9DEE4 38.4%, #E2DCEB 60.31%, #BAD9F7 99.44%);
  height: 100%;
  min-height: 100vh;
  width: 100vw;
  flex-direction: column;
  padding-top: ${props => (props.isWebView) ? "5%" : "10%"};
  align-items: center;
  overflow: auto;
`;

export const TamuPrizeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 70vw;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 30px;
`;

export const SponsorPrizeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80vw;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 30px;
`;

export const TAMUPrizeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 300px;
  margin-top: 35px;
  box-shadow: 0px 0px 10px #888888;
  border-radius: 10px;
`;

export const SponsorPrizeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  min-height: 600px;
  height: 100%;
  margin-top: 35px;
  box-shadow: 0px 0px 10px #888888;
  border-radius: 10px;
`;

export const PrizeTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;
  font-size: 17px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  color: white;
`;

export const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-evenly;
`;

export const TextTab = styled.div`
  display: flex;
  width: 90%;
`;

export const SponsorTextTab = styled.div`
  display: flex;
  width: 90%;
  padding-top: 20px;
  padding-bottom: 20px;
`;

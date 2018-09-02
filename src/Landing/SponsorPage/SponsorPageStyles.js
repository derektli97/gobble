import styled from "styled-components";

export const Background = styled.div`
  background: white;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
`;

export const SponsorContainer = styled.div`
  width: 100%;
  position: relative;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
`;

export const SponsorRow = styled.div`
  width: 100%;
  text-align: middle;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: ${props => (props.isWebView) ? "40px" : "-30px"};
  padding-top: 15px;
  padding-bottom: ${props => (props.isWebView === true) ? "50px" : "15px"};
  flex-wrap: wrap;
`;

export const SponsorLogo = styled.img`
  width: ${props => (props.isWebView) ? "200px" : "80px"};
  text-align: middle;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SponsorLogoBig = styled.img`
  width: ${props => (props.isWebView) ? "350px" : "140px"};
  text-align: middle;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SponsorTitleRow = styled.div`
  width: 100%;
  text-align: middle;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 0px;
  margin-bottom: ${props => (props.isWebView) ? "60px" : "10px"};
  margin-top: ${props => (props.isWebView) ? "40px" : "20px"};
`;

export const SponsorTitle = styled.div`
  font-size: ${props => (props.isWebView) ? "40px" : "20px"};
  font-weight: bold;
  color: black;
  margin: ${props => (props.isWebView) ? "40px" : "0px"};
  margin-bottom: 0px;
`;

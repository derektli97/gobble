import styled from "styled-components";

export const Background = styled.div`
  background: linear-gradient(#F9ECEE 0%, #FFFFFF 100%);
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const AboutTitle = styled.p`
  margin: 10px;
  display: flex;
  font-weight: 300;
  alignItems: center;
  font-size: ${props => (props.isWebView === true) ? "35px" : "30px"};
  font-weight: bold;
  padding-bottom: 20px;
`;

export const AboutSubtitle = styled.p`
  margin: 10px;
  display: flex;
  font-weight: 300;
  alignItems: center;
  max-width: 400px;
  font-size: ${props => (props.isWebView === true) ? "25px" : "20px"};
  font-weight: bold;
  padding-bottom: 20px;
  line-height: 1.25;
`;

export const AboutParagraph = styled.p`
  margin: 10px;
  display: flex;
  font-weight: 300;
  alignItems: center;
  max-width: 450px;
  font-size: ${props => (props.isWebView === true) ? "16px" : "13px"};
  padding-bottom: 10px;
`;

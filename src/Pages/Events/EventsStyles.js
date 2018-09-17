import styled from "styled-components";

export const Background = styled.div`
  background: linear-gradient(0deg, #F9ECEE 0%, #F9DFE5 36.34%, #F9DEE4 38.4%, #E2DCEB 60.31%, #BAD9F7 99.44%);
  height: 100%;
  width: 100%;
  margin: 0px;
  padding: 0px;
`;

export const EventTitle = styled.p`
  margin: 10px;
  display: flex;
  alignItems: center;
  font-size: ${props => (props.isWebView === true) ? "35px" : "30px"};
  font-weight: 600;
  padding-bottom: 20px;
`;

export const EventSubtitle = styled.p`
  margin: 10px;
  display: flex;
  alignItems: center;
  max-width: 400px;
  font-size: ${props => (props.isWebView === true) ? "25px" : "20px"};
  font-weight: 600;
<<<<<<< HEAD
  padding-bottom: 5px;
=======
  padding-bottom: 20px;
>>>>>>> 5623110... Added many things to event page
  line-height: 1.25;
`;

export const EventParagraph = styled.p`
  margin: 10px;
  display: flex;
  font-weight: regular;
  alignItems: center;
<<<<<<< HEAD
  max-width: 430px;
  font-size: ${props => (props.isWebView === true) ? "16px" : "13px"};
  padding-bottom: 7px;
=======
  max-width: 450px;
  font-size: ${props => (props.isWebView === true) ? "16px" : "13px"};
  padding-bottom: 10px;
>>>>>>> 5623110... Added many things to event page
`;

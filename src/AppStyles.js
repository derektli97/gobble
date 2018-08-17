import styled, { keyframes } from "styled-components";

const moveCloud = keyframes`
  0%{
    transform: translate(-50vw, 0)
  }
  100%{
    transform: translate(100vw, 0)
  }
`;

export const Background = styled.div`
  background: linear-gradient(0deg, #F9ECEE 0%, #F9DFE5 36.34%, #F9DEE4 38.4%, #E2DCEB 60.31%, #BAD9F7 99.44%, #FFFFFF 100%);
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const Subtitle = styled.p`
  margin: 10px;
  margin-left: 0px;
  display: flex;
  font-weight: 300;
  alignItems: center;
  font-size: ${props => (props.isWebView === true) ? "18px" : "13px"};
`;

export const StaticCloud = styled.img`
  display: flex;
  position: fixed;
  zIndex: 0;
`;

export const Cloud = styled.img`
  display: flex;
  position: fixed;
  zIndex: 0;
  left: 0;
  animation-name: ${moveCloud};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

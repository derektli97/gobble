import styled, { keyframes } from "styled-components";

export const Subtitle = styled.p`
  margin: 10px;
  display: flex;
  font-weight: 300;
  alignItems: center;
  font-size: ${props => (props.isWebView === true) ? "18px" : "13px"};
`;

export const Icon = styled.img`
  height: 3vh;
  width: 3vh;
`;

const moveJayRight = keyframes`
  100%{
    transform: translate(-10vw, 0)
  }
  0%{
    transform: translate(100vw, 0)
  }
`;

export const JayMoveRight = styled.img`
  display: flex;
  position: absolute;
  zindex: 0;
  animation-name: ${moveJayRight};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

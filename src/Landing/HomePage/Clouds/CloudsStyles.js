import styled, { keyframes } from "styled-components";

const moveCloudRight = keyframes`
  0%{
    transform: translate(-10vw, 0)
  }
  100%{
    transform: translate(100vw, 0)
  }
`;

const moveCloudLeft = keyframes`
  100%{
    transform: translate(-10vw, 0)
  }
  0%{
    transform: translate(100vw, 0)
  }
`;

export const StaticCloud = styled.img`
  display: flex;
  position: absolute;
  zindex: 0;
`;

export const CloudMoveRight = styled.img`
  display: flex;
  position: absolute;
  zindex: 0;
  left: 0;
  animation-name: ${moveCloudRight};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

export const CloudMoveLeft = styled.img`
  display: flex;
  position: absolute;
  zindex: 0;
  animation-name: ${moveCloudLeft};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

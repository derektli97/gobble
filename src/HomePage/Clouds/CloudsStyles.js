import styled, { keyframes } from "styled-components";

const moveCloud = keyframes`
  0%{
    transform: translate(-50vw, 0)
  }
  100%{
    transform: translate(100vw, 0)
  }
`;

export const StaticCloud = styled.img`
  display: flex;
  position: fixed;
  zindex: 0;
`;

export const Cloud = styled.img`
  display: flex;
  position: fixed;
  zindex: 0;
  left: 0;
  animation-name: ${moveCloud};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

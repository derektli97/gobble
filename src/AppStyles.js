import styled, { keyframes } from "styled-components";

const movePage = keyframes`
  0%{
    transform: translate(-100vw, 0)
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
  font-size: 17px;
  font-weight: 300;
`;

export const Cloud = styled.img`
  display: flex;
  position: fixed;
  zIndex: 0;
  left: 0;
  animation-name: ${movePage};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

import styled from "styled-components";

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

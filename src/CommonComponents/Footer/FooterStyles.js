import styled from "styled-components";

export const FooterBar = styled.footer`
    position: "absolute";
    height: ${props => (props.isWebView) ? "60px" : "38px"};
    backgroundColor: "#FFF8F9";
    alignItems: "flex-start";
    overflow: "hidden";
    justifyContent: "space-between";
    paddingTop: ${props => (props.isWebView) ? "20px" : "5px"};
`;

export const FooterIcon = styled.img`
  height: ${props => (props.isWebView) ? "3vh" : "2vh"};
`;

export const Copyright = styled.p`
  font-size: ${props => (props.isWebView) ? "14px" : "9px"};
  padding-Top: ${props => (props.isWebView) ? "0px" : "9px"};
  padding-Right: ${props => (props.isWebView) ? "100px" : "30px"}}
`;

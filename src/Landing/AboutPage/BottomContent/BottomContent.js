import React from "react";
import { Flex } from "grid-styled";
import { AboutSubtitle, AboutParagraph } from "../AboutPageStyles.js";

class BottomContent extends React.Component {
  render () {
    const { isWebView } = this.props;
    return (
      <Flex
        flexDirection='row'
        justifyContent='space-evenly'
        flexWrap='wrap-reverse'
        css={{
          overflow: "hidden",
          paddingBottom: "70px"
        }}
      >
        <img
          alt=''
          src={require("../../../assets/bitmoji-graphic.png")}
          style={{ height: "23vw" }}
        />
        <div>
          <AboutSubtitle {...{ isWebView }} >Our team</AboutSubtitle>
          <AboutParagraph {...{ isWebView }} >The TAMUhack team consists of 16 members all dedicated to helping you turn your ideas into reality. We're a diverse group of computer science, computer engineering, electrical engineering, and mechanical engineering majors who...</AboutParagraph>
        </div>
      </Flex>
    );
  }
}

export default BottomContent;

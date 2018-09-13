import React from "react";
import { Flex } from "grid-styled";

import { AboutSubtitle, AboutParagraph } from "Pages/Landing/AboutPage/AboutPageStyles";

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
          src={require("assets/bitmoji-graphic.png")}
          style={{ height: (isWebView) ? "30vw" : "55vw" }}
        />
        <div>
          <AboutSubtitle {...{ isWebView }} >Our team</AboutSubtitle>
          <AboutParagraph {...{ isWebView }} >The TAMUhack team consists of 16 members all dedicated to helping you turn your ideas into reality. We're a diverse group of computer science, computer engineering, electrical engineering, and mechanical engineering majors who brought our passions together to bring you a space for creative expression and collaboration!</AboutParagraph>
        </div>
      </Flex>
    );
  }
}

export default BottomContent;

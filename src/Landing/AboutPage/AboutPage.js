import React from "react";
import { Flex } from "grid-styled";
import { Background } from "./AboutPageStyles.js";
import TopContent from "./TopContent/TopContent.js";
import BottomContent from "./BottomContent/BottomContent.js";

class AboutPage extends React.Component {
  render () {
    const { isWebView } = this.props;

    return (
      <Background>
        <Flex
          flexDirection='column'
          justifyContent={isWebView ? "initial" : "center"}
          css={{
            width: isWebView ? "100vw" : "80vw",
            height: "100%",
            minHeight: "100vh",
            overflow: "hidden",
            margin: "auto"
          }}
        >
          <TopContent {...{ isWebView }} />
          <BottomContent {...{ isWebView }} />
        </Flex>
      </Background>
    );
  }
}

export default AboutPage;

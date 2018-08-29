import React from "react";
import { Flex } from "grid-styled";

import { Background } from "./SponsorPageStyles.js";

class SponsorPage extends React.Component {
  render () {
    const { isWebView } = this.props;

    return (
      <Background>
        <Flex
          justifyContent={isWebView ? "initial" : "center"}
          css={{
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
            zIndex: "2"
          }}
        >
          hello
        </Flex>
      </Background>
    );
  }
}

export default SponsorPage;

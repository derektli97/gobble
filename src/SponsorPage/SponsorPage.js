import React from "react";
import { Flex } from "grid-styled";

class SponsorPage extends React.Component {
  render () {
    const { isWebView } = this.props;

    return (
      <Flex
        justifyContent={isWebView ? "initial" : "center"}
        css={{
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          zIndex: "-10",
          background: "black"
        }}
      >
          hello
      </Flex>
    );
  }
}

export default SponsorPage;

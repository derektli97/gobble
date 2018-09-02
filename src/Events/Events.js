import React from "react";
import { Flex } from "grid-styled";

class Events extends React.Component {
  render () {
    const { isWebView } = this.props;

    return (
      <Flex
        justifyContent={isWebView ? "initial" : "center"}
        css={{
          width: "100vw",
          height: "100vh",
          overflow: "hidden"
        }}
      >
          test page
      </Flex>
    );
  }
}

export default Events;

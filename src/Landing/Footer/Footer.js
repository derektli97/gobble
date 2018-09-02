import React from "react";
import { Flex } from "grid-styled";

class Footer extends React.Component {
  render () {
    const { isWebView } = this.props;

    return (
      <Flex
        justifyContent={isWebView ? "initial" : "center"}
        css={{
          width: "100vw",
          height: "5px"
        }}
      >
      hello
      </Flex>
    );
  }
}

export default Footer;

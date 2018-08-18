import React from "react";
import { Flex } from "grid-styled";

import { Background } from "./HomePageStyles.js";
import Clouds from "./Clouds/Clouds.js";
import Content from "./Content/Content.js";
import Building from "./Building/Building.js";

class HomePage extends React.Component {
  render() {
    const { isWebView } = this.props;

    return (
      <Background>
        <Flex
          css={{
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
            zIndex: "2"
          }}
        >
          <Content />
          <Building {...{ isWebView }} />
          <Clouds {...{ isWebView }} />
        </Flex>
      </Background>
    );
  }
}

export default HomePage;

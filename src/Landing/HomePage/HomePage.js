import React from "react";
import { Flex } from "grid-styled";
import { Background } from "./HomePageStyles.js";
import Clouds from "./Clouds/Clouds.js";
import Content from "./Content/Content.js";
import Building from "./Building/Building.js";
import NavBar from "./Navbar/Navbar.js";

class HomePage extends React.Component {
  render () {
    const { isWebView } = this.props;
    return (
      <Background>
        <NavBar {...{ isWebView }} />
        <Flex
          justifyContent={isWebView ? "initial" : "center"}
          css={{
            position: "relative",
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
            zIndex: "1"
          }}
        >
          <Content {...{ isWebView }} />
          <Building {...{ isWebView }} />
          <Clouds {...{ isWebView }} />
        </Flex>
      </Background>
    );
  }
}

export default HomePage;

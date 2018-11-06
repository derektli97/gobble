import React from "react";
import { Flex } from "grid-styled";
import { Background } from "Pages/Landing/HomePage/HomePageStyles";
import Clouds from "Pages/Landing/HomePage/Clouds/Clouds";
import Content from "Pages/Landing/HomePage/Content/Content";
import Building from "Pages/Landing/HomePage/Building/Building";
import NavBar from "CommonComponents/Navbar/Navbar";

class HomePage extends React.Component {
  state = { open: false };

  constructor (props) {
    super(props);
    this.openForm = this.openForm.bind(this);

    this.embed = null;
    this.setEmbedRef = element => {
      this.embed = element;
    };
  }

  openForm () {
    console.log("Opened button");
    this.embed.typeform.open();
  }
  render () {
    const { isWebView } = this.props;
    return (
      <Background>
        <NavBar {...{ isWebView }} simple={false} />
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

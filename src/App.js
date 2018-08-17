import React from "react";
import { hot } from "react-hot-loader";
import { Flex } from "grid-styled";

import "antd/dist/antd.css";
import SubmitField from "./SubmitField.js";
import { Background, Subtitle, Cloud, StaticCloud } from "./AppStyles.js";
import "./app.css";

const mobileThreshold = 900;

/*
  cloud1 refers to Cloud or StaticCloud Element that uses /assets/cloud_01.svg
  cloud2 refers to Cloud or StaticCLoud Element that uses /assets/cloud_02.svg
  etc...
*/

const styles = {
  webView: {
    cloud2: {
      height: "4vh"
    },
    cloud4: {
      height: "3vh"
    },
    infoAlignment: "initial",
    logoSize: "65px",
    inputWidth: "100%"
  },
  mobileView: {
    cloud2: {
      height: "6vh"
    },
    cloud4: {
      height: "5vh"
    },
    infoAlignment: "center",
    logoSize: "50px",
    inputWidth: "200px"
  }
};

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render(){

    const isWebView = this.state.width > mobileThreshold;
    const stylesObj = isWebView ? styles.webView : styles.mobileView;
    const { cloud2, cloud4, infoAlignment, logoSize, inputWidth } = stylesObj;

    return(
      <Background>
        <Flex
          css={{width: "100vw", height: "100vh", overflow: "hidden", zIndex: "2"}}
          justifyContent={infoAlignment}
        >
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems={infoAlignment}
            css={{ padding: "20px",
              zIndex: "2",
              minWidth: "400px",
              paddingLeft: "8vw"
            }}
          >
            <Flex>
              <img
                alt=""
                src={require("./assets/tamuhack_logo_col.svg")}
                style={{ height: logoSize, marginBottom: "20px"}}
              />
            </Flex>
            <Subtitle isWebView={isWebView} style={{ paddingBottom: "5vh" }}>January 26-27, 2019 • Texas A&M University</Subtitle>
            <Subtitle isWebView={isWebView} >Registration opens October 24th, 2018</Subtitle>
            <SubmitField fontSize="13px" width={inputWidth} />
            <Subtitle isWebView={isWebView} style={{ paddingTop: "3vh"}}>
              Interested in{" "}
              <a href="mailto:officialtamuhack@gmail.com">&nbsp;sponsoring</a>?
            </Subtitle>
          </Flex>

          { isWebView &&
              <Flex
                justifyContent="flex-end"
                alignItems="flex-end"
                css={{
                  position: "absolute",
                  height: "100vh",
                  width: "100vw",
                  zIndex: "1"
                }}
              >
                <img
                  alt=""
                  src={require("./assets/cut_academic_building.svg")}
                  style={{maxHeight: "650px", height: "50vw"}}
                />
              </Flex>
          }

          <StaticCloud
            alt=""
            src={require("./assets/cloud_03.svg")}
            style={{  top: "20vh",
                      left: "-7vw",
                      height: "11vh"}}
          />

          <StaticCloud
            alt=""
            src={require("./assets/cloud_01.svg")}
            style={{  top: "80vh",
                      height: "20vh"}}
          />

          <Cloud
            alt=""
            src={require("./assets/cloud_02.svg")}
            style={{ top: "47vh",
                     animationDuration: "25s",
                     height: cloud2.height}}
          />

          <Cloud
            alt=""
            src={require("./assets/cloud_04.svg")}
            style={{ top: "10vh",
                     animationDuration: "41s",
                     height: cloud4.height}}
          />

        </Flex>
      </Background>
    );
  }
}

export default hot(module)(App);

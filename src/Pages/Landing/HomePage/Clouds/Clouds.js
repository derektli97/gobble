import React from "react";

import { CloudMoveLeft, CloudMoveRight, StaticCloud } from "Pages/Landing/HomePage/Clouds/CloudsStyles";

class Clouds extends React.Component {
  render () {
    const { isWebView } = this.props;
    const cloudTwoHeight = isWebView ? "4vh" : "6vh";
    const cloudFourHeight = isWebView ? "3vh" : "5vh";

    return (
      <React.Fragment>
        <StaticCloud
          alt=''
          src={require("assets/cloud_03.svg")}
          style={{
            top: "20vh",
            left: "-7vw",
            height: "11vh"
          }}
        />
        <StaticCloud
          alt=''
          src={require("assets/cloud_01.svg")}
          style={{
            top: "80vh",
            height: "20vh"
          }}
        />
        <CloudMoveRight
          alt=''
          src={require("assets/cloud_02.svg")}
          style={{
            top: "47vh",
            animationDuration: "60s",
            height: cloudTwoHeight
          }}
        />
        <CloudMoveLeft
          alt=''
          src={require("assets/cloud_04.svg")}
          style={{
            top: "10vh",
            animationDuration: "40s",
            height: cloudFourHeight
          }}
        />
      </React.Fragment>
    );
  }
}

export default Clouds;

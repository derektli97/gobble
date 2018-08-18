import React from "react";
import { Flex } from "grid-styled";

import { Subtitle } from "./ContentStyles.js";
import SubmitField from "./SubmitField/SubmitField.js";

class Content extends React.Component {
  render() {
    const { isWebView } = this.props;

    return (
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems={isWebView ? "initial" : "center"}
        css={{
          padding: "20px",
          zIndex: "2",
          minWidth: "400px",
          paddingLeft: "8vw"
        }}
      >
        <Flex>
          <img
            alt=""
            src={require("../../assets/tamuhack_logo_col.svg")}
            style={{
              height: isWebView ? "65px" : "50px",
              marginBottom: "20px"
            }}
          />
        </Flex>
        <Subtitle {...{ isWebView }} style={{ paddingBottom: "2vh" }}>
          January 26-27, 2019 • Texas A&M University
        </Subtitle>
        <Subtitle {...{ isWebView }}>
          Registration opens October 24th, 2018
        </Subtitle>
        <SubmitField fontSize="13px" {...{ isWebView }} />
        <Subtitle {...{ isWebView }} style={{ paddingTop: "3vh" }}>
          Interested in{" "}
          <a href="mailto:officialtamuhack@gmail.com">&nbsp;sponsoring</a>?
        </Subtitle>
      </Flex>
    );
  }
}

export default Content;

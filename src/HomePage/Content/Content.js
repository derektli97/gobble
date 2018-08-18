import React from "react";
import { Flex } from "grid-styled";

import { Subtitle } from "./ContentStyles.js";
import SubmitField from "./SubmitField/SubmitField.js";

class Content extends React.Component {
  render() {
    return (
      <Flex
        flexDirection="column"
        justifyContent="center"
        css={{
          padding: "20px",
          zIndex: "2",
          minWidth: "400px",
          paddingLeft: "5vw"
        }}
      >
        <Flex>
          <img
            alt=""
            src={require("../../assets/tamuhack_logo_col.svg")}
            style={{ height: "53px", marginBottom: "20px" }}
          />
        </Flex>
        <Subtitle style={{ paddingBottom: "2vh" }}>
          January 26-27, 2019 • Texas A&M University
        </Subtitle>
        <Subtitle>Registration opens October 24th, 2018</Subtitle>
        <SubmitField fontSize="13px" width="200px" />
        <Subtitle style={{ paddingTop: "3vh" }}>
          Interested in{" "}
          <a href="mailto:officialtamuhack@gmail.com">&nbsp;sponsoring</a>?
        </Subtitle>
      </Flex>
    );
  }
}

export default Content;

import React from "react";
import { hot } from "react-hot-loader";
import { Flex } from "grid-styled";

import "antd/dist/antd.css";
import SubmitField from "./SubmitField.js";
import { Background, Subtitle } from "./AppStyles.js";
import "./app.css";

const App = () => (
  <Background>
    <Flex
      css={{ width: "100vw", height: "100vh", overflow: "hidden" }}
    >
      <Flex
        flexDirection="column"
        justifyContent="center"
        css={{ padding: "20px",
          zIndex: "100",
          minWidth: "400px"
        }}
      >
        <Flex>
          <img
            alt=""
            src={require("./assets/tamuhack_logo_col.svg")}
            style={{ height: "50px" }}
          />
        </Flex>
        <Subtitle>January 26-27, 2019 • Texas A&M University</Subtitle>
        <Subtitle>Registration opens October 24th, 2018</Subtitle>
        <SubmitField />
        <Subtitle>
          Interested in{" "}
          <a href="mailto:sponsor@tamuhack.com">&nbsp;sponsoring</a>?
        </Subtitle>
      </Flex>
      <Flex
        justifyContent="flex-end"
        alignItems="flex-end"
        css={{  
          position: "absolute",
          height: "100vh",
          width: "100vw",
          zIndex: "1",
          paddingLeft: "350px",
        }}
      >
        <img
          alt=""
          src={require("./assets/academic_building.svg")}
          style={{ minHeight: "300px", maxHeight: "600px", height: "60vw"}}
        />
      </Flex>
    </Flex>
  </Background>
);

export default hot(module)(App);

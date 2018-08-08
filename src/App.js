import React from "react";
import { hot } from "react-hot-loader";
import { Flex } from "grid-styled";

import "antd/dist/antd.css";
import SubmitField from "./SubmitField.js";
import { Background, Title, Subtitle } from "./AppStyles.js";
import "./app.css";

const App = () => (
  <Background>
    <Flex css={{ width: "100vw", height: "100vh" }}>
      <Flex
        flexDirection="column"
        justifyContent="center"
        css={{ padding: "20px" }}
      >
        <Title>
          <img
            alt=""
            src={require("./assets/tamuhack_logo_col.svg")}
            style={{ height: "50px" }}
          />
        </Title>
        <Subtitle>January 26-27, 2019 • Texas A&M University</Subtitle>
        <Subtitle>Registration opens October 24th, 2018</Subtitle>
        <SubmitField />
        <Subtitle>
          Interested in{" "}
          <a href="mailto:officialtamuhack@gmail.com">&nbsp;sponsoring</a>?
        </Subtitle>
      </Flex>
    </Flex>
  </Background>
);

export default hot(module)(App);

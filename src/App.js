import React from "react";
import { hot } from "react-hot-loader";
import { Flex } from "grid-styled";

import "antd/dist/antd.css";
import SubmitField from "./SubmitField.js";
import { Background, Subtitle, Cloud } from "./AppStyles.js";
import "./app.css";

class App extends React.Component{

  render(){
    return(
      <Background>

        <Flex
          css={{width: "100vw", height: "100vh", overflow: "hidden", zIndex: "2" }}
        >
          <Flex
            flexDirection="column"
            justifyContent="center"
            css={{ padding: "20px",
              zIndex: "2",
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
              <a href="mailto:officialtamuhack@gmail.com">&nbsp;sponsoring</a>?
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

          <div css={{overflow: "hidden"}}>
            <Cloud
              alt=""
              src={require("./assets/cloud_01.svg")}
              style={{  top: "15vh",
                        animationDuration: "19s",
                        height: "11vh"}}
            />

            <Cloud
              alt=""
              src={require("./assets/cloud_02.svg")}
              style={{ top: "50vh",
                       animationDuration: "29s",
                       height: "4vh"}}
            />

            <Cloud
              alt=""
              src={require("./assets/cloud_03.svg")}
              style={{  top: "85vh",
                        animationDuration: "13s",
                        height: "15vh"}}
            />
          </div>

        </Flex>
      </Background>
    );
  }
}

export default hot(module)(App);

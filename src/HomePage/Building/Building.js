import React from "react";
import { Flex } from "grid-styled";

class Building extends React.Component {
  state = { fun: false };

  imgClick() {
    this.setState({ fun: true });
  }

  render() {
    const { isWebView } = this.props;
    return (
      <React.Fragment>
        {this.state.fun && (
          <Flex css={{ height: "200px", position: "relative", zIndex: "2" }}>
            <img alt="" src={require("../../assets/goodmorning.svg")} />
          </Flex>
        )}
        {isWebView && (
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
              src={require("../../assets/cut_academic_building.svg")}
              style={{ maxHeight: "650px", height: "50vw" }}
              onClick={() => this.imgClick()}
            />
          </Flex>
        )}
      </React.Fragment>
    );
  }
}

export default Building;

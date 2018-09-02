import React from "react";
import { Flex } from "grid-styled";

class Building extends React.Component {
  render () {
    const { isWebView } = this.props;
    return (
      <React.Fragment>
        {isWebView && (
          <Flex
            justifyContent='flex-end'
            alignItems='flex-end'
            css={{
              position: "absolute",
              height: "100vh",
              width: "100vw",
              zIndex: "1"
            }}
          >
            <img
              alt=''
              src={require("../../../assets/cut_academic_building.svg")}
              style={{ maxHeight: "900px", height: "40vw" }}
            />
          </Flex>
        )}
      </React.Fragment>
    );
  }
}

export default Building;

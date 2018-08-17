import React from "react";
import { Flex } from "grid-styled";
import { Input, Button } from "antd";
import { Margin } from "./SubmitFieldStyles.js";

const SubmitField = (props) => (
  <Margin>
    <Flex flexDirection="row">
      <Input style={{fontSize: props.fontSize, width: props.width, marginRight: "10px"}} placeholder="Sign up for email updates!" />
      <Button
        style={{ backgroundColor: "#FF7C93", borderColor: "#FF7C93" }}
        type="primary"
      >
        Submit
      </Button>
    </Flex>
  </Margin>
);

export default SubmitField;

import React from "react";
import { Flex } from "grid-styled";
import { Input, Button } from "antd";
import { Margin } from "./SubmitFieldStyles.js";

const SubmitField = () => (
  <Margin>
    <Flex flexDirection="row">
      <Input placeholder="Sign up for email updates!" />
      <Button type="primary">Submit</Button>
    </Flex>
  </Margin>
);

export default SubmitField;

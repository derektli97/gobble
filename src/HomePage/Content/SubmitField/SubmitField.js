import React from "react";
import { Form, Input, Button } from "antd";

const FormItem = Form.Item;

class SubmitField extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { isWebView, fontSize } = this.props;

    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <FormItem>
          {getFieldDecorator("email", {
            rules: [
              {
                type: "email",
                message: "The input is not valid E-mail!"
              },
              {
                required: true,
                message: "Please input your E-mail!"
              }
            ]
          })(
            <Input
              style={{
                fontSize,
                width: isWebView ? "300px" : "200px",
              }}
              placeholder="Sign up for email updates!"
            />
          )}
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            style={{ backgroundColor: "#FF7C93", borderColor: "#FF7C93" }}
          >
            Submit
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(SubmitField);

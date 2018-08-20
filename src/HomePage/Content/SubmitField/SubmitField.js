import React from "react";
import { Form, Input, Button } from "antd";

const FormItem = Form.Item;

class SubmitField extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log(`here: ${values.email}`);
      if (!err) {
        console.log("Received values of form: ", values);

        // Encode form data in the body.
        const formData = new FormData();
        formData.append("email", values.email);

        fetch("http://localhost:8080/email-signup", {
          method: "post",
          body: formData
        }).then(response => response.json());
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
                width: isWebView ? "300px" : "200px"
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

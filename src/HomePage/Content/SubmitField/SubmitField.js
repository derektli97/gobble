import React from "react";
import { Form, Input, Button } from "antd";

const FormItem = Form.Item;

class SubmitField extends React.Component {
  state = { loading: "no" };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log(`here: ${values.email}`);
      if (!err) {
        console.log("Received values of form: ", values);

        // Encode form data in the body.
        const formData = new FormData();
        formData.append("email", values.email);

        this.setState({ loading: "yes" }, () =>
          fetch("https://quack.tamuhack.org/email-signup", {
            method: "post",
            body: formData
          }).then(
            this.setState({
              loading: "done"
            })
          )
        );
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
              disabled={this.state.loading === "done"}
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
            loading={this.state.loading === "yes"}
            style={{ backgroundColor: "#FF7C93", borderColor: "#FF7C93" }}
          >
            {this.state.loading !== "done" ? "Submit" : "Yay!"}
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(SubmitField);

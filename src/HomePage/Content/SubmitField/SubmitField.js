import React from "react";
import { Icon, Form, Input, Button } from "antd";

const FormItem = Form.Item;

class SubmitField extends React.Component {
  state = { loadingState: "neutral" };

  handleSubmit = e => {
    // Prevent a redirect.
    e.preventDefault();
    // Validate that a correct email is being sent, then send it.
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const formData = new FormData();
        formData.append("email", values.email);
        // Set a loading state before doing anything else.
        this.setState({ loadingState: "loading" }, () => {
          // Send a post to our backend.
          fetch("https://quack.tamuhack.org/email-signup", {
            method: "post",
            body: formData
            // Regardless of the speed of the request, we wait atleast 1.5 seconds.
          }).then(result => {
            setTimeout(() => {
              this.setState({ loadingState: "done" });
            }, 1500);
          });
        });
      }
    });
  };

  render() {
    console.log(this.state.loadingState);
    const {
      isWebView,
      fontSize,
      form: { getFieldDecorator }
    } = this.props;
    const { loadingState } = this.state;

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
              disabled={loadingState === "done"}
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
            disabled={loadingState === "done"}
            loading={loadingState === "loading"}
            style={{
              width: "78px",
              backgroundColor:
                loadingState === "done" ? "transparent" : "#FF7C93",
              borderColor: "#FF7C93",
              borderWidth: loadingState === "loading" ? "0" : "2px"
            }}
          >
            {loadingState === "neutral" ? (
              "Submit"
            ) : loadingState === "loading" ? (
              ""
            ) : (
              <Icon type="check" style={{ color: "#FF7C93" }} />
            )}
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(SubmitField);

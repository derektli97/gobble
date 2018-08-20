import React from "react";
import { Icon, Form, Input, Button } from "antd";

const FormItem = Form.Item;

class SubmitField extends React.Component {
  state = { loadingState: "neutral" };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const formData = new FormData();
        formData.append("email", values.email);
        this.setState({ loadingState: "loading" }, () => {
          fetch("https://quack.tamuhack.org/email-signup", {
            method: "post",
            body: formData
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
    const { getFieldDecorator } = this.props.form;
    const { isWebView, fontSize } = this.props;
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
              borderWidth: loadingState === "loading" ? "0" : "2px",
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

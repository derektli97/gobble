import React from "react";
import { Icon, Form, Button } from "antd";
const FormItem = Form.Item;

class SubmitField extends React.Component {
  state = { loadingState: "neutral" };
  // #3E678C
  // #FF7C93
  constructor (props) {
    super(props);
    this.typeformEmbed = React.createRef();
  }
  handleSubmit = e => {
    // Prevent a redirect.
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const formData = new FormData();
        formData.append("email", values.email);
        // Set a loading state before doing anything else.
        this.setState({ loadingState: "loading" }, () => {
          // Send a post to our backend.
          fetch("https://quack.tamuhack.com/email-signup", {
            method: "post",
            body: formData
            // Regardless of the speed of the request, we wait atleast 1.5 seconds.
          }).then(() => {
            setTimeout(() => {
              this.setState({ loadingState: "done" });
            }, 1500);
          });
        });
      }
    });
  };

  render () {
    const { loadingState } = this.state;
    const { submitLink, buttonText, disabled } = this.props;
    return (
      <React.Fragment>
        <Form layout='inline' onSubmit={this.handleSubmit}>
          <FormItem>
            <a
              {...(!disabled && { href: submitLink })}
            >
              <Button
                type='primary'
                disabled
                loading={loadingState === "loading"}
                style={{
                  marginTop: "5px",
                  marginLeft: "10px",
                  boxShadow:
                    disabled ? "0px 4px #273954" : "0px 4px #E2768D",
                  height: "42px",
                  marginRight: "10px",
                  fontSize: "18px",
                  backgroundColor:
                    loadingState === "done" ? "transparent" : disabled ? "#3E678C" : "#FF7C93",
                  borderColor: disabled ? "#3E678C" : "#FF7C93",
                  borderWidth: loadingState === "loading" ? "0" : "2px"
                }}
              >
                {loadingState === "neutral"
                  ? buttonText
                  : loadingState === "loading" ? (
                    ""
                  ) : (
                    <Icon type='check' style={{ color: "#FF7C93" }} />
                  )}
              </Button>
            </a>
          </FormItem>
        </Form>
      </React.Fragment>
    );
  }
}

export default Form.create()(SubmitField);

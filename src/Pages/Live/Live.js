import React from "react";
import { Background } from "Pages/Events/EventsStyles";
import LiveNavBar from "Pages/Live/LiveNavbar/LiveNavbar";

class Live extends React.Component {
  state = { hello: "hello" };

  constructor (props) {
    super(props);
    this.hello = "hello";
  }

  render () {
    const { isWebView } = this.props;
    return (
      <Background style={{ height: "100vh" }}>
        <LiveNavBar {...{ isWebView }} />
      </Background>
    );
  }
}

export default Live;

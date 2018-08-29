import React from "react";

import "antd/dist/antd.css";
import HomePage from "./HomePage/HomePage.js";
import SponsorPage from "./SponsorPage/SponsorPage.js";
import "./app.css";

const mobileThreshold = 900;

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = { width: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount () {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount () {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions () {
    this.setState({ width: window.innerWidth });
  }

  render () {
    const isWebView = this.state.width > mobileThreshold;
    return (
      <React.Fragment>
        <HomePage {...{ isWebView }} />
        <SponsorPage {...{ isWebView }} />
      </React.Fragment>
    );
  }
}

export default App;

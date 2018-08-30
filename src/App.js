import React from "react";

import "antd/dist/antd.css";
import HomePage from "./HomePage/HomePage.js";
import SponsorPage from "./SponsorPage/SponsorPage.js";
import "./app.css";

const mobileThreshold = 900;

class App extends React.Component {
  constructor (props) {
    super(props);
    // NOTE: showHomePage is a temporary feature flag.
    this.state = { width: 0, showHomePage: false };
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
        { this.state.showHomePage &&
        <SponsorPage {...{ isWebView }} />
        }
      </React.Fragment>
    );
  }
}

export default App;

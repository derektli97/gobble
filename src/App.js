import React from "react";

import "antd/dist/antd.css";
import HomePage from "./HomePage/HomePage.js";
import SponsorPage from "./SponsorPage/SponsorPage.js";
import "./app.css";
import { Element } from "react-scroll";
const mobileThreshold = 900;

class App extends React.Component {
  constructor (props) {
    super(props);
    // NOTE: showSponsorPage is a temporary feature flag.
    this.state = { width: 0, showSponsorPage: true };
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

        <Element name='HomePage'>
          <HomePage {...{ isWebView }} />
        </Element>

        <Element name='SponsorPage'>
          { this.state.showSponsorPage &&
          <SponsorPage {...{ isWebView }} />
          }
        </Element>
      </React.Fragment>
    );
  }
}

export default App;

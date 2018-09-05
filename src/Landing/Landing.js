import React from "react";
import { Element } from "react-scroll";

import "antd/dist/antd.css";
import HomePage from "./HomePage/HomePage.js";
import SponsorPage from "./SponsorPage/SponsorPage.js";
import AboutPage from "./AboutPage/AboutPage.js";
import Footer from "./Footer/Footer.js";
import FAQPage from "./FAQPage/FAQPage.js";

const mobileThreshold = 900;

class Landing extends React.Component {
  constructor (props) {
    super(props);
    this.state = { width: 0, showFaqPage: true };
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

        <Element name='AboutPage'>
          <AboutPage {...{ isWebView }} />
        </Element>

        <Element name='SponsorPage'>
          <SponsorPage {...{ isWebView }} />
        </Element>

        {
          this.state.showFaqPage &&
          <Element name='FAQPage'>
            <FAQPage {...{ isWebView }} />
          </Element>
        }
        <Footer {...{ isWebView }} />
      </React.Fragment>
    );
  }
}

export default Landing;

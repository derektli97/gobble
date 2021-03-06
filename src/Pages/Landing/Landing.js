import React from "react";
import { Element } from "react-scroll";
import "antd/dist/antd.css";

import HomePage from "Pages/Landing/HomePage/HomePage";
import SponsorPage from "Pages/Landing/SponsorPage/SponsorPage";
import AboutPage from "Pages/Landing/AboutPage/AboutPage";
import FAQPage from "Pages/Landing/FAQPage/FAQPage";
import SchedulePage from "Pages/Landing/SchedulePage/SchedulePage";
import Footer from "CommonComponents/Footer/Footer";
import homePageFAQ from "Pages/Landing/FAQPage/FAQQA.json";
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
          isWebView &&
          <Element name='SchedulePage'>
            <SchedulePage {...{ isWebView }} />
          </Element>
        }
        {
          isWebView &&
          <Element name='FAQPage'>
            <FAQPage {...{ isWebView }} faqData={homePageFAQ} />
          </Element>
        }
        <Footer {...{ isWebView }} />
      </React.Fragment>
    );
  }
}

export default Landing;

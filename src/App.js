import React from "react";
import { hot } from "react-hot-loader";
import { Flex } from "grid-styled";

import "antd/dist/antd.css";
import SubmitField from "./SubmitField.js";
import HomePage from "./HomePage/HomePage.js";
import "./app.css";

const mobileThreshold = 720;

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render(){
    const isWebView = this.state.width > mobileThreshold;
    return(
      <HomePage {...{isWebView}} />
    );
  }
}

export default hot(module)(App);

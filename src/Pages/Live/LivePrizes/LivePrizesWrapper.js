import React from "react";

import LivePrizes from "Pages/Live/LivePrizes/LivePrizes";

const mobileThreshold = 900;

class LiveScheduleWrapper extends React.Component {
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
        <LivePrizes isWebView={isWebView} />
      </React.Fragment>
    );
  }
}

export default LiveScheduleWrapper;

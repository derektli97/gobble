import React from "react";
import Navbar from "Pages/Live/LiveNavbar/LiveNavbar";
import { Background, PrizeRow, TAMUPrizeContainer } from "Pages/Live/LivePrizes/LivePrizesStyles";
class LivePrizes extends React.Component {
  state = {};

  constructor (props) {
    super(props);
    this.hello = "hello";
  }

  render () {
    const { isWebView } = this.props;
    return (
      <React.Fragment>
        <Navbar {...{ isWebView }} />
        <Background>
          <PrizeRow>
            <TAMUPrizeContainer />
            <TAMUPrizeContainer />
            <TAMUPrizeContainer />
          </PrizeRow>
          <PrizeRow>
            <TAMUPrizeContainer />
            <TAMUPrizeContainer />
          </PrizeRow>
        </Background>
      </React.Fragment>
    );
  }
}

export default LivePrizes;

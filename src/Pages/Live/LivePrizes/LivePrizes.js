import React from "react";
import Navbar from "Pages/Live/LiveNavbar/LiveNavbar";
import {
  Background,
  PrizeRow,
  TAMUPrizeContainer,
  PrizeTitle,
  TabContainer,
  TextTab } from "Pages/Live/LivePrizes/LivePrizesStyles";
import PrizeJson from "Pages/Live/LivePrizes/LivePrizes.json";
class LivePrizes extends React.Component {
  state = {};

  constructor (props) {
    super(props);
    this.tamuhackPrizes = PrizeJson["prizes"]["tamuhack"];
    this.sponsorPrizes = PrizeJson["prizes"]["sponsor"];
    this.tamuRender = this.tamuhackPrizes.map((prize, index) => {
      return (
        <TAMUPrizeContainer>
          <PrizeTitle style={{
            backgroundColor: index % 2 === 0 ? "#E8678B" : "#9791B5"
          }}>{prize.title}</PrizeTitle>
          <TabContainer>
            <TextTab style={{ paddingTop: "5px" }}>
              {prize.description}
            </TextTab>
            <hr style={{ width: "90%", color: "black", padding: 0, margin: 0 }} />
            <TextTab>
              {prize.prize}
            </TextTab>
          </TabContainer>
        </TAMUPrizeContainer>
      );
    });
    console.log(this.tamuhackPrizes);
  }

  render () {
    const { isWebView } = this.props;
    const tamuRender = this.tamuRender;
    return (
      <React.Fragment>
        <Navbar {...{ isWebView }} />
        <Background>
          <PrizeRow>
            {tamuRender}
          </PrizeRow>
        </Background>
      </React.Fragment>
    );
  }
}

export default LivePrizes;

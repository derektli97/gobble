import React from "react";
import Navbar from "Pages/Live/LiveNavbar/LiveNavbar";
import {
  Background,
  TamuPrizeRow,
  SponsorPrizeRow,
  TAMUPrizeContainer,
  SponsorPrizeContainer,
  PrizeTitle,
  TabContainer,
  SponsorTextTab,
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
              Prize: {prize.prize}
            </TextTab>
          </TabContainer>
        </TAMUPrizeContainer>
      );
    });

    this.sponsorRender = this.sponsorPrizes.map((prize, index) => {
      return (
        <SponsorPrizeContainer>
          <PrizeTitle style={{
            backgroundColor: index % 3 === 0 ? "#E8678B" : "#9791B5",
            height: "50px"
          }}>{prize.company}</PrizeTitle>
          <TabContainer>
            <SponsorTextTab style={{ paddingTop: "20px" }}>
              {prize.description}
            </SponsorTextTab>
            <hr style={{ width: "90%", color: "black", padding: 0, margin: 0 }} />
            <SponsorTextTab>
              Challenge: {prize.challenge}
            </SponsorTextTab>
            <hr style={{ width: "90%", color: "black", padding: 0, margin: 0 }} />
            {
              prize.api.length !== 0 &&
              (
                <SponsorTextTab>
                  API: {prize.api}
                </SponsorTextTab>
              )
            }
            <hr style={{ width: "90%", color: "black", padding: 0, margin: 0 }} />
            <SponsorTextTab>
              Prize: {prize.prize}
            </SponsorTextTab>
          </TabContainer>
        </SponsorPrizeContainer>
      );
    });
  }

  render () {
    const { isWebView } = this.props;
    const tamuRender = this.tamuRender;
    const sponsorRender = this.sponsorRender;
    return (
      <React.Fragment>
        <Navbar {...{ isWebView }} />
        <Background>
          <TamuPrizeRow>
            {tamuRender}
          </TamuPrizeRow>
          <SponsorPrizeRow>
            {sponsorRender}
          </SponsorPrizeRow>
        </Background>
      </React.Fragment>
    );
  }
}

export default LivePrizes;

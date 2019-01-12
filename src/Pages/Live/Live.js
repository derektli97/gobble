import React from "react";
import {
  Background,
  BoxRow,
  DetailBox,
  DetailTitle,
  InfoBox,
  Label,
  InfoRow
} from "Pages/Live/LiveStyles";
import { Icon } from "Pages/Landing/HomePage/Content/ContentStyles";
import LiveNavBar from "Pages/Live/LiveNavbar/LiveNavbar";

class Live extends React.Component {
  render () {
    const { isWebView } = this.props;
    return (
      <Background {...{ isWebView }}>
        <LiveNavBar {...{ isWebView }} />
        <BoxRow {...{ isWebView }}>
          <DetailBox {...{ isWebView }}>
            <DetailTitle>Venue Details</DetailTitle>
            <InfoBox>Please be respectful of our traditions by not wearing
            hats inside the MSC or walking on the grass surrounding the building.
            </InfoBox>
          </DetailBox>
          <DetailBox {...{ isWebView }}>
            <DetailTitle>Network Info</DetailTitle>
            <InfoBox style={{ padding: 0, paddingLeft: "20px" }}>
              <InfoRow>
                <Icon src={require("assets/icons/wifi.svg")} style={{ marginRight: "30px" }} />
                <Label>TAMU_VISITOR</Label>
              </InfoRow>
              <InfoRow style={{ marginBottom: 0 }}>
                <Icon src={require("assets/icons/unlock.svg")} style={{ marginRight: "30px" }} />
                <Label>**no password needed**</Label>
              </InfoRow>
            </InfoBox>
          </DetailBox>
          <DetailBox {...{ isWebView }}>
            <DetailTitle>Contact</DetailTitle>
            <InfoBox>
              <InfoRow>
                <Icon src={require("assets/icons/wrench.svg")} style={{ marginRight: "30px" }} />
                Table Assignments (CSV)
              </InfoRow>
              <InfoRow>
                <Icon src={require("assets/icons/wrench.svg")} style={{ marginRight: "30px" }} />
                tamuhack2019.devpost.com
              </InfoRow>
              <InfoRow>
                <Icon src={require("assets/icons/slack.svg")} style={{ marginRight: "30px" }} />
                Slack
              </InfoRow>
              <InfoRow>
                <Icon src={require("assets/icons/mail.svg")} style={{ marginRight: "30px" }} />
                hello@tamuhack.com
              </InfoRow>
              <InfoRow>
                <Icon src={require("assets/icons/phone.svg")} style={{ marginRight: "30px" }} />
                (405) 586-4225
              </InfoRow>
              <InfoRow style={{ marginBottom: 0 }}>
                <Icon src={require("assets/icons/medkit.svg")} style={{ marginRight: "30px" }} />
                <Label>TAMU Police - (979) 845-2345</Label>
              </InfoRow>
            </InfoBox>
          </DetailBox>
        </BoxRow>
      </Background>
    );
  }
}

export default Live;

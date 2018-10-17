import React from "react";
import { Flex } from "grid-styled";

import {
  SponsorContainer,
  SponsorLogo,
  SponsorTitleRow,
  SponsorTitle,
  SponsorRow,
  Background,
  SponsorLogoBig
} from "./SponsorPageStyles.js";

class SponsorPage extends React.Component {
  render () {
    const { isWebView } = this.props;

    return (
      <Background>
        <Flex
          justifyContent={isWebView ? "initial" : "center"}
          css={{
            width: "80vw",
            overflow: "hidden",
            flexDirection: "column"
          }}
        >
          <Flex style={{ justifyContent: "center", fontSize: "14px", flexDirection: "column" }}>
            <SponsorTitleRow {...{ isWebView }} style={{ marginBottom: "0px" }}>
              <SponsorTitle {...{ isWebView }}>
                Sponsors
              </SponsorTitle>
            </SponsorTitleRow>
            <hr style={{ width: isWebView ? "180px" : "100px", border: "solid 2px #3F688D" }} />
            <Flex style={{ justifyContent: "center", color: "#3F688D" }}>
            (And more to come soon 😀)
            </Flex>
          </Flex>
          <SponsorContainer>
            <SponsorRow {...{ isWebView }} >
              <SponsorLogoBig {...{ isWebView }} src={require("assets/SponsorLogos/AA.png")} />
              <SponsorLogoBig {...{ isWebView }} src={require("assets/SponsorLogos/charles.png")} />
            </SponsorRow>
            <SponsorRow {...{ isWebView }}>
              <SponsorLogo {...{ isWebView }} src={require("assets/SponsorLogos/JPMorgan.png")} />
              <SponsorLogo {...{ isWebView }} src={require("assets/SponsorLogos/exxonmobile.png")} />
              <SponsorLogo {...{ isWebView }} src={require("assets/SponsorLogos/microsoft.png")} />
            </SponsorRow>
            <SponsorRow {...{ isWebView }}>
              <SponsorLogo {...{ isWebView }} src={require("assets/SponsorLogos/google.png")} />
              <SponsorLogo {...{ isWebView }} src={require("assets/SponsorLogos/smartcar.png")} />
              <SponsorLogo {...{ isWebView }} src={require("assets/SponsorLogos/facebook.png")} />
            </SponsorRow>
          </SponsorContainer>
          <Flex style={{ justifyContent: "center", fontSize: "14px", flexDirection: "column" }}>
            <SponsorTitleRow {...{ isWebView }} style={{ marginBottom: "0px" }}>
              <SponsorTitle {...{ isWebView }}>
              Previous Sponsors
              </SponsorTitle>
            </SponsorTitleRow>
            <hr style={{ width: isWebView ? "350px" : "180px", border: "solid 2px #3F688D" }} />
          </Flex>
          <SponsorContainer>
            <SponsorRow {...{ isWebView }}>
              <SponsorLogoBig {...{ isWebView }} src={require("assets/SponsorLogos/AA.svg")} />
            </SponsorRow>
            <SponsorRow {...{ isWebView }}>
              <SponsorLogo {...{ isWebView }} src={require("assets/SponsorLogos/chase.png")} />
              <SponsorLogo {...{ isWebView }} src={require("assets/SponsorLogos/google.png")} />
              <SponsorLogo {...{ isWebView }} src={require("assets/SponsorLogos/microsoft.png")} />
            </SponsorRow>
            <SponsorRow {...{ isWebView }}>
              <SponsorLogo {...{ isWebView }} src={require("assets/SponsorLogos/southwest.png")} />
              <SponsorLogo {...{ isWebView }} src={require("assets/SponsorLogos/facebook.png")} />
              <SponsorLogo {...{ isWebView }} src={require("assets/SponsorLogos/capital_one.png")} />
            </SponsorRow>
            <SponsorRow {...{ isWebView }}>
              <SponsorLogo {...{ isWebView }} src={require("assets/SponsorLogos/accenture.png")} />
              <SponsorLogo {...{ isWebView }} src={require("assets/SponsorLogos/goldman.png")} />
              <SponsorLogo {...{ isWebView }} src={require("assets/SponsorLogos/esri.png")} />
            </SponsorRow>
            <SponsorRow {...{ isWebView }}>
              <SponsorLogo {...{ isWebView }} src={require("assets/SponsorLogos/hbk.png")} />
              <SponsorLogo {...{ isWebView }} src={require("assets/SponsorLogos/pariveda.png")} />
              <SponsorLogo {...{ isWebView }} src={require("assets/SponsorLogos/gmnew.png")} />
            </SponsorRow>
          </SponsorContainer>
        </Flex>
      </Background>
    );
  }
}

export default SponsorPage;

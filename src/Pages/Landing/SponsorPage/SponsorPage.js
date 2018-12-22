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
            flexDirection: "column",
            paddingBottom: "20px"
          }}
        >
          <Flex style={{ justifyContent: "center", fontSize: "14px", flexDirection: "column" }}>
            <SponsorTitleRow {...{ isWebView }} style={{ marginBottom: "0px" }}>
              <SponsorTitle {...{ isWebView }}>
                Sponsors
              </SponsorTitle>
            </SponsorTitleRow>
            <hr style={{ width: isWebView ? "180px" : "100px", border: "solid 2px #3F688D" }} />
          </Flex>
          <SponsorContainer>
            <SponsorRow {...{ isWebView }} >
              <a href='https://jobs.aa.com/content/college/' target='_blank'>
                <SponsorLogoBig {...{ isWebView }} src={require("assets/SponsorLogos/AA.png")} />
              </a>
              <a href='https://www.aboutschwab.com/work-at-schwab' target='_blank'>
                <SponsorLogoBig {...{ isWebView }} src={require("assets/SponsorLogos/charles.png")} />
              </a>
            </SponsorRow>
            <SponsorRow {...{ isWebView }}>
              <a href='https://careers.jpmorgan.com/careers/US/en/home' target='_blank'>
                <SponsorLogo {...{ isWebView }} src={require("assets/SponsorLogos/JPMorgan.png")} />
              </a>
              <a href='https://jobs.exxonmobil.com/go/Engineering/3845600/' target='_blank'>
                <SponsorLogo {...{ isWebView }} src={require("assets/SponsorLogos/exxonmobile.png")} />
              </a>
              <a href='https://careers.microsoft.com/us/en/' target='_blank'>
                <SponsorLogo {...{ isWebView }} src={require("assets/SponsorLogos/microsoft.png")} />
              </a>
            </SponsorRow>
            <SponsorRow {...{ isWebView }}>
              <a href='https://www.parivedasolutions.com/privacy/careers-overview' target='_blank'>
                <SponsorLogo {...{ isWebView }} src={require("assets/SponsorLogos/pariveda.png")} />
              </a>
              <a href='https://www.cbre.us/about/careers' target='_blank'>
                <SponsorLogo {...{ isWebView }} src={require("assets/SponsorLogos/cbre.png")} />
              </a>
              <a href='https://www.bridgewaycapital.org/company/careers/' target='_blank'>
                <SponsorLogo {...{ isWebView }} src={require("assets/SponsorLogos/bridgeway.jpg")} />
              </a>
            </SponsorRow>
            <SponsorRow style={{ marginTop: "40px" }} {...{ isWebView }}>
              <a href='https://www.google.com/' target='_blank'>
                <SponsorLogo {...{ isWebView }} src={require("assets/SponsorLogos/google.png")} />
              </a>
              <a href='https://smartcar.com/careers/' target='_blank'>
                <SponsorLogo {...{ isWebView }} src={require("assets/SponsorLogos/smartcar.png")} />
              </a>
              <a href='https://www.facebook.com/careers/' target='_blank'>
                <SponsorLogo {...{ isWebView }} src={require("assets/SponsorLogos/facebook.png")} />
              </a>
            </SponsorRow>
            <SponsorRow style={{ marginTop: "40px" }} {...{ isWebView }}>
              <a href='https://jumpstart.me/r/TAMUhack' target='_blank'>
                <SponsorLogo {...{ isWebView }} src={require("assets/SponsorLogos/jumpstart.png")} />
              </a>
              <a href='https://jobs.chevron.com/' target='_blank'>
                <SponsorLogo {...{ isWebView }} src={require("assets/SponsorLogos/chevron.png")} />
              </a>
              <a href='https://careers.southwestair.com/' target='_blank'>
                <SponsorLogo {...{ isWebView }} src={require("assets/SponsorLogos/southwest.png")} />
              </a>
            </SponsorRow>
            <SponsorRow style={{ marginTop: "40px" }} {...{ isWebView }}>
              <a href='http://hackp.ac/mlh-stickermule-hackathons' target='_blank'>
                <SponsorLogo {...{ isWebView }} src={require("assets/SponsorLogos/stickermule.png")} />
              </a>
            </SponsorRow>
          </SponsorContainer>
        </Flex>
      </Background>
    );
  }
}

export default SponsorPage;

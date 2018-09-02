import React from "react";
import { Flex } from "grid-styled";
import { SponsorContainer, SponsorLogo, SponsorTitleRow, SponsorTitle, SponsorRow, Background } from "./SponsorPageStyles.js";
class SponsorPage extends React.Component {
  render () {
    const { isWebView } = this.props;

    return (
      <Background>
        <Flex
          justifyContent={isWebView ? "initial" : "center"}
          css={{
            width: "100vw",
            overflow: "hidden",
            flexDirection: "column"
          }}
        >
          <SponsorTitleRow>
            <SponsorTitle>
              Sponsors
            </SponsorTitle>
          </SponsorTitleRow>
          <SponsorContainer>
            <SponsorRow>
              <SponsorLogo {...{ isWebView }} src={require("../assets/SponsorLogos/AA.svg")} />
              <SponsorLogo {...{ isWebView }} src={require("../assets/SponsorLogos/charles.png")} />
            </SponsorRow>
            <SponsorRow>
              <SponsorLogo {...{ isWebView }} src={require("../assets/SponsorLogos/exxonmobile.png")} />
            </SponsorRow>
          </SponsorContainer>
          <SponsorTitleRow>
            <SponsorTitle>
              Previous Sponsors
            </SponsorTitle>
          </SponsorTitleRow>
          <SponsorContainer>
            <SponsorRow>
              <SponsorLogo {...{ isWebView }} src={require("../assets/SponsorLogos/AA.svg")} style={{}} />
            </SponsorRow>
            <SponsorRow>
              <SponsorLogo {...{ isWebView }} src={require("../assets/SponsorLogos/chase.png")} />
              <SponsorLogo {...{ isWebView }} src={require("../assets/SponsorLogos/google.png")} />
              <SponsorLogo {...{ isWebView }} src={require("../assets/SponsorLogos/microsoft.png")} />
            </SponsorRow>
            <SponsorRow>
              <SponsorLogo {...{ isWebView }} src={require("../assets/SponsorLogos/southwest.png")} />
              <SponsorLogo {...{ isWebView }} src={require("../assets/SponsorLogos/facebook.png")} />
              <SponsorLogo {...{ isWebView }} src={require("../assets/SponsorLogos/capital_one.png")} />
            </SponsorRow>
            <SponsorRow>
              <SponsorLogo {...{ isWebView }} src={require("../assets/SponsorLogos/accenture.png")} />
              <SponsorLogo {...{ isWebView }} src={require("../assets/SponsorLogos/goldman.png")} />
              <SponsorLogo {...{ isWebView }} src={require("../assets/SponsorLogos/esri.png")} />
            </SponsorRow>
            <SponsorRow>
              <SponsorLogo {...{ isWebView }} src={require("../assets/SponsorLogos/hbk.png")} />
              <SponsorLogo {...{ isWebView }} src={require("../assets/SponsorLogos/pariveda.png")} />
              <SponsorLogo {...{ isWebView }} src={require("../assets/SponsorLogos/gm.png")} />
            </SponsorRow>
          </SponsorContainer>
        </Flex>
      </Background>
    );
  }
}

export default SponsorPage;

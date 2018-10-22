import React from "react";
import { Flex } from "grid-styled";
import { FooterIcon, Copyright } from "./FooterStyles";

class Footer extends React.Component {
  render () {
    const { isWebView } = this.props;
    return (
      <Flex
        css={{
          position: "relative",
          width: "100vw",
          height: (isWebView) ? "60px" : "38px",
          backgroundColor: "#FFF8F9",
          alignItems: "flex-start",
          overflow: "hidden",
          justifyContent: "space-between",
          paddingTop: (isWebView) ? "20px" : "5px"
        }}
      >
        <Flex css={{ width: (isWebView) ? "350px" : "150px", paddingLeft: (isWebView) ? "100px" : "30px", justifyContent: "space-evenly" }}>
          <a href='https://www.facebook.com/tamuhack' target='_blank'>
            <FooterIcon
              alt='Facebook Icon'
              src={require("../../assets/social-media-logos/facebook-f.svg")}
            />
          </a>
          <a href='https://www.twitter.com/tamuhack' target='_blank'>
            <FooterIcon
              alt='Facebook Icon'
              src={require("../../assets/social-media-logos/twitter.svg")}
            />
          </a>
          <a href='https://www.instagram.com/tamuhack' target='_blank'>
            <FooterIcon
              alt='Facebook Icon'
              src={require("../../assets/social-media-logos/instagram.svg")}
            />
          </a>
          <a href='mailto:hello@tamuhack.com'>
            <FooterIcon
              alt='Email Icon'
              src={require("../../assets/envelope.svg")}
            />
          </a>
        </Flex>
        <Copyright {...{ isWebView }} >
        © Copyright 2019 TAMUhack – All Rights Reserved
        </Copyright>
      </Flex>
    );
  }
}

export default Footer;

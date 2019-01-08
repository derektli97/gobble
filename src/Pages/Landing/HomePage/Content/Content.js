import React from "react";
import { Flex } from "grid-styled";
import { JayMoveRight, Subtitle, Icon } from "Pages/Landing/HomePage/Content/ContentStyles";

class Content extends React.Component {
  state = { fun: false };

  imgClick () {
    this.setState({ fun: true });
  }

  render () {
    const { isWebView, description } = this.props;
    return (
      <React.Fragment>
        {this.state.fun && (
          <JayMoveRight
            alt=''
            src={require("assets/goodmorning.svg")}
            style={{
              top: "20vh",
              animationDuration: "20s",
              height: "150px"
            }}
          />
        )}
        <Flex
          flexDirection='column'
          justifyContent='center'
          alignItems={isWebView ? "initial" : "center"}
          css={{
            padding: "20px",
            zIndex: "2",
            minWidth: "400px",
            paddingLeft: isWebView ? "8vw" : "20px",
            marginTop: isWebView ? "13vh" : "18vh"
          }}
        >
          <Flex>
            <img
              alt=''
              src={require("assets/tamuhack_logo_col.svg")}
              style={{
                height: isWebView ? "65px" : "50px",
                marginLeft: "10px",
                marginRight: "10px",
                marginBottom: "20px"
              }}
              onClick={() => this.imgClick()}
            />
          </Flex>
          <Subtitle {...{ isWebView }} style={{ paddingBottom: "2vh" }}>
            January 26-27, 2019 • Texas A&M University
          </Subtitle>
          <Subtitle {...{ isWebView }} style={{ fontSize: "23px", fontWeight: "600" }}>
            {description}
          </Subtitle>
          <Subtitle {...{ isWebView }} style={{ textAlign: "center" }}>
            Still want to participate?
          </Subtitle>
          <Subtitle {...{ isWebView }} style={{ marginTop: "0px", textAlign: "center" }}>
            <span>
              We will be accepting walk-ins (subject to availability) or you can
              <span>&nbsp;</span>
              <a href={"https://www.signupgenius.com/go/60b0c48abab22a5fa7-tamuhack1"} target='_blank'>volunteer</a>.
            </span>
          </Subtitle>
          <Subtitle {...{ isWebView }} style={{ paddingTop: "3vh" }}>
            Interested in
            <span>&nbsp;</span>
            <a href={"mailto:sponsor@tamuhack.com"} target='_blank'>sponsoring</a>?
          </Subtitle>
          <Flex style={{ marginTop: "10vh", marginLeft: "5px", marginRight: "5px", justifyContent: "space-between", width: "180px" }}>
            <a href='https://www.facebook.com/tamuhack'>
              <Icon
                alt='Facebook Icon'
                src={require("assets/social-media-logos/facebook-f.svg")}
              />
            </a>
            <a href='https://www.twitter.com/tamuhack'>
              <Icon
                alt='Facebook Icon'
                src={require("assets/social-media-logos/twitter.svg")}
              />
            </a>
            <a href='https://www.instagram.com/tamuhack'>
              <Icon
                alt='Facebook Icon'
                src={require("assets/social-media-logos/instagram.svg")}
              />
            </a>
            <a href='mailto:hello@tamuhack.com'>
              <Icon
                alt='Email Icon'
                src={require("assets/envelope.svg")}
              />
            </a>
          </Flex>
        </Flex>
      </React.Fragment>
    );
  }
}

export default Content;

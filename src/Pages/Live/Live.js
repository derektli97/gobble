import React from "react";
import {
  Background,
  BoxRow,
  DetailBox,
  DetailTitle
} from "Pages/Live/LiveStyles";
import LiveNavBar from "Pages/Live/LiveNavbar/LiveNavbar";

class Live extends React.Component {
  state = { hello: "hello" };

  constructor (props) {
    super(props);
    this.hello = "hello";
  }

  render () {
    const { isWebView } = this.props;
    return (
      <Background>
        <LiveNavBar {...{ isWebView }} />
        <BoxRow>
          <DetailBox>
            <DetailTitle>Hello</DetailTitle>
          </DetailBox>
          <DetailBox>
            <DetailTitle>Hello</DetailTitle>
          </DetailBox>
        </BoxRow>
      </Background>
    );
  }
}

export default Live;

import React from "react";
import Linkify from "react-linkify";

import {
  Background,
  QuestionContainer,
  Question,
  Title,
  QuestionTitle,
  QuestionBody
} from "Pages/Landing/FAQPage/FAQPageStyles.js";

class FAQPage extends React.Component {
  state = { activeQuestionIndex: 0 };

  constructor (props) {
    super(props);
    this.faqData = props.faqData;
    this.simple = props.simple;
    this.faqDataKeys = Object.keys(props.faqData);
  }

  render () {
    const faqData = this.faqData;
    const simple = this.simple;
    this.questions = this.faqDataKeys.map((question, index) =>
      <Question key={index} onClick={() => { this.setState({ activeQuestionIndex: index }); }}>
        {question}
      </Question>
    );
    return (
      <Background style={{ marginTop: "10px", justifyContent: "space-around", alignSelf: "center" }}>
        <QuestionContainer >
          {this.questions}
        </QuestionContainer>
        <div style={{ marginLeft: "45vw" }}>
          <Title>
            FAQ
          </Title>
          <QuestionTitle>
            {this.faqDataKeys[this.state.activeQuestionIndex]}
          </QuestionTitle>
          <QuestionBody>
            {faqData[this.faqDataKeys[this.state.activeQuestionIndex]].split("\n").map((item, key) => {
              if (this.state.activeQuestionIndex === 0 && !simple) {
                return (
                  <p key={key}>{item} <br /> <br />
                    <Linkify style={{ borderLeft: "12px solid #ddd", paddingLeft: "25px", maxWidth: "480px", fontSize: "16px" }}>
                      <p style={{ fontWeight: 600, margin: 0, fontSize: "19px" }}>NOTE</p> We are able to admit minors only if they are accompanied by a college student (18+) who is planning on participating in the hackathon. Have additional questions? Email us at highschool@tamuhack.com
                    </Linkify>
                  </p>
                );
              } else {
                return <Linkify properties={{ target: "_blank", rel: "nofollow   noopener" }} key={key}>{item} <br /></Linkify>;
              }
            })}
          </QuestionBody>
        </div>
      </Background>
    );
  }
}

export default FAQPage;

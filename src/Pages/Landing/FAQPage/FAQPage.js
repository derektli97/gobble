import React from "react";

import {
  Background,
  QuestionContainer,
  Question,
  Title,
  QuestionTitle,
  QuestionBody
} from "Pages/Landing/FAQPage/FAQPageStyles.js";
import faqData from "./FAQQA.json";

class FAQPage extends React.Component {
  state = { activeQuestionIndex: 0 };
  faqDataKeys = Object.keys(faqData);
  render () {
    this.questions = this.faqDataKeys.map((question, index) =>
      <Question key={index} onClick={() => { this.setState({ activeQuestionIndex: index }); }}>
        {question}
      </Question>
    );
    return (
      <Background style={{ marginTop: "50px", justifyContent: "space-around", alignSelf: "center" }}>
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
              if (this.state.activeQuestionIndex === 0) {
                return (
                  <p key={key}>{item} <br /> <br />
                    <p style={{ borderLeft: "12px solid #ddd", paddingLeft: "25px", maxWidth: "480px", fontSize: "16px" }}>
                      <p style={{ fontWeight: 600, margin: 0, fontSize: "19px" }}>NOTE</p> We are able to admit minors only if they are accompanied by a college student (18+) who is planning on participating in the hackathon. Have additional questions? Email us at highschool@tamuhack.com
                    </p>
                  </p>
                );
              } else {
                return <p key={key}>{item} <br /></p>;
              }
            })}
          </QuestionBody>
        </div>
      </Background>
    );
  }
}

export default FAQPage;

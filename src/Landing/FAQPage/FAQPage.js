import React from "react";
import { Background, QuestionContainer, Question, Title, QuestionTitle, QuestionBody } from "./FAQPageStyles.js";
import faqData from "./FAQQA.json";
class FAQPage extends React.Component {
  state = { active: 0 };
  questions = Object.keys(faqData).map((question, index) =>
    <Question key={index} onClick={() => { this.setState({ active: index }); }}>
      {question}
    </Question>
  );
  render () {
    return (
      <Background style={{ marginTop: "50px" }}>
        <QuestionContainer>
          {this.questions}
        </QuestionContainer>
        <Title>
          FAQ
        </Title>
        <QuestionTitle>
          {Object.keys(faqData)[this.state.active]}
        </QuestionTitle>
        <QuestionBody>
          {faqData[Object.keys(faqData)[this.state.active]]}
        </QuestionBody>
      </Background>
    );
  }
}

export default FAQPage;

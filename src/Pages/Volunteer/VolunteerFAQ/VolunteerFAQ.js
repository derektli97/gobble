import React from "react";
import Linkify from "react-linkify";

import {
  Background,
  QuestionContainer,
  Question,
  Title,
  QuestionTitle,
  QuestionBody
} from "Pages/Volunteer/VolunteerFAQStyles.js";

class VolunteerFAQ extends React.Component {
  constructor (props) {
    super(props);
    this.faqData = props.faqData;
    this.faqDataKeys = Object.keys(props.faqData);
  }
  state = { activeQuestionIndex: 0 };
  render () {
    const faqData = this.faqData;
    this.questions = this.faqDataKeys.map((question, index) =>
      <Question key={index} onClick={() => { this.setState({ activeQuestionIndex: index }); }}>
        {question}
      </Question>
    );
    return (
      <Background style={{ alignSelf: "center" }}>
        <QuestionContainer>
          {this.questions}
        </QuestionContainer>
        <div style={{ display: "flex",
          flexDirection: "column",
          alignSelf: "flex-start"
        }}>
          <Title>
            Volunteer Questions
          </Title>
          <QuestionTitle>
            {this.faqDataKeys[this.state.activeQuestionIndex]}
          </QuestionTitle>
          <QuestionBody>
            {faqData[this.faqDataKeys[this.state.activeQuestionIndex]].split("\n").map((item, key) => {
              return <Linkify properties={{ target: "_blank", rel: "nofollow   noopener" }} key={key}>{item} <br /></Linkify>;
            })}
          </QuestionBody>
        </div>
      </Background>
    );
  }
}

export default VolunteerFAQ;

import styled from "styled-components";

export const Background = styled.div`
  position: absolute;
  background: white;
  height: 100%;
  width: 100vw;
  margin: 0px;
  padding: 0px;
`;

export const QuestionContainer = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  height: 100%;
  padding-left: 10vw;
  justify-content: center;
`;

export const Question = styled.p`
  padding: 2px;
  font-size: 17px;

  &:hover {
   background: palevioletred;
   cursor: pointer;
  }
`;

export const Title = styled.p`
  margin-left: 40vw;
  font-size: 40px;
  padding-top: 21vh;
  font-weight: 600;
`;

export const QuestionTitle = styled.p`
  position: relative:
  flex-wrap: wrap;
  width: 40vw;
  margin-left: 40vw;
  margin-top: 30px;
  font-size: 26px;
  font-weight: 600;
`;

export const QuestionBody = styled.p`
  position: relative:
  flex-wrap: wrap;
  width: 40vw;
  margin-left: 40vw;
  margin-top: 30px;
  font-size: 15px;
`;

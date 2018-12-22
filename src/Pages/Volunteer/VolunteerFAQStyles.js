import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  margin: 0px;
  height: 100%;
  justify-content: space-around;
`;

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10vw;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-right: 5vw;
`;

export const Question = styled.p`
  padding: 7px;
  font-size: 17px;
  margin: 2px;
  position: relative;
  &:hover {
   cursor: pointer;
   font-weight: 600;
   background-color: #FFF8F9;
  }
`;

export const Title = styled.p`
  display: flex;
  position: relative;
  font-size: 40px;
  font-weight: 600;
  top: 0px;
`;

export const QuestionTitle = styled.p`
  flex-wrap: wrap;
  width: 40vw;
  font-size: 26px;
  font-weight: 500;
`;

export const QuestionBody = styled.p`
  flex-wrap: wrap;
  width: 40vw;
  max-width: 550px;
  margin-top: 30px;
  font-size: 19px;

`;

import styled from "styled-components";

export const Background = styled.div`
  background: white;
  height: 100vh;
  width: 100vw;
  margin: 0px;
  padding-bottom: 250px;
  max-height: 100vh;
`;

export const QuestionContainer = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  height: 100vh;
  padding-left: 15vw;
  justify-content: center;
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
  font-size: 40px;
  padding-top: 21%;
  font-weight: 600;
`;

export const QuestionTitle = styled.p`
  flex-wrap: wrap;
  width: 40vw;
  margin-top: 30px;
  font-size: 26px;
  font-weight: 600;
`;

export const QuestionBody = styled.p`
  flex-wrap: wrap;
  width: 40vw;
  max-width: 550px;
  margin-top: 30px;
  font-size: 19px;

`;

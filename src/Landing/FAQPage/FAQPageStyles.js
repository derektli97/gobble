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
  padding-left: 15vw;
  justify-content: center;
`;

export const Question = styled.p`
  padding: 7px;
  font-size: 17px;
  margin: 2px;

  &:hover {
   cursor: pointer;
   font-weight: 600;
   background-color: #FFF8F9;
  }
`;

export const Title = styled.p`
  font-size: 40px;
  padding-top: 21vh;
  font-weight: 600;
`;

export const QuestionTitle = styled.p`
  position: relative:
  flex-wrap: wrap;
  width: 40vw;
  margin-top: 30px;
  font-size: 26px;
  font-weight: 600;
`;

export const QuestionBody = styled.p`
  position: relative:
  flex-wrap: wrap;
  width: 40vw;
  max-width: 550px;
  margin-top: 30px;
  font-size: 19px;

`;

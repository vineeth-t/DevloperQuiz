import styled, { css } from "styled-components";
export const QuestionCard = styled.div`
  box-shadow: rgba(191, 255, 83, 0.5) 0px 0px 180px 4px;
  background-color: var(--bg-color1);
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  color: white;
  margin: 5rem;
  @media screen and (max-width:765px){
    width:300px;
    margin:5rem auto;

  }
`;
export const Options = styled.div`
  display: flex;
  flex-direction: row;
`;
type QuizOption = {
  optionSelected?: boolean;
  wrongAnswer?: boolean;
  hoverOnOptions?:boolean
};
export const Option = styled.label<QuizOption>`
  padding: 0.5rem 0.5rem;
  margin: 1rem;
  ${(props) =>props.hoverOnOptions&&css`
  &:hover {
    background-color: var(--header-color);
    color: black;
  }`}
  ${(props) =>
    props.optionSelected &&
    css`
      background-color: var(--header-color);
      color: black;
    `};
  ${(props) =>
    props.wrongAnswer &&
    css`
      background-color: red;
      color: black;
    `}
`;

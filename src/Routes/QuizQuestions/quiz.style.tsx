import styled, { css } from "styled-components";
export const QuestionCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  margin: 1rem;
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
  wrongAnswer
`;

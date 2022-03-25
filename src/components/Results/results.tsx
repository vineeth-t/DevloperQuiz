import { useEffect, useState } from "react";
import styled from "styled-components";
import { Option, Options } from "../../Routes/QuizQuestions/quiz.style";
import { answers } from "../../utils/updateAnswers";
import { Rules } from "../Instructions/instructions";

export const ResultPage = styled.section`
  color: var(--font-color2);
  width: 800px;
  margin: auto;
  padding: 1rem;
  @media screen and (max-width:765px){
    width: 300px;
    margin: 1rem auto;
    padding:0;
  }
`;
export const ScoreCard = styled.h3`
  position: absolute;
  right: 5rem;
  border: 1px solid var(--header-color);
  color: var(--header-color);
  background-color: transparent;
  padding: 0.5rem;
  @media screen and (max-width:765px){
    right: 0.5rem;
    padding:0.2rem;
    top:3.5rem;
  }
`;

export function ShowResults() {
  const [score, setScore] = useState(0);
  let count = 0;
  useEffect(
    () =>
      (function () {
        for (let j = 0; j < answers.length; j++) {
          let question = answers[j].question;
          let temp = answers[j].answeredOption;
          for (let i = 0; i < question.options.length; i++) {
            question.options[i].optionId === temp &&
              question.options[i].isCorrect &&
              count++;
          }
        }
        setScore(count);
      })(),
    []
  );
  return (
    <ResultPage>
      <ScoreCard>Score : {score}</ScoreCard>
      <h2 style={{ textAlign: "center", textDecoration: "underline" }}>
        Results
      </h2>
      <ol type="1">
        {answers.map(({ question, answeredOption }) => (
          <li>
            <h3>{question.value}</h3>
            <Options type="A">
              {question.options.map(({ optionValue, optionId, isCorrect }) => (
                <Option
                  wrongAnswer={optionId === answeredOption && !isCorrect}
                  optionSelected={isCorrect}
                >
                  <span> {optionValue}</span>
                </Option>
              ))}
            </Options>
          </li>
        ))}
      </ol>
    </ResultPage>
  );
}

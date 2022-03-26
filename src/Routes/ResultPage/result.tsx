import { useEffect, useState } from "react";
import styled from "styled-components";
import { OptionArray, Question } from "../../data";
import { Option, Options } from "../../Routes/QuizQuestions/quiz.style";
import { QuestionAnswered } from "../QuizQuestions/quiz.type";

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

export function ShowResults({attempetedAnswers,setAttempetedAnswers}:any) {
  const [score, setScore] = useState(0);
  let count = 0;
let currentQuizQuestions= attempetedAnswers.quizes[0].questions
useEffect(
    () =>
      (function () {
        for (let j = 0; j < currentQuizQuestions.length; j++) {
          let question = currentQuizQuestions[j];
          let userAnswer = currentQuizQuestions[j].answeredOption;
          for (let i = 0; i < question.options.length; i++) {
            question.options[i].optionId === userAnswer &&
              question.options[i].isCorrect &&
              count++;
          }
        }
        setScore(count);
        return ()=>{
          setScore(0);
          setAttempetedAnswers(null)
        }
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
        {currentQuizQuestions.map(({ value, answeredOption,options }:QuestionAnswered) => (
          <li>
            <h3>{value}</h3>
            <Options type="A">
              {options.map(({ optionValue, optionId, isCorrect }:OptionArray) => (
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

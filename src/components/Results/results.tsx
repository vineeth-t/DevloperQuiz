import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { quizDetails } from "../../data";
import { Option } from "../../Routes/QuizQuestions/quiz.style";
import { answers } from "../../utils/updateAnswers";

export function ShowResults() {
  const [scrore, setScore] = useState(0);
  let count=0;
  useEffect(
    () =>
      (function () {
   
        for(let j=0;j<answers.length;j++){
            let question=answers[j].question;
            let temp=answers[j].answeredOption
            for(let i=0;i<question.options.length;i++){
                (question.options[i].optionId===temp&&question.options[i].isCorrect)&&count++
               }
        }
     setScore(count)   
    })(),
    []
  );
  return (
    <section>
      {scrore}
      {answers.map(({ question, answeredOption }) => (
        <div>
          <h1>{question.value}</h1>
          {question.options.map(({ optionValue, optionId, isCorrect }) => (
            <Option
              wrongAnswer={optionId === answeredOption && !isCorrect}
              optionSelected={isCorrect}
            >
              <span> {optionValue}</span>
            </Option>
          ))}
        </div>
      ))}
    </section>
  );
}

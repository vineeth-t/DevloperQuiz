import { useState } from "react";
import { useParams } from "react-router-dom";
import { quizDetails } from "../../data";
import { updateScore } from "../../utils/updateAnswers";
import { QuestionCard, Options, Option } from "./quiz.style";
export const QuizQuestions = () => {
  const [count, setCounter] = useState(0);
  const [optionSelected, setSelectedOption] = useState("");
  const { id } = useParams();
  const currentQuiz = quizDetails.listOfQuizes.find((quiz) => quiz.id === id);
  let lengthofQuizQuestionsArray: any = currentQuiz?.questions.length;
  console.log(count, lengthofQuizQuestionsArray);
  return (
    <div>
      {count < lengthofQuizQuestionsArray ? (
        <>
        <QuestionCard>
          <h3>{currentQuiz?.questions[count].value}</h3>
          <Options>
            {currentQuiz?.questions[count].options.map(
              ({ optionValue, optionId }) => (
                <Option
                  optionSelected={optionSelected === optionId ? false : true}
                  onClick={() =>
                    updateScore(
                      setSelectedOption,
                      currentQuiz?.questions[count].questionId,
                      optionId
                    )
                  }
                >
                  <span> {optionValue}</span>
                </Option>
              )
            )}
          </Options>
        </QuestionCard>
        <button onClick={() => setCounter((count:number)=>count+1)}>next</button>
        </>
      ) : (
        <h2>Finshed the test</h2>
      )}
    </div>
  );
};

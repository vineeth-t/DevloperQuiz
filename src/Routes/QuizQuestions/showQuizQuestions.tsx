import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Instructions } from "../../components/Instructions/instructions";
import { ShowResults } from "../../components/Results/results";
import { quizDetails } from "../../data";
import { updateScore } from "../../utils/updateAnswers";
import { QuestionCard, Options, Option } from "./quiz.style";
export const QuizQuestions = () => {
  const [count, setCounter] = useState(0);
  const [optionSelected, setSelectedOption] = useState("");
  const [showInstrictions, setInstructions] = useState(true);
  const { id } = useParams();
  const currentQuiz = quizDetails.listOfQuizes.find((quiz) => quiz.id === id);
  let lengthofQuizQuestionsArray: any = currentQuiz?.questions.length;
  return (
    <div>
      {showInstrictions ? (
        <Instructions setInstructions={setInstructions} />
      ) : count < lengthofQuizQuestionsArray ? (
        <>
          <QuestionCard>
            <h3>{currentQuiz?.questions[count].value}</h3>
            <Options>
              {currentQuiz?.questions[count].options.map(
                ({ optionValue, optionId }) => (
                  <Option
                    hoverOnOptions={true}
                    optionSelected={optionSelected === optionId ? true : false}
                    onClick={() =>
                      updateScore(
                        setSelectedOption,
                        currentQuiz?.questions[count],
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
          <Button next={'next'} onClick={() => setCounter((count: number) => count + 1)}>
            Next
          </Button>
        </>
      ) : (
        <ShowResults />
      )}
    </div>
  );
};

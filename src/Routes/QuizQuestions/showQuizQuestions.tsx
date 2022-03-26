import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Button,
  Instructions,
} from "../../components/Instructions/instructions";
import { quizDetails } from "../../data";
import { updateScore } from "../../utils/updateAnswers";
import { ShowResults } from "../ResultPage/result";
import { QuestionCard, Options, Option, QuestionText } from "./quiz.style";
import { QuizAnswers } from "./quiz.type";
export const QuizQuestions = () => {
  const [count, setCounter] = useState(0);
  const [optionSelected, setSelectedOption] = useState("");
  const [showInstrictions, setInstructions] = useState(true);
  const[attempetedAnswers,setAttempetedAnswers]=useState<QuizAnswers|null>(null)
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
            <QuestionText>{currentQuiz?.questions[count].value}</QuestionText>
            <Options type="A">
              {currentQuiz?.questions[count].options.map(
                ({ optionValue, optionId }) => (
                  <Option
                    hoverOnOptions={true}
                    optionSelected={optionSelected === optionId ? true : false}
                    onClick={() =>
                      updateScore(
                        attempetedAnswers,
                        setAttempetedAnswers,
                        id,
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
          <Button
            next={"next"}
            onClick={() => setCounter((count: number) => count + 1)}
          >
            Next
          </Button>
        </>
      ) : (
        <ShowResults attempetedAnswers={attempetedAnswers} setAttempetedAnswers={setAttempetedAnswers} />
      )}
    </div>
  );
};

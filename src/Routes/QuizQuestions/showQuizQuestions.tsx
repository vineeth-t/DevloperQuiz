import { useState } from "react";
import { useParams } from "react-router-dom";
import { Question, quizDetails } from "../../data";
import { QuestionCard, Options, Option } from "./quiz.style";
export function updateScore(
  setCurrentScore: any,
  setSelectedOption: any,
  question: Question,
  optionId: string
) {
  setSelectedOption(optionId);
}
type Answers = {
  question: Question;
  optionId: string;
};
let answers: Answers[] = [];
export const QuizQuestions = () => {
  const [count, setCounter] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const { id } = useParams();

  const currentQuiz = quizDetails.listOfQuizes.find((quiz) => quiz.id === id);

  return (
    <div>
      {count <= currentQuiz?.questions?.length - 1 && (
        <QuestionCard>
          <h3>{currentQuiz?.questions[count].value}?</h3>
          <Options>
            {currentQuiz?.questions[count].options.map(
              ({ optionValue, optionId }) => (
                <Option
                  selectedOption={selectedOption === optionId ? true : false}
                  onClick={() =>
                    updateScore(
                      setCurrentScore,
                      setSelectedOption,
                      currentQuiz?.questions[count],
                      optionId
                    )
                  }
                >
                  {optionValue}
                </Option>
              )
            )}
          </Options>
        </QuestionCard>
      )}
      <button onClick={() => setCounter((count) => count + 1)}>next</button>
    </div>
  );
};

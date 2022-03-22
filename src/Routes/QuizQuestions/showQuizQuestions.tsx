import { useState } from "react";
import { useParams } from "react-router-dom";
import { quizDetails } from "../../data";
import { QuestionCard, Options } from "./quiz.style";
export const QuizQuestions = () => {
  const [count, setCounter] = useState(0);
  const { id } = useParams();
  const currentQuiz = quizDetails.listOfQuizes.find(
    (quiz) => quiz.id === JSON.parse(id, 10)
  );
  return (
    <div>
      {count <= currentQuiz?.questions?.length - 1 && (
        <QuestionCard>
          <span>{currentQuiz?.questions[count].value}</span>
          <Options>
            {currentQuiz?.questions[count].options.map(({ optionValue }) => (
              <div>{optionValue}</div>
            ))}
          </Options>
        </QuestionCard>
      )}
      <button onClick={() => setCounter((count) => count + 1)}>next</button>
    </div>
  );
};

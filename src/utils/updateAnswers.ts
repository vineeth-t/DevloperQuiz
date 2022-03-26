import { Question } from "../data";
import { QuizAnswers } from "../Routes/QuizQuestions/quiz.type";

export function updateScore(
  attempetedAnswers:QuizAnswers|null,
  setAttempetedAnswers:any,
  quizId: any,
  setSelectedOption: any,
  question: Question,
  answeredOption: string
) {
  setSelectedOption(answeredOption);
  if (attempetedAnswers?.quizes.find((quiz) => quiz.quizId === quizId)) {
    let currentIndex = attempetedAnswers.quizes.findIndex(
      (quiz) => quiz.quizId === quizId
    );
    attempetedAnswers.quizes[currentIndex].questions = [
      ...attempetedAnswers.quizes[currentIndex].questions,
      { ...question, answeredOption },
    ];
  }else{
    attempetedAnswers = {
      quizes: [
        {
          quizId: quizId,
          questions: [{ ...question, answeredOption }],
        },
      ],
    };
  }
  console.log({attempetedAnswers})
  setAttempetedAnswers(attempetedAnswers)

}

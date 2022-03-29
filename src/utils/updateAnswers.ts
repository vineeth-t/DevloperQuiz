import { Question } from "../data";
import { QuizAnswers } from "../Routes/QuizQuestions/quiz.type";

export function updateScore(
  attempetedAnswers:QuizAnswers|null,
  setAttempetedAnswers:any,
  quizId: any,
  question: Question,
  answeredOption: string,
  setCounter:Function
) {
  
  setCounter((count:number)=>count+1)
  if (attempetedAnswers?.quizes?.find((quiz) => quiz.quizId === quizId)) {
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
  setAttempetedAnswers(attempetedAnswers)

}

import { Question } from "../data";
import { Answers } from "../Routes/QuizQuestions/quiz.type";

export let answers: Answers[] = [];
export function updateScore(
    setSelectedOption: any,
    question: Question,
    answeredOption: string
  ) {
    setSelectedOption(answeredOption);
    if(answers.find((answer)=>answer.question.questionId===question.questionId)){
      let currentIndex=answers.findIndex((answer)=>answer.question.questionId===question.questionId);
      answers[currentIndex].answeredOption=answeredOption
    }else{
      answers=[...answers,{question,answeredOption}]
    }
    
  }
import { Answers } from "../Routes/QuizQuestions/quiz.type";

let answers: Answers[] = [];
export function updateScore(
    setSelectedOption: any,
    question: string,
    optionId: string
  ) {
    setSelectedOption(optionId);
    if(answers.find((answer)=>answer.question===question)){
      let currentIndex=answers.findIndex((answer)=>answer.question===question);
      answers[currentIndex].optionId=optionId
    }else{
      answers=[...answers,{question,optionId}]
    }
    
  }
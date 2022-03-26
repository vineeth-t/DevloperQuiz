import { Question } from "../../data";

export type QuizAnswers = {
   quizes:QuizList[]
  }
  export type QuizList={
    quizId:any,
    questions: QuestionAnswered[];
  }
  export interface QuestionAnswered extends Question{
    answeredOption: string;
  }
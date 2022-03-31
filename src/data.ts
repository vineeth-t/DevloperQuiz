import { v4 as uuid } from "uuid";
export type DataTypefromDB={
  quizDetails:Quiz
}
export type Quiz = {
  AuthorOfQuiz: string;
  listOfQuizes: QuizDetails[];
};
export type QuizDetails = {
  _id: string;
  name: string;
  imageUrl: string;
  questions: Question[];
};
export interface Question {
  questionId: string;
  value: string;
  options: OptionArray[];
};
export type OptionArray = {
  optionId: string;
  optionValue: string;
  isCorrect: boolean;
};

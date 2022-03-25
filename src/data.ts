import { v4 as uuid } from "uuid";
type Quiz = {
  AuthorOfQuiz: string;
  listOfQuizes: QuizDetails[];
};
type QuizDetails = {
  id: string;
  name: string;
  imageUrl: string;
  questions: Question[];
};
export type Question = {
  questionId: string;
  value: string;
  options: OptionArray[];
};
type OptionArray = {
  optionId: string;
  optionValue: string;
  isCorrect: boolean;
};
export const quizDetails: Quiz = {
  AuthorOfQuiz: "pvr",
  listOfQuizes: [
    {
      id: '1',
      name: "Quiz-one",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
      questions: [
        {
          questionId: uuid(),
          value: "What is the full form of JS",
          options: [
            {
              optionId: uuid(),
              optionValue: "Java-Script",

              isCorrect: true
            },
            {
              optionId: uuid(),
              optionValue: "Java-Scribe",

              isCorrect: false
            }
          ]
        },
        {
          questionId: uuid(),
          value: "What are higher order functions",
          options: [
            {
              optionId: uuid(),
              optionValue: "Map, reduce, filter",

              isCorrect: true
            },
            {
              optionId: uuid(),
              optionValue: "For-each, enhanced-for",

              isCorrect: false
            },   {
              optionId: uuid(),
              optionValue: "xyzs",
              isCorrect: false
            },  {
              optionId: uuid(),
              optionValue: "12345",
              isCorrect: false
            }
          ]
        },{
          questionId: uuid(),
          value: "What are higher order functionsssssssssssssssssssssssssss",
          options: [
            {
              optionId: uuid(),
              optionValue: "Map, reduce, filter",

              isCorrect: true
            },
            {
              optionId: uuid(),
              optionValue: "For-each, enhanced-for",

              isCorrect: false
            },   {
              optionId: uuid(),
              optionValue: "xyzs",
              isCorrect: false
            },  {
              optionId: uuid(),
              optionValue: "12345",
              isCorrect: false
            }
          ]
        }
      ]
    },
    {
      id: '2',
      name: "Quiz-two-React",
      imageUrl: "http://codemen.com/wp-content/uploads/2016/09/ReactJS.png",
      questions: [
        {
          questionId: uuid(),
          value: "What is the full form of JSX",
          options: [
            {
              optionId: uuid(),
              optionValue: "Java-Script",

              isCorrect: true
            },
            {
              optionId: uuid(),
              optionValue: "Java-Scribe",

              isCorrect: false
            }
          ]
        }
      ]
    }
  ]
};

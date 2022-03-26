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
            }
          ]
        },{
          questionId: uuid(),
          value: "let and const have ___ scope",
          options: [
            {
              optionId: uuid(),
              optionValue: "Block Scope",

              isCorrect: true
            },
            {
              optionId: uuid(),
              optionValue: "Global Scope",

              isCorrect: false
            }
          ]
        },{
          questionId: uuid(),
          value: "what is the output for Math.round(1.5),Math.floor(1.5),Math.ceil(1.5)",
          options: [
            {
              optionId: uuid(),
              optionValue: "2 2 1",
              isCorrect: false
            },
            {
              optionId: uuid(),
              optionValue: "2 1 2",
              isCorrect: true
            }
          ]
        },{
          questionId: uuid(),
          value: "What are HTML Entities?",
          options: [
            {
              optionId: uuid(),
              optionValue: "&nbsp, &lt",

              isCorrect: true
            },
            {
              optionId: uuid(),
              optionValue: "<HTML>,<Head>,<Body>",

              isCorrect: false
            }
          ]
        },{
          questionId: uuid(),
          value: "which of the following is true about Axios",
          options: [
            {
              optionId: uuid(),
              optionValue: "Axios response should be converted JSON data explicitly",
              isCorrect: false
            },
            {
              optionId: uuid(),
              optionValue: "Axios automatically converts response to JSON data",
              isCorrect: true
            }
          ]
        },{
          questionId: uuid(),
          value: "Predict the output let a=[1,2,3,1,4,3,2]; what will be new Set(a)",
          options: [
            {
              optionId: uuid(),
              optionValue: "[1,2,3,4]",
              isCorrect: false
            },
            {
              optionId: uuid(),
              optionValue: "{1,2,3,4}",
              isCorrect: true
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
              optionValue: "Java-Script- XML",

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

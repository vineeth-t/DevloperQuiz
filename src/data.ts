type Quiz = {
  AuthorOfQuiz: string;
  listOfQuizes: QuizDetails[];
};
type QuizDetails = {
  id: number;
  name: string;
  imageUrl: string;
  questions: Question[];
};
type Question = {
  value: string;
  options: OptionArray[];
};
type OptionArray = {
  optionValue: string;
  isCorrect: boolean;
};
export const quizDetails: Quiz = {
  AuthorOfQuiz: "pvr",
  listOfQuizes: [
    {
      id: 1,
      name: "Quiz-one",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
      questions: [
        {
          value: "What is the full form of JS",
          options: [
            {
              optionValue: "Java-Script",
              isCorrect: true
            },
            {
              optionValue: "Java-Scribe",
              isCorrect: false
            }
          ]
        },
        {
          value: "What are higher order functions",
          options: [
            {
              optionValue: "Map, reduce, filter",
              isCorrect: true
            },
            {
              optionValue: "For-each, enhanced-for",
              isCorrect: false
            }
          ]
        }
      ]
    },
    {
      id: 2,
      name: "Quiz-two-React",
      imageUrl: "http://codemen.com/wp-content/uploads/2016/09/ReactJS.png",
      questions: [
        {
          value: "What is the full form of JSX",
          options: [
            {
              optionValue: "Java-Script",
              isCorrect: true
            },
            {
              optionValue: "Java-Scribe",
              isCorrect: false
            }
          ]
        }
      ]
    }
  ]
};

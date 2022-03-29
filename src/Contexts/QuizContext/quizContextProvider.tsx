import { createContext, useContext, useReducer } from "react";
import { quizReducer } from "./quizReducer";
import { InitalStateType, QuizContextType } from "./quizContext.types";
export const quizContext = createContext<QuizContextType>({} as QuizContextType);

export const QuizContextProvider: React.FC = ({ children }) => {
  let initalState: InitalStateType = {
    quizDetails: null,
  };
  const [quizState, quizDispatch] = useReducer(quizReducer, initalState);
  return (
    <quizContext.Provider value={{ quizState, quizDispatch }}>
      {children}
    </quizContext.Provider>
  );
};
export const useQuizContext = () => {
  return useContext(quizContext);
};

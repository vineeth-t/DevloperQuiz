import { Quiz } from "../../data"

export type QuizContextType={
    quizState:InitalStateType,
    quizDispatch:(action:ActionTypeOfQuiz)=>void
}
export type InitalStateType={
    quizDetails:Quiz|null
}
export type ActionTypeOfQuiz={
    type:'SET_QUIZ',
    payload:Quiz|null
}

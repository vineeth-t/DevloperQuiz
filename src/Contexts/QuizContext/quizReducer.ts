import { ActionTypeOfQuiz, InitalStateType } from "./quizContext.types"


export const quizReducer=(state:InitalStateType,action:ActionTypeOfQuiz)=>{
switch(action.type){
    case 'SET_QUIZ':
        return{...state,quizDetails:action.payload}
    default:
        return state
}
}
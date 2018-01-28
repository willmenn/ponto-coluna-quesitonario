import {combineReducers} from 'redux'
import {page} from './PageReducer'
import {auth} from './AuthReducer'
import * as constants from "../action/Constants";

let questionsState =[
    {
        question: "Voce está se sentindo bem hoje?",
        id: "1",
        answers: [
            {answer: "Muito Sim", weight: 5},
            {answer: "Sim", weight: 4},
            {answer: "Medio", weight: 3},
            {answer: "Nem Tanto", weight: 2},
            {answer: "Nao", weight: 1}
        ]

    },
    {
        question: "Como está a dor nas costas?",
        id: "2",
        answers: [
            {answer: "Muito Sim", weight: 5},
            {answer: "Sim", weight: 4},
            {answer: "Medio", weight: 3},
            {answer: "Nem Tanto", weight: 2},
            {answer: "Nao", weight: 1}
        ]

    },
    {
        question: "Como está a sua postura hoje?",
        id: "3",
        answers: [
            {answer: "Muito Sim", weight: 5},
            {answer: "Sim", weight: 4},
            {answer: "Medio", weight: 3},
            {answer: "Nem Tanto", weight: 2},
            {answer: "Nao", weight: 1}
        ]

    }
];

export const questions = (state=questionsState, action) =>  state

export const questionsAnswered = (state=null, action) =>  {
    if(action.type === constants.PAGE_FORM_FULFILLED){
        return action.payload
    }
    return state
}

export default combineReducers({
    auth,
    page,
    questions,
    questionsAnswered
});
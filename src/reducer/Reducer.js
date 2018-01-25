import {combineReducers} from 'redux'
import {page} from './PageReducer'
import {auth} from './AuthReducer'
let questionsState =[
    {
        question: "Voce está se sentindo bem hoje?",
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

export default combineReducers({
    auth,
    page,
    questions
});
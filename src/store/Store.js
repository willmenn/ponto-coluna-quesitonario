import {createStore} from 'redux'
import {reducer} from '../reducer/Reducer'

let state = {
    auth: null,
    questions: [
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
    ]
}
export let store = createStore(reducer, state);

import React, {Component} from 'react';
import './static/main.css'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
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
    }

    render() {
        let questions = this.state.questions;
        return (
            <div className="container">
                <h1>Questionário Ponto da Coluna</h1>
                <form>
                    {questions.map(question => {
                        return (<div className="form-group mt-5">
                            <legend>{question.question}</legend>
                            {question.answers.map(answer => {
                                return (<div className="form-check form-check-inline">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input"
                                               name="optionsRadios"
                                               id="optionsRadios1" value="option1"/>
                                        {answer.answer}
                                    </label>
                                </div>)
                            })}
                        </div>)
                    })}
                    <div className="mt-5">
                    <button type="reset" className="btn btn-outline-secondary mr-2">Resetar o questionário</button>
                    <button type="submit" className="btn btn-outline-success ml-2">Submeter o questionário</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default App;

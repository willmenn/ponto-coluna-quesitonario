import React, {Component} from 'react';
import {Map} from 'immutable'
import firebase from 'firebase'
import FormNavBar  from './FormNavBar'

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: Map(),
            score: 0
        };
    }


    onChangeCheckbox(event) {
        if (event && event.target.checked) {
            let elem = document.getElementById(event.target.id);
            let questionId = elem.getAttribute("data-question-id");
            let answerWeight = elem.getAttribute("data-answer-weight");
            let map = this.state.count.set(questionId, answerWeight);
            this.setState({count: map});
        }
    }

    onSubmit(evt) {
        var count = 0;
        this.state.count.valueSeq().toArray().forEach(value => {
            count = count + parseInt(value)
        });
        this.setState({score: count});

        var d = document.getElementById("containerForm");
        d.className += " fade-out";
        var d = document.getElementById("countId");
        d.className += " fade-in";

        let firebaseDatabase = firebase.database();
        var docRef = firebaseDatabase.ref().child("form");

        console.log();
        var form = {
            score: count,
            email: this.props.auth.auth.email,
            questionsAnswered: this.state.count.toObject()
        }
        docRef.push({form: form}).then(e => console.log("sucesso"));

        evt.preventDefault();
        return false;
    }



    render() {
        let questions = this.props.questions;
        let score = this.state.score;
        let questionsAnswered = this.props.questionsAnswered;
        return (
            <div>
                <div className="container" id="containerForm">
                    {this.props.fulfilled ?
                        <FormNavBar/>
                        : null}
                    <h1>Questionário Ponto da Coluna</h1>
                    <form onSubmit={this.onSubmit.bind(this)}>
                        {questions.map(question => {
                            return (<div className="form-group mt-5">
                                <legend>{question.question}</legend>
                                {question.answers.map(answer => {
                                    return (<div className="form-check form-check-inline">
                                        <label className="form-check-label">
                                            {this.props.fulfilled ? <input type="checkbox" className="form-check-input"
                                                   name="optionsRadios"
                                                   id={"checkbox" + answer.answer + question.id}
                                                   data-question-id={question.id}
                                                   data-answer-weight={answer.weight}
                                                   onChange={this.onChangeCheckbox.bind(this)}
                                                   checked={this.isChecked(questionsAnswered, question, answer)}
                                            /> :
                                                <input type="checkbox" className="form-check-input"
                                                       name="optionsRadios"
                                                       id={"checkbox" + answer.answer + question.id}
                                                       data-question-id={question.id}
                                                       data-answer-weight={answer.weight}
                                                       onChange={this.onChangeCheckbox.bind(this)}
                                                />}
                                            {answer.answer}
                                        </label>
                                    </div>)
                                })}
                            </div>)
                        })}
                        {this.props.fulfilled ?
                            <div className="form-group mt-5">
                                <p>{this.props.score}</p>
                            </div>:
                            <div className="form-group mt-5">
                                <button type="submit" className="btn btn-outline-success ml-2 mobile-margin">
                                    Submeter o questionário
                                </button>
                            </div>
                        }
                    </form>
                </div>
                <div className="weight-count" id="countId">
                    <h1>A sua pontuação é {score}.</h1>
                    <h1>A equipe Ponto da Coluna Agradece.</h1>
                </div>
            </div>
        );
    }

    isChecked(questionsAnswered, question, answer) {
        if (this.props.fulfilled) {
            return parseInt(questionsAnswered[question.id]) === answer.weight;
        }
        return false;
    }
}

export default Form;

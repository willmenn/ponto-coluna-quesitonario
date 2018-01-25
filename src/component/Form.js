import React, {Component} from 'react';

class Form extends Component {

    render() {
        let questions = this.props.questions;
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
                    <div className="form-group mt-5">
                        <button type="submit" className="btn btn-outline-success ml-2 mobile-margin">
                            Submeter o questionário
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;

import React, {Component} from 'react';

import Form from './component/Form'
import Login from './component/Login'
import {connect} from 'react-redux'

import './static/main.css'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let auth = this.props.auth;
        let questions = this.props.questions;
        return (
            <div>
                {auth === null ? <Login/> : null}
                {auth ? <Form questions={questions}/> : null}
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            auth: state.auth,
            questions: state.questions
        }
    }
)
(App);


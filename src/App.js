import React, {Component} from 'react';

import Form from './component/Form'
import Login from './component/Login'
import Dashboard from './component/Dashboard'
import {connect} from 'react-redux'

import './static/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import {PAGE_DASHBOARD, PAGE_FORM} from "./action/Constants";

class App extends Component {

    render() {
        let auth = this.props.auth;
        let questions = this.props.questions
        let page = this.props.page;
        return (
            <div>
                {auth === null ? <Login/> : null}
                {auth && page === PAGE_FORM ? <Form questions={questions}/> : null}
                {page === PAGE_DASHBOARD ? <Dashboard/> : null}
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            auth: state.auth,
            questions: state.questions,
            page: state.page
        }
    })(App);

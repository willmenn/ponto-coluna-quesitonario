import React, {Component} from 'react';

import Form from './component/Form'
import Login from './component/Login'
import Dashboard from './component/Dashboard'
import RegistryPacient from './component/RegistryPatient'
import PatientList from './component/PatientList'
import {connect} from 'react-redux'

import './static/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import {
    PAGE_REGISTRY_PATIENT, PAGE_DASHBOARD, PAGE_FORM, PAGE_PATIENT_LIST,
    PAGE_FORM_FULFILLED
} from "./action/Constants";

import FirebaseStore from './store/FirebaseStore'

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {firebaseAuth: {}}
    }

    componentDidMount() {
        this.setState({firebaseAuth: new FirebaseStore(this.props.firebaseApp)})
    }

    render() {
        let auth = this.props.auth;
        let questions = this.props.questions
        let page = this.props.page;
        let questionsAnswered = this.props.questionsAnswered
        return (
            <div>
                {auth === null ? <Login firebaseAuth={this.state.firebaseAuth}/> : null}
                {auth && (page === PAGE_FORM || page === PAGE_FORM_FULFILLED)
                    ? <Form questions={questions} auth={auth}
                            fulfilled={page === PAGE_FORM_FULFILLED}
                            questionsAnswered={questionsAnswered}
                    /> : null}
                {page === PAGE_DASHBOARD ? <Dashboard/> : null}
                {page === PAGE_REGISTRY_PATIENT ? <RegistryPacient/> : null}
                {page === PAGE_PATIENT_LIST ? <PatientList/> : null}
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            auth: state.auth,
            questions: state.questions,
            page: state.page,
            questionsAnswered: state.questionsAnswered
        }
    })(App);

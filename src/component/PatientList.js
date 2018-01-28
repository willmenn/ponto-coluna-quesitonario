import React, {Component} from 'react';
import '../static/signin.css'
import firebase from 'firebase'
import {store} from '../store/Store'
import {PAGE_FORM_FULFILLED} from "../action/Constants";


class PatientList extends Component {
    constructor() {
        super()
        this.state = {patients: []}
    }

    componentDidMount() {
        let firebaseDatabase = firebase.database();
        let docRef = firebaseDatabase.ref().child("form");
        docRef.on("value", snap => {
            console.log(snap.val());
            var output = new Array()

            var input = snap.val();
            for (var type in input) {
                var item = {};
                item.type = type;
                item.form = input[type];
                output.push(item);
            }
            console.log(output);
            this.setState({patients: output});
        })
    }


    onClickPatient(questionsAnswered) {
        store.dispatch({type: PAGE_FORM_FULFILLED, payload: questionsAnswered})
    }

    render() {
        let patients = this.state.patients;
        console.log(patients);
        return (
            <div className="container-list">
                <ul className="list-group">
                    {patients.map(patient => {
                        return (
                            <a href="#" onClick={() => this.onClickPatient(patient.form.form.questionsAnswered)}>
                                <li className="list-group-item">
                                    {patient.form.form.email + ", score:" + patient.form.form.score}
                                </li>
                            </a>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default PatientList;

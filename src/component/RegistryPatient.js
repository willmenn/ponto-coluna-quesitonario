import React, {Component} from 'react';
import '../static/signin.css'
import arrowBack from 'typicons.font/src/svg/arrow-back.svg'
import firebase from 'firebase'

import {store} from '../store/Store'
import {REGISTRY_PATIENT_GO_TO_DASHBOARD} from "../action/Constants";

class RegistryPatient extends Component {

    constructor() {
        super()
        this.state = {userCreated: false}
    }

    onSubmit(evt) {
        let data = this.createFormData(evt);

        let auth = firebase.auth();

        auth.createUserWithEmailAndPassword(data.email, data.password)
            .then(e => {
                console.log("user criado.");
                this.setState({userCreated: true});
            }).catch(e => console.log("erro" + e));

        evt.preventDefault();
        return false;
    }

    createFormData(evt) {
        let body = Array.from(evt.target.elements)
            .filter(el => el.name)
            .reduce((a, b) => ({...a, [b.name]: b.value}), {});

        return body;
    }

    onClickArrowBackImg() {
        store.dispatch({type: REGISTRY_PATIENT_GO_TO_DASHBOARD});
    }

    render() {
        return (
            <div className="container">
                <form className="form-registry-patient" onSubmit={this.onSubmit.bind(this)}>
                    <div className="form-group row">
                        <label htmlFor="email-text-input" className="col-2 col-form-label">Email:</label>
                        <div className="col-10">
                            <input className="form-control" name="email" type="text" id="email-text-input"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="pass-text-input" className="col-2 col-form-label">Password:</label>
                        <div className="col-10">
                            <input className="form-control" name="password" type="text" id="pass-text-input"/>
                        </div>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block"
                            type="submit">Criar Paciente
                    </button>
                    {this.state.userCreated ? <label htmlFor="pass-text-input" className="col-form-label text-success">
                        Paciente criado com sucesso</label> : null}
                    {this.state.userCreated ?
                        <a className="ml-2" onClick={() => this.onClickArrowBackImg()} href="#">
                            <img src={arrowBack} alt=""></img>
                        </a> : null}

                </form>
            </div>
        );
    }
}

export default RegistryPatient;

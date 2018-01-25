import React, {Component} from 'react';
import './signin.css'
import {store} from '../store/Store'
import {LOGIN_ACTION} from "../action/Constants";
import firebase from 'firebase'


class Login extends Component {
    constructor() {
        super()
    }

    onSubmit(evt) {
        let data = this.createFormData(evt);

        let auth = firebase.auth();

        auth.signInWithEmailAndPassword(data.email,data.password).then(e =>{
            store.dispatch({type: LOGIN_ACTION, payload: e});
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

    render() {
        return (
            <div className="container">
                <form className="form-signin" onSubmit={this.onSubmit.bind(this)}>
                    <h2 className="form-signin-heading">Please sign in</h2>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address"
                           name="email"
                           />
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password"
                    name="password"/>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" value="remember-me"/> Remember me
                        </label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block"
                            type="submit">Entrar</button>
                </form>
            </div>
        );
    }
}

export default Login;
import React, {Component} from 'react';
import '../static/signin.css'
import {store} from '../store/Store'
import {LOGIN_ACTION, LOGIN_ACTION_DASHBOARD} from "../action/Constants";
import firebase from 'firebase'


class Login extends Component {

    onSubmit(evt) {
        let data = this.createFormData(evt);

        this.props.firebaseAuth.login(data);

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
                    <h2 className="form-signin-heading">Ponto da Coluna</h2>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address"
                           name="email"
                    />
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password"
                           name="password"/>
                    <button className="btn btn-lg btn-primary btn-block"
                            type="submit">Entrar
                    </button>
                </form>
            </div>
        );
    }
}

export default Login;

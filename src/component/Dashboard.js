import React, {Component} from 'react';
import {store} from '../store/Store'

import userAdd from 'typicons.font/src/svg/user-add.svg'
import documentText from 'typicons.font/src/svg/document-text.svg'
import {DASHBOARD} from "../action/Constants";

class Dashboard extends Component {

    onClickDocumentTextImg() {
        store.dispatch({type: DASHBOARD.GO_TO_FORM_PAGE});
    }

    onClickAddUserImg() {

    }

    render() {
        return (
            <div className="container">
                <div className="row dashboard-row">
                    <div className="col dashboard-img-container">
                        <a onClick={() => this.onClickDocumentTextImg()} href="#">
                            <img src={documentText} className="dashboard-img"></img>
                            <p className="dashboard-img-label">Ir para o Questionário</p>
                        </a>
                    </div>
                    <div className="col dashboard-img-container">
                        <a onClick={() => this.onClickAddUserImg()} href="#">
                            <img src={userAdd} className="dashboard-img"></img>
                            <p className="dashboard-img-label">Cadastro de Paciente</p>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;

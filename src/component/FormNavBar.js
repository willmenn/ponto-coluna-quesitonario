import React, {Component} from 'react';
import html2pdf from "html2pdf.js";
import downloadImg from 'typicons.font/src/svg/download.svg'
import {store} from '../store/Store'
import {NAVBAR} from "../action/Constants";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-grid.css'
import 'bootstrap/dist/css/bootstrap-reboot.css'
import 'bootstrap/dist/js/bootstrap'



class FormNavBar extends Component {

    downloadPDF() {
        var container = document.getElementById("containerForm");
        html2pdf(container, {
            margin: 1,
            filename: 'myfile.pdf',
            image: {type: 'jpeg', quality: 0.98},
            html2canvas: {dpi: 192, letterRendering: true},
            jsPDF: {unit: 'in', format: 'letter', orientation: 'portrait'}
        });
    }

    onClickDashboard(){
        store.dispatch({type: NAVBAR.GO_TO_DASHBOARD})
    }

    render() {
        return (
            <nav className="navbar navbar-expanded-md navbar-dark fixed-top bg-dark">
                <a className="navbar-brand" href="#">Ponto da Coluna</a>
                    <ul className="nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#"
                               onClick={() => this.onClickDashboard()}>
                                Dashboard
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" onClick={() => this.downloadPDF()}>
                                <img src={downloadImg} alt="">
                                </img>
                            </a>
                        </li>
                    </ul>
            </nav>
        );
    }
}

export default FormNavBar;

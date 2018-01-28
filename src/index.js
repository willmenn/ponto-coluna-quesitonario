import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase'
import {Provider} from 'react-redux'
import {store} from  './store/Store'

import registerServiceWorker from './registerServiceWorker';

var config = {
    apiKey: "AIzaSyC5dRwhWCFHrDVxRhDPEahegWe9_inNyfw",
    authDomain: "ponto-da-coluna.firebaseapp.com",
    databaseURL: "https://ponto-da-coluna.firebaseio.com",
    projectId: "ponto-da-coluna",
    storageBucket: "gs://ponto-da-coluna.appspot.com/",
    messagingSenderId: "655594431526"
};
firebase.initializeApp(config);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

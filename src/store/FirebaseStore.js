import {LOGIN_ACTION, LOGIN_ACTION_DASHBOARD} from "../action/Constants";
import {store} from "./Store";

class FirebaseStore {
    constructor(firebase) {
        this.auth = firebase.auth();
    }

    login(data) {
        this.auth.signInWithEmailAndPassword(data.email, data.password)
            .then(e => {
                if (e !== null) {
                    this.isDispatchEventIfLogged(data, e);
                }
            }).catch(e => console.log("erro" + e));

    }

    isDispatchEventIfLogged(data, e) {
        if (data.email === "william.ahrons@gmail.com") {
            store.dispatch({type: LOGIN_ACTION_DASHBOARD, payload: data});
        } else {
            store.dispatch({type: LOGIN_ACTION, payload: e});
        }
    }
}

export default FirebaseStore
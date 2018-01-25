import {LOGIN_ACTION, LOGIN_ACTION_DASHBOARD} from "../action/Constants";

export const auth = (state=null, action) => {
    if (action.type === LOGIN_ACTION) {
        return {...state, auth: action.payload}
    }
    if (action.type === LOGIN_ACTION_DASHBOARD) {
        return {...state, auth: action.payload}
    }
    if(state != null){
        return {...state}
    }

    return null
}

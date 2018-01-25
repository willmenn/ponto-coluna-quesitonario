import {LOGIN_ACTION} from "../action/Constants";

export const reducer = (state, action) => {
    if(action.type === LOGIN_ACTION){
        console.log(action.payload)
        return {...state, auth: action.payload}
    }
    return {...state}
}
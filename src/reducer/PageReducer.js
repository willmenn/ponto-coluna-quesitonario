import {DASHBOARD, LOGIN_ACTION, LOGIN_ACTION_DASHBOARD, PAGE_DASHBOARD, PAGE_FORM} from "../action/Constants";

export const page = (state=null, action) => {
    if (action.type === LOGIN_ACTION_DASHBOARD) {
        return PAGE_DASHBOARD
    }
    if(action.type === DASHBOARD.GO_TO_FORM_PAGE){
        return PAGE_FORM
    }
    if(action.type === LOGIN_ACTION){
        return PAGE_FORM
    }

    return {...state}
}
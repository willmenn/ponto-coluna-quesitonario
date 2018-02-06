import * as constants from "../action/Constants";

export const page = (state=null, action) => {
    if (action.type === constants.LOGIN_ACTION_DASHBOARD) {
        return constants.PAGE_DASHBOARD
    }
    if (action.type === constants.REGISTRY_PATIENT_GO_TO_DASHBOARD ||
        action.type === constants.NAVBAR.GO_TO_DASHBOARD
    ) {
        return constants.PAGE_DASHBOARD
    }
    if(action.type === constants.DASHBOARD.GO_TO_FORM_PAGE){
        return constants.PAGE_FORM
    }
    if(action.type === constants.LOGIN_ACTION){
        return constants.PAGE_FORM
    }
    if(action.type === constants.DASHBOARD.GO_TO_REGISTRY_PATIENT_PAGE){
        return constants.PAGE_REGISTRY_PATIENT
    }
    if(action.type === constants.DASHBOARD.GO_TO_PATIENT_LIST_PAGE){
        return constants.PAGE_PATIENT_LIST
    }
    if(action.type === constants.PAGE_FORM_FULFILLED){
        return constants.PAGE_FORM_FULFILLED
    }
    return constants.PAGE_FORM
}
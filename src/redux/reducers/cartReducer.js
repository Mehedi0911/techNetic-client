import { ActionTypes } from "../constants/actionTypes";



export const billingReducer = (state = {}, {type, payload}) => {

    switch (type) {
        case ActionTypes.SAVE_BILLING_INFO:

        return  {...state, ...payload}
            
            
    
        default:
            return state;
    }
}
import { ActionTypes } from "../constants/actionTypes";

export const addToCart = (itemID) => {
    return {
        type:ActionTypes.ADD_TO_CART,
        payload: {
            id:itemID
        }
    }
}

export const increaseQty = (itemID) => {
    return {
        type:ActionTypes.INCREASE_QTY,
        payload:{
            id: itemID
        }
    }
}

export const decreaseQty = (itemID) => {
    return {
        type:ActionTypes.DECREASE_QTY,
        payload:{
            id: itemID,
           
        }
    }
}

export const removeFromCart = (itemID) => {
    return {
        type:ActionTypes.REMOVE_FROM_CART,
        payload: {
            id:itemID,
        }
    }
}
export const clearCart = () => {
    return {
        type:ActionTypes.CLEAR_CART,
      
    }
}

export const saveBillingInfo = (info) => {
    return {
        type:ActionTypes.SAVE_BILLING_INFO,
        payload: info
    }
}
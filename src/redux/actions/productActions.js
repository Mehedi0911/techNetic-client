import {ActionTypes} from '../constants/actionTypes';

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload :products
    }
}


export const setSelectedProducts = (product) => {
    return {
        type: ActionTypes.SET_SELECTED_PRODUCTS,
        payload: product
    }
}


export const removeSelectedProducts = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCTS
    }
}
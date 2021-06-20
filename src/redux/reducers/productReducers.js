import {ActionTypes}  from '../constants/actionTypes'

const initialState = {
    products:[],
    cart: JSON.parse(localStorage.getItem("cart") || "[]")
}

export const allProductReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
          
            return {...state, products:payload};

        case ActionTypes.ADD_TO_CART:

            const item = state.products.find(prod => prod._id === payload.id)

            // check whether the item is already in thew cart

            const inCart = state.cart.find( item=>
                item._id === payload.id ? true 
                : false)

            return {
                ...state,
                cart: inCart ?
                        state.cart.map( item => item._id === payload.id ?
                        {...item, qty: item.qty + 1} : item)
                        : [...state.cart, {...item, qty:1}]
            
            }

        case ActionTypes.INCREASE_QTY:
            let isThere = state.cart.find( item=>
                item._id === payload.id ? true 
                : false)
        return{
            ...state,
                cart: isThere ?
                        state.cart.map( item => item._id === payload.id ?
                        {...item, qty: item.qty + 1} : item)
                        : [...state.cart, {...item, qty:1}]
        }

        case ActionTypes.DECREASE_QTY:
            
            let isSelected = state.cart.find( item=>
                item._id === payload.id ? true 
                : false)
            return{
                ...state,
                    cart: isSelected ?
                            state.cart.map( item => item._id === payload.id && item.qty > 1 ?
                            {...item, qty: item.qty - 1} : item)
                            : [...state.cart, {...item, qty:1}]
            }

        case ActionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart : state.cart.filter(item => item._id !== payload.id)
            }
        case ActionTypes.CLEAR_CART:
                return {
                    ...state,
                    cart : []
                }

        default:
            return state;
           
    }
}


export const selectedProducts = (state = {}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_SELECTED_PRODUCTS:

        return {...state, ...payload}
            
           
    
        default:
           return state;
    }
}


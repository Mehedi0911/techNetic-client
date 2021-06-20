import {combineReducers} from 'redux'
import { billingReducer } from './cartReducer'

import { allProductReducer, selectedProducts, cartProductReducer } from './productReducers'


export const rootReducer = combineReducers({
    allProducts : allProductReducer,
    singleProduct: selectedProducts,
    billing: billingReducer,
    
})
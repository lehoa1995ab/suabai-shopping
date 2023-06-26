import {productListReducer} from './productListStores/productList.reducer';
import {cartReducer} from './cartStores/cart.store';
import { combineReducers } from 'redux';
import {createStore} from 'redux'

const rootReducer = combineReducers(
    {
        productListStore: productListReducer,
        cartStore: cartReducer
    }
)
export const store = createStore(rootReducer);

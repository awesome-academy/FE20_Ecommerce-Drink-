import { combineReducers } from 'redux';
import products from './taskProduct';
import cart from './taskCart';
const appReducer = combineReducers({
    product: products,
    cart,
});

export default appReducer;
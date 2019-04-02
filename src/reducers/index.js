import { combineReducers } from 'redux';
import products from './taskProduct';
const appReducer = combineReducers({
    product: products
});

export default appReducer;
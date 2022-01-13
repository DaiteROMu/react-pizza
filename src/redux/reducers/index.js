import { combineReducers } from 'redux';
// Reducers
import categories from './categories';
import filters from './filters';
import pizzas from './pizzas';
import cart from './cart';

const rootReducer = combineReducers({
    categories,
    filters,
    pizzas,
    cart,
});

export default rootReducer;

import { getPizzas } from '../../services/pizzaService';
import { SET_PIZZAS_LOADED, SET_PIZZAS } from '../types';
import { sortingItems } from '../../helpers/sortings';

export const setPizzasLoaded = (payload) => ({
    type: SET_PIZZAS_LOADED,
    payload,
});

export const fetchPizzas = (category, sortBy, order) => (dispatch) => {
    dispatch(setPizzasLoaded(false));

    const currentSorting = sortingItems[sortBy];

    getPizzas(category, currentSorting.type, order).then((pizzas) => {
        dispatch(setPizzas(pizzas));
    });
};

export const setPizzas = (items) => ({
    type: SET_PIZZAS,
    payload: items,
});

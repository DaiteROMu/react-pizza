import {
    ADD_PIZZA_IN_CART_ITEM,
    ADD_PIZZA_TO_CART,
    CLEAR_CART,
    REMOVE_CART_ITEM,
    REMOVE_PIZZA_IN_CART_ITEM,
} from '../types';

export const addPizzaToCart = (pizzaObj) => ({
    type: ADD_PIZZA_TO_CART,
    payload: pizzaObj,
});

export const clearCart = () => ({
    type: CLEAR_CART,
});

export const removeCartItem = (pizzaId) => ({
    type: REMOVE_CART_ITEM,
    payload: pizzaId,
});

export const addPizzaInCartItem = (pizzaId) => ({
    type: ADD_PIZZA_IN_CART_ITEM,
    payload: pizzaId,
});

export const removePizzaInCartItem = (pizzaId) => ({
    type: REMOVE_PIZZA_IN_CART_ITEM,
    payload: pizzaId,
});

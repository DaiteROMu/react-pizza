import {
    SET_TOTAL_PRICE,
    SET_TOTAL_COUNT,
    ADD_PIZZA_TO_CART,
    CLEAR_CART,
    REMOVE_CART_ITEM,
    ADD_PIZZA_IN_CART_ITEM,
    REMOVE_PIZZA_IN_CART_ITEM,
} from '../types';

const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
};

const getTotalPrice = (arr) => arr.reduce((sum, pizza) => sum + pizza.price, 0);

const getCartTotalPriceAndCount = (arr) => {
    const allItems = [].concat.apply(
        [],
        Object.values(arr).map((obj) => obj.items)
    );

    const totalCount = allItems.length;
    const totalPrice = getTotalPrice(allItems);

    return { totalCount, totalPrice };
};

const cart = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PIZZA_TO_CART: {
            const currentPizzaItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload];

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPizzaItems,
                    totalPrice: getTotalPrice(currentPizzaItems),
                },
            };

            const { totalCount, totalPrice } =
                getCartTotalPriceAndCount(newItems);

            return {
                ...state,
                items: newItems,
                totalPrice,
                totalCount,
            };
        }

        case SET_TOTAL_PRICE:
            return {
                ...state,
                totalPrice: action.payload,
            };

        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.payload,
            };

        case ADD_PIZZA_IN_CART_ITEM: {
            const newObjItems = [
                ...state.items[action.payload].items,
                state.items[action.payload].items[0],
            ];

            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems),
                },
            };

            const { totalCount, totalPrice } =
                getCartTotalPriceAndCount(newItems);

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            };
        }

        case REMOVE_PIZZA_IN_CART_ITEM: {
            const oldItems = state.items[action.payload].items;

            const newObjItems =
                oldItems.length > 1
                    ? state.items[action.payload].items.slice(1)
                    : oldItems;

            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems),
                },
            };

            const { totalCount, totalPrice } =
                getCartTotalPriceAndCount(newItems);

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            };
        }

        case REMOVE_CART_ITEM: {
            const newItems = {
                ...state.items,
            };

            const currentTotalPrice = newItems[action.payload].totalPrice;
            const currentTotalCount = newItems[action.payload].items.length;

            delete newItems[action.payload];

            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount,
            };
        }

        case CLEAR_CART:
            return {
                ...state,
                items: {},
                totalPrice: 0,
                totalCount: 0,
            };

        default:
            return state;
    }
};

export default cart;

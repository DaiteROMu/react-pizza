import { SET_CATEGORIES_LOADED, SET_CATEGORIES } from '../types';

const initialState = {
    items: [],
    isLoaded: false,
};

const categories = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORIES:
            return {
                ...state,
                items: action.payload,
                isLoaded: true,
            };

        case SET_CATEGORIES_LOADED:
            return {
                ...state,
                isLoaded: action.payload,
            };

        default:
            return state;
    }
};

export default categories;

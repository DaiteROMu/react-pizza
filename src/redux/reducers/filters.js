import { SET_SORT_BY, SET_CATEGORY, SET_ORDER } from '../types';

const initialState = {
    category: null,
    sortBy: 0,
    order: 'desc',
};

const filters = (state = initialState, action) => {
    switch (action.type) {
        case SET_SORT_BY:
            return {
                ...state,
                sortBy: action.payload,
            };

        case SET_ORDER:
            return {
                ...state,
                order: action.payload,
            };

        case SET_CATEGORY:
            return {
                ...state,
                category: action.payload,
            };

        default:
            return state;
    }
};

export default filters;

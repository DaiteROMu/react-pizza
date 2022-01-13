import { SET_SORT_BY, SET_CATEGORY, SET_ORDER } from '../types';

export const setCategory = (categoryIndex) => ({
    type: SET_CATEGORY,
    payload: categoryIndex,
});

export const setSortBy = (type) => ({
    type: SET_SORT_BY,
    payload: type,
});

export const setOrder = (order) => ({
    type: SET_ORDER,
    payload: order,
});

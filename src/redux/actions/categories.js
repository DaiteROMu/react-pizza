import { getCategories } from '../../services/categoryService';
import { SET_CATEGORIES_LOADED, SET_CATEGORIES } from '../types';

export const setCategoriesLoaded = (payload) => ({
    type: SET_CATEGORIES_LOADED,
    payload,
});

export const fetchCategories = () => (dispatch) => {
    dispatch(setCategoriesLoaded(false));

    getCategories().then((categories) => {
        dispatch(setCategories(categories));
    });
};

export const setCategories = (items) => ({
    type: SET_CATEGORIES,
    payload: items,
});

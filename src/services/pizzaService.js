import axios from 'axios';

export const getPizzas = async (category, sortingType, sortingOrder) => {
    const response = await axios.get(
        `/pizzas?${
            category !== null ? `category=${category}` : ''
        }&_sort=${sortingType}&_order=${sortingOrder}`
    );

    return response.data;
};

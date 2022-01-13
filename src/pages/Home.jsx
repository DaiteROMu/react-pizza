import React from 'react';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { fetchPizzas } from '../redux/actions/pizzas';
import { addPizzaToCart } from '../redux/actions/cart';
// Components
import {
    Categories,
    SortPopup,
    PizzaBlock,
    PizzaLoadingBlock,
} from '../components';
// Action
import { setCategory, setOrder, setSortBy } from '../redux/actions/filters';

const Home = () => {
    const dispatch = useDispatch();

    const pizzas = useSelector(({ pizzas }) => pizzas.items);
    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);

    const { category, sortBy, order } = useSelector(({ filters }) => filters);

    const cartItems = useSelector(({ cart }) => cart.items);

    React.useEffect(() => {
        dispatch(fetchPizzas(category, sortBy, order));
    }, [dispatch, category, sortBy, order]);

    const onCategoryClick = React.useCallback(
        (index) => {
            dispatch(setCategory(index));
        },
        [dispatch]
    );

    const onSortClick = React.useCallback(
        (index) => {
            dispatch(setSortBy(index));
        },
        [dispatch]
    );

    const onOrderClick = React.useCallback(
        (order) => {
            dispatch(setOrder(order));
        },
        [dispatch]
    );

    const handleAddPizzaToCart = (pizza) => {
        dispatch(addPizzaToCart(pizza));
    };

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={category}
                    onCategoryClick={onCategoryClick}
                />

                <SortPopup
                    activeSortType={sortBy}
                    activeOrder={order}
                    onSortClick={onSortClick}
                    onOrderClick={onOrderClick}
                />
            </div>
            <h2 className="content__title">All pizza</h2>
            <div className="content__items content__items--main">
                {isLoaded
                    ? pizzas.map((pizza) => (
                          <PizzaBlock
                              key={pizza.id}
                              cartAddedCount={
                                  cartItems[pizza.id] &&
                                  cartItems[pizza.id].items.length
                              }
                              onClickAddPizza={handleAddPizzaToCart}
                              {...pizza}
                          />
                      ))
                    : Array(8)
                          .fill(0)
                          .map((_, index) => <PizzaLoadingBlock key={index} />)}
            </div>
        </div>
    );
};

export default Home;

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Styles
import './_pizza-block.scss';
// Helpers
import {
    availablePizzaTypes,
    availablePizzaSizes,
} from '../../helpers/pizzaParameters';
// Components
import Button from '../Button/Button';

const areEqualPizzaBlockProps = (prevProps, nextProps) => {
    return prevProps.cartAddedCount === nextProps.cartAddedCount;
};

const PizzaBlock = React.memo(
    ({
        id,
        name,
        imageUrl,
        types,
        sizes,
        price,
        cartAddedCount,
        onClickAddPizza,
    }) => {
        const [activePizzaType, setActivePizzaType] = React.useState(
            availablePizzaTypes[types[0]]
        );
        const [activePizzaSize, setActivePizzaSize] = React.useState(sizes[0]);

        const onSelectPizzaType = (index) => {
            setActivePizzaType(availablePizzaTypes[index]);
        };

        const onSelectPizzaSize = (index) => {
            setActivePizzaSize(availablePizzaSizes[index]);
        };

        const handleOnClickAddPizza = () => {
            const pizzaObj = {
                id,
                name,
                imageUrl,
                type: activePizzaType,
                size: activePizzaSize,
                price,
            };

            onClickAddPizza(pizzaObj);
        };

        return (
            <div className="pizza-block">
                <img className="pizza-block__image" src={imageUrl} alt={name} />
                <h4 className="pizza-block__title">{name}</h4>
                <div className="pizza-block__selector">
                    <ul>
                        {availablePizzaTypes.map((pizzaType, index) => (
                            <li
                                onClick={() => onSelectPizzaType(index)}
                                key={`${id}_${index}_${pizzaType}`}
                                className={classNames({
                                    active: activePizzaType === pizzaType,
                                    disabled: !types.includes(index),
                                })}
                            >
                                {pizzaType}
                            </li>
                        ))}
                    </ul>
                    <ul>
                        {availablePizzaSizes.map((pizzaSize, index) => (
                            <li
                                onClick={() => onSelectPizzaSize(index)}
                                key={`${id}_${index}_${pizzaSize}`}
                                className={classNames({
                                    active: activePizzaSize === pizzaSize,
                                    disabled: !sizes.includes(pizzaSize),
                                })}
                            >
                                {pizzaSize} sm
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="pizza-block__bottom">
                    <div className="pizza-block__price">
                        {Number(price.toFixed(2))} $
                    </div>
                    <Button
                        className="button--add"
                        onClick={handleOnClickAddPizza}
                        outline
                    >
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                fill="white"
                            />
                        </svg>
                        <span>Add</span>
                        {cartAddedCount > 0 && <i>{cartAddedCount}</i>}
                    </Button>
                </div>
            </div>
        );
    },
    areEqualPizzaBlockProps
);

PizzaBlock.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    types: PropTypes.arrayOf(PropTypes.number),
    sizes: PropTypes.arrayOf(PropTypes.number),
    price: PropTypes.number,
    cartAddedCount: PropTypes.number,
    onAddPizza: PropTypes.func,
};

PizzaBlock.defaultProps = {
    id: -1,
    name: '',
    imageUrl: '',
    types: [],
    sizes: [],
    price: 0,
    cartAddedCount: 0,
};

export default PizzaBlock;

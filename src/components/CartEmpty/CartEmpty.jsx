import React from 'react';
import { Link } from 'react-router-dom';
import cartEmptyImg from '../../assets/img/empty-cart.png';

const CartEmpty = () => {
    return (
        <div className="cart cart--empty">
            <h2>Cart is empty 😕.</h2>
            <p>
                You don't have an ordered pizza.
                <br />
                If you want to order pizza, go to main page.
            </p>
            <img src={cartEmptyImg} alt="Empty cart" />
            <Link to="/" className="button button--black">
                <span>Go back</span>
            </Link>
        </div>
    );
};

export default CartEmpty;

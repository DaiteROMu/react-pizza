import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
// Logo
import pizzaLogoSvg from '../../assets/img/pizza-logo.svg';
// Styles
import './_header.scss';
// Components
import CartButton from '../CartButton/CartButton';

const Header = () => (
    <div className="header">
        <div className="container">
            <Link to="/">
                <div className="header__logo">
                    <img width="38" src={pizzaLogoSvg} alt="Pizza logo" />
                    <div>
                        <h1>React Pizza</h1>
                        <p>Best pizza in the world!</p>
                    </div>
                </div>
            </Link>

            <div className="header__cart">
                <Routes>
                    <Route path="/" element={<CartButton />} />
                    <Route path="/*" />
                </Routes>
            </div>
        </div>
    </div>
);

export default Header;

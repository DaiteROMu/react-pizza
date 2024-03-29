import React from 'react';
import { Routes, Route } from 'react-router';
// Styles
import './scss/app.scss';
// Components
import { Header } from './components';
// Pages
import { Home, Cart, NotFound } from './pages';

function App() {
    return (
        <div className="wrapper">
            <Header />

            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;

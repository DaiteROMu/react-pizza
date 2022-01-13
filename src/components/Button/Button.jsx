import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Styles
import './_button.scss';

const Button = ({ onClick, className, outline, children }) => (
    <button
        onClick={onClick}
        className={classNames('button', className, {
            'button--outline': outline,
        })}
    >
        {children}
    </button>
);

Button.propTypes = {
    className: PropTypes.string,
    outline: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

export default Button;

import React from 'react';
import ContentLoader from 'react-content-loader';
// Styles
import './_pizza-block.scss';

const PizzaLoadingBlock = () => {
    return (
        <ContentLoader
            className="pizza-block"
            speed={2}
            width={290}
            height={480}
            viewBox="0 0 280 480"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="132" cy="142" r="130" />
            <rect x="0" y="285" rx="6" ry="6" width="290" height="25" />
            <rect x="0" y="330" rx="6" ry="6" width="290" height="85" />
            <rect x="40" y="430" rx="6" ry="6" width="80" height="40" />
            <rect x="170" y="430" rx="25" ry="25" width="105" height="45" />
        </ContentLoader>
    );
};

export default PizzaLoadingBlock;

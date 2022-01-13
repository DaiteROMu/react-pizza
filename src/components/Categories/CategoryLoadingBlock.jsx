import React from 'react';
import ContentLoader from 'react-content-loader';

const CategoryLoadingBlock = (props) => (
    <ContentLoader
        speed={2}
        width={130}
        height={50}
        viewBox="0 0 130 50"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="0" rx="30" ry="30" width="130" height="50" />
    </ContentLoader>
);

export default CategoryLoadingBlock;

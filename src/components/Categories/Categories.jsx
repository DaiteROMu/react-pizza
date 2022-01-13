import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../redux/actions/categories';
// Components
import CategoryLoadingBlock from './CategoryLoadingBlock';
// Styles
import './_categories.scss';

const Categories = React.memo(({ activeCategory, onCategoryClick }) => {
    const dispatch = useDispatch();

    const categories = useSelector(({ categories }) => categories.items);
    const isLoaded = useSelector(({ categories }) => categories.isLoaded);

    React.useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    return (
        <div className="categories">
            <ul>
                <li
                    className={classNames('category-item', {
                        active: activeCategory === null,
                    })}
                    onClick={() => onCategoryClick(null)}
                >
                    All
                </li>

                {isLoaded
                    ? categories.map((category, index) => (
                          <li
                              className={classNames('category-item', {
                                  active: activeCategory === index,
                              })}
                              key={`${category.name}_${category.id}`}
                              onClick={() => onCategoryClick(index)}
                          >
                              {category.name}
                          </li>
                      ))
                    : Array(3)
                          .fill(0)
                          .map((_, index) => (
                              <li key={index}>
                                  <CategoryLoadingBlock />
                              </li>
                          ))}
            </ul>
        </div>
    );
});

Categories.propTypes = {
    activeCategory: PropTypes.number,
    onCategoryClick: PropTypes.func,
};

Categories.defaultProps = {
    activeCategory: null,
};

export default Categories;

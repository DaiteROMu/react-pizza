import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Styles
import './_sort-popup.scss';
// Helpers
import { sortingItems } from '../../helpers/sortings';

const SortPopup = React.memo(
    ({ activeSortType, activeOrder, onSortClick, onOrderClick }) => {
        const [visiblePopup, setVisiblePopup] = React.useState(false);

        const sortRef = React.useRef();

        const activeLabel = sortingItems[activeSortType].displayName;

        const toggleVisiblePopup = () => {
            setVisiblePopup(!visiblePopup);
        };

        const handleOnOrderClick = () => {
            onOrderClick(activeOrder === 'desc' ? 'asc' : 'desc');
        };

        const onSelectItem = (index) => {
            setVisiblePopup(false);
            onSortClick(index);
        };

        const handleOutsideClick = (e) => {
            if (!e.path.includes(sortRef.current)) {
                setVisiblePopup(false);
            }
        };

        React.useEffect(() => {
            document.body.addEventListener('click', handleOutsideClick);

            return () => {
                document.body.removeEventListener('click', handleOutsideClick);
            };
        }, []);

        return (
            <div className="sort" ref={sortRef}>
                <div className="sort__label">
                    <svg
                        className={classNames('popup-position', {
                            rotated: visiblePopup,
                        })}
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                            fill="#2c2c2c"
                        />
                    </svg>

                    <b>Sort by:</b>
                    <span onClick={toggleVisiblePopup}>{activeLabel}</span>

                    <svg
                        className={classNames('order-toggle', {
                            rotated: activeOrder === 'asc',
                        })}
                        onClick={handleOnOrderClick}
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd"
                    >
                        <path
                            d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z"
                            fill="#fe5f1e"
                        />
                    </svg>
                </div>
                {visiblePopup && (
                    <div className="sort__popup">
                        <ul>
                            {sortingItems &&
                                sortingItems.map((itemObj, index) => (
                                    <li
                                        className={
                                            index === activeSortType
                                                ? 'active'
                                                : ''
                                        }
                                        key={`${itemObj.type}_${index}`}
                                        onClick={() => onSelectItem(index)}
                                    >
                                        {itemObj.displayName}
                                    </li>
                                ))}
                        </ul>
                    </div>
                )}
            </div>
        );
    }
);

SortPopup.propTypes = {
    activeSortType: PropTypes.number.isRequired,
    onSortClick: PropTypes.func,
};

SortPopup.defaultProps = {
    activeSortType: 0,
};

export default SortPopup;

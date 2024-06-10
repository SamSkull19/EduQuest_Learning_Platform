import PropTypes from 'prop-types';

const Pagination = ({ itemsPerPage, totalItems, currentPage, paginate }) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <ul className="pagination flex gap-8">
            {pageNumbers.map(number => (
                <li key={number} className={currentPage === number ? 'active' : ''}>
                    <div className="join">
                        <button onClick={() => paginate(number)} className="page-link join-item btn bg-teal-800 text-white">{number}</button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

Pagination.propTypes = {
    itemsPerPage: PropTypes.number.isRequired,
    totalItems: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    paginate: PropTypes.func.isRequired,
};

export default Pagination;
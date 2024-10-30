import PropTypes from 'prop-types';

const Pagination = ({ currentPage, productsPerPage, totalProducts, paginate }) => {
    const totalPages = Math.ceil(totalProducts / productsPerPage);

    return (
        <nav aria-label="Page navigation" className="rounded-lg shadow-lg p-4">
            <ul className="flex justify-center space-x-2">
                <li>
                    <button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`px-4 py-2 text-white rounded-md transition duration-200 ${currentPage === 1 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                            }`}
                    >
                        Previous
                    </button>
                </li>
                {[...Array(totalPages)].map((_, index) => {
                    const page = index + 1;
                    return (
                        <li key={page}>
                            <button
                                onClick={() => paginate(page)}
                                className={`px-4 py-2 text-white rounded-md transition duration-200 ${currentPage === page ? 'bg-blue-800' : 'bg-blue-600 hover:bg-blue-700'
                                    }`}
                            >
                                {page}
                            </button>
                        </li>
                    );
                })}
                <li>
                    <button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`px-4 py-2 text-white rounded-md transition duration-200 ${currentPage === totalPages ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                            }`}
                    >
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );
};

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    productsPerPage: PropTypes.number.isRequired,
    totalProducts: PropTypes.number.isRequired,
    paginate: PropTypes.func.isRequired,
};

export default Pagination;

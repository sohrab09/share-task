import PropTypes from "prop-types";


const SearchForm = ({ products, handleSearch, search, handleCategorySelect, selectedCategory, dropdownOpen, setDropdownOpen }) => {

    const categories = ['All categories', ...new Set(products.map((product) => product.category))];

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <form className="max-w-lg mx-auto">
            <div className="flex">

                <button
                    id="dropdown-button"
                    onClick={toggleDropdown}
                    className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                    type="button"
                >
                    {selectedCategory}
                    <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                    </svg>
                </button>

                {dropdownOpen && (
                    <div className="z-10 absolute mt-12 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                            {categories.map((category) => (
                                <li key={category}>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            handleCategorySelect(category);
                                            setDropdownOpen(false);
                                        }}
                                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        {category}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className="relative w-full">
                    <input
                        type="search"
                        id="search-dropdown"
                        className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                        placeholder="Search products..."
                        required
                        value={search}
                        onChange={handleSearch}
                    />
                </div>
            </div>
        </form>
    );
};

SearchForm.propTypes = {
    products: PropTypes.array.isRequired,
    handleSearch: PropTypes.func.isRequired,
    search: PropTypes.string.isRequired,
    selectedCategory: PropTypes.string.isRequired,
    handleCategorySelect: PropTypes.func.isRequired,
    dropdownOpen: PropTypes.bool.isRequired,
    setDropdownOpen: PropTypes.func.isRequired,
};

export default SearchForm;

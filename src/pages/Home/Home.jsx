import { useEffect, useState } from "react";
import MainLayout from '../../layouts/MainLayout';
import useProductStore from '../../state/productStore';
import Pagination from "../../components/Pagination/Pagination";
import Spinner from "../../components/Spinner/Spinner";
import NoProductsFound from "../../components/NoProductsFound/NoProductsFound";
import ErrorDisplay from "../../components/ErrorDisplay/ErrorDisplay";
import SearchForm from "./SearchForm";

const Home = () => {
    const { products, fetchProducts, isLoading, error } = useProductStore();

    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(10);
    const [search, setSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All categories');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setDropdownOpen(false);
    };

    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = selectedCategory === 'All categories' || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        setCurrentPage(1);
    }, [products, search, selectedCategory]);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Spinner />
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-screen">
                <ErrorDisplay errorMessage={error} />
            </div>
        );
    }

    return (
        <div className="mx-auto mt-10">
            <SearchForm
                products={products}
                handleSearch={handleSearch}
                search={search}
                selectedCategory={selectedCategory}
                handleCategorySelect={handleCategorySelect}
                dropdownOpen={dropdownOpen}
                setDropdownOpen={setDropdownOpen}
            />

            {filteredProducts.length === 0 ? (
                <div className="flex justify-center items-center h-32 mt-6">
                    <NoProductsFound message="No products found." />
                </div>
            ) : (
                <MainLayout products={currentProducts} />
            )}

            <Pagination
                currentPage={currentPage}
                productsPerPage={productsPerPage}
                totalProducts={filteredProducts.length}
                paginate={paginate}
            />
        </div>
    );
};

export default Home;

import { useEffect, useState } from "react";
import MainLayout from '../../layouts/MainLayout';
import useProductStore from '../../state/productStore';
import Pagination from "../../components/Pagination/Pagination";
import Spinner from "../../components/Spinner/Spinner";
import NoProductsFound from "../../components/NoProductsFound/NoProductsFound";
import ErrorDisplay from "../../components/ErrorDisplay/ErrorDisplay";

const Home = () => {
    const { products, fetchProducts, isLoading, error } = useProductStore();

    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(10);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        setCurrentPage(1);
    }, [products]);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Spinner />
            </div>
        )
    };

    if (error) {
        return (
            <div className="flex justify-center items-center h-screen">
                <ErrorDisplay errorMessage={error} />
            </div>
        )
    };

    if (products.length === 0) {
        return (
            <div className="flex justify-center items-center h-screen">
                <NoProductsFound />
            </div>
        );
    };

    return (
        <div className='mx-auto mt-10'>
            <MainLayout products={currentProducts} />

            <Pagination
                currentPage={currentPage}
                productsPerPage={productsPerPage}
                totalProducts={products.length}
                paginate={paginate}
            />
        </div>
    );
};

export default Home;

import { useEffect } from 'react';
import MainLayout from '../../layouts/MainLayout'
import useProductStore from '../../state/productStore';
import { Watch } from 'react-loader-spinner';

const Home = () => {

    const { products, fetchProducts, isLoading, error } = useProductStore();

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    if (isLoading) return <div className="flex justify-center items-center h-screen">
        <Watch
            visible={true}
            height="160"
            width="160"
            radius="48"
            color="#4fa94d"
            ariaLabel="watch-loading"
            wrapperStyle={{}}
            wrapperClass=""
        />
    </div>;
    if (error) return <div className="flex justify-center items-center h-screen">Error: {error}</div>;

    return (
        <div className='mx-auto mt-20'>
            <MainLayout products={products} />
        </div>
    )
}

export default Home
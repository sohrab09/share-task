import { useEffect } from 'react';
import MainLayout from '../../layouts/MainLayout'
import useProductStore from '../../state/productStore';

const Home = () => {

    const { products, fetchProducts, isLoading, error } = useProductStore();

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className='mx-auto mt-20'>
            <MainLayout products={products} />
        </div>
    )
}

export default Home
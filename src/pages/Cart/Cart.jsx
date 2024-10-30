import NoProductsFound from '../../components/NoProductsFound/NoProductsFound';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import ProductCard from '../../components/ProductCard/ProductCard';
import useProductStore from '../../state/productStore';

const Cart = () => {
    const { cart } = useProductStore();

    return (
        <div className="max-w-7xl max-lg:max-w-4xl mx-auto p-6">
            <h2 className="text-3xl font-extrabold text-gray-800 text-center mt-10">Shopping Cart</h2>

            {
                cart.length === 0 && (
                    <NoProductsFound message={"No products in the cart."} />
                )
            }

            <div className="grid lg:grid-cols-3 gap-4 relative mt-8">
                <div className="lg:col-span-2 space-y-4">
                    {
                        cart && cart.map((item, index) => {
                            return (
                                <ProductCard
                                    key={index}
                                    product={item}
                                    imgSrc={item.images[0]}
                                    title={item.title}
                                    price={item.price}
                                    quantity={item.quantity}
                                    description={item.description}
                                    stock={item.stock}
                                    reviews={item.reviews}
                                />
                            );
                        })
                    }
                </div>
                {cart.length > 0 && <OrderSummary />}
            </div>
        </div>
    );
};

export default Cart;

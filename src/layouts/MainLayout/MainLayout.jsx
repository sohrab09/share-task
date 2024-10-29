const products = [
    {
        id: 1,
        image: 'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png',
        title: 'Fabrilife Mens Premium Designer Edition T Shirt',
        price: 2500,
        discountedPrice: 2300,
        discount: 200,
        company: 'Fabrilife',
    },
    {
        id: 2,
        image: 'https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png',
        title: 'Fabrilife Mens Premium Designer Edition T Shirt',
        price: 2500,
        company: 'Fabrilife',
    },
    {
        id: 3,
        image: 'https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png',
        title: 'Fabrilife Mens Premium Designer Edition T Shirt',
        price: 2500,
        discountedPrice: 2200,
        discount: 300,
        company: 'Fabrilife',
    },
    {
        id: 4,
        image: 'https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/1.png',
        title: 'Fabrilife Mens Premium Designer Edition T Shirt',
        price: 2500,
        company: 'Fabrilife',
    },
    {
        id: 5,
        image: 'https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png',
        title: 'Fabrilife Mens Premium Designer Edition T Shirt',
        price: 2500,
        company: 'Fabrilife',
    },
];

const MainLayout = () => {
    return (
        <div className="flex items-center justify-center py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-7xl px-4">
                {products.map((product) => (
                    <div key={product.id} className="p-3 relative group hover:shadow-lg rounded-lg">
                        {product.discount && (
                            <div className="absolute top-6 left-2 bg-orange-500 text-white px-2 py-1 rounded text-xs font-semibold">
                                -৳{product.discount}
                            </div>
                        )}

                        <div className="bg-neutral-50 rounded-lg overflow-hidden h-52">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-full object-cover"
                            />

                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center space-y-2 transition-opacity duration-300">
                                <button className="bg-white text-gray-500 px-4 py-2 rounded-full text-sm font-semibold w-3/4 hover:bg-gray-50">
                                    Add to Cart
                                </button>
                                <button className="bg-white text-gray-500 px-4 py-2 rounded-full text-sm font-semibold w-3/4 hover:bg-gray-50">
                                    Quick View
                                </button>
                            </div>

                            <div className="absolute top-4 right-4 text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button>❤️</button>
                            </div>
                        </div>

                        <h3 className="text-gray-400 text-sm font-medium mt-3 line-clamp-2">
                            {product.company}
                        </h3>
                        <h3 className="text-gray-800 text-sm font-medium mb-2 line-clamp-2">
                            {product.title}
                        </h3>
                        <div className="flex items-center space-x-2">
                            <span className="text-blue-700 text-lg font-semibold">
                                ৳{product.discountedPrice || product.price}
                            </span>
                            {product.discountedPrice && (
                                <span className="text-gray-500 line-through text-sm">
                                    ৳{product.price}
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainLayout;

import PropTypes from "prop-types";

const ProductDescription = ({ product }) => {

    const discountPrice = (product.price * (1 - product.discountPercentage / 100)).toFixed(2);

    return (
        <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-800">{product.title}</h2>
            <p className="text-gray-500 text-sm">{product.category} - {product.brand}</p>
            <div className="flex flex-wrap gap-4 mt-4">
                <p className="text-gray-800 text-xl font-bold">${discountPrice}</p>
                <p className="text-gray-400 text-xl">
                    <strike>${product.price}</strike>
                    <span className="text-sm ml-1">Discount {product.discountPercentage}%</span>
                </p>
            </div>

            <div className="flex space-x-2 mt-4">
                {[...Array(Math.floor(product.rating))].map((_, i) => (
                    <svg
                        key={i}
                        className="w-5 fill-orange-400"
                        viewBox="0 0 14 13"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                ))}
            </div>

            <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-800">About the product</h3>
                <p className="mt-4 text-sm text-gray-800">{product.description}</p>
                <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-800">
                    <li>SKU: {product.sku}</li>
                    <li>Weight: {product.weight}g</li>
                    <li>Dimensions: {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth} mm</li>
                    <li>Warranty: {product.warrantyInformation}</li>
                    <li>Shipping: {product.shippingInformation}</li>
                    <li>Availability: {product.availabilityStatus}</li>
                </ul>
            </div>

            <button
                type="button"
                className="w-full mt-8 px-6 py-3 bg-orange-400 hover:bg-orange-500 text-white text-sm font-semibold rounded-md"
            >
                Add to cart
            </button>

            <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-800">Reviews ({product.reviews.length})</h3>
                <div className="space-y-3 mt-4">
                    {product.reviews.map((review, idx) => (
                        <div key={idx} className="border-b pb-3 mb-3">
                            <p className="text-sm font-bold text-gray-800">{review.reviewerName}</p>
                            <p className="text-xs text-gray-600">{new Date(review.date).toLocaleDateString()}</p>
                            <p className="text-sm mt-1">{review.comment}</p>
                            <div className="flex mt-1">
                                {[...Array(review.rating)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-4 fill-orange-400"
                                        viewBox="0 0 14 13"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-800">Return Policy</h3>
                <p className="text-sm text-gray-800 mt-2">{product.returnPolicy}</p>
            </div>
        </div>
    )
}

ProductDescription.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        title: PropTypes.string.isRequired,
        brand: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        discountPercentage: PropTypes.number,
        description: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        reviews: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
        stock: PropTypes.number.isRequired,
        warrantyInformation: PropTypes.string.isRequired,
        shippingInformation: PropTypes.string.isRequired,
        availabilityStatus: PropTypes.string.isRequired,
        dimensions: PropTypes.shape({
            width: PropTypes.number.isRequired,
            height: PropTypes.number.isRequired,
            depth: PropTypes.number.isRequired,
        }),
        sku: PropTypes.string.isRequired,
        weight: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
        returnPolicy: PropTypes.string.isRequired,
    }).isRequired,
};

export default ProductDescription;
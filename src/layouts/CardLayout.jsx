import { faHeart } from "@fortawesome/free-regular-svg-icons/faHeart";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import useProductStore from '../state/productStore';

const CardLayout = ({ product }) => {
    const { addToWishlist, removeFromWishlist, wishlist } = useProductStore();

    const title = product.title.length > 25 ? product.title.slice(0, 25) + "..." : product.title;

    const isInWishlist = wishlist.some(item => item.id === product.id);

    const handleWishlistToggle = () => {
        if (isInWishlist) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist(product);
        }
    };

    return (
        <div key={product.id} className="p-3 relative group hover:shadow-lg rounded-lg">
            {product.discountPercentage && (
                <div className="absolute top-6 left-2 bg-orange-500 text-white px-2 py-1 rounded text-xs font-semibold">
                    -<span className="text-orange-100 text-base mr-1">৳</span>{product.discountPercentage}
                </div>
            )}

            <div className="bg-neutral-50 rounded-lg overflow-hidden h-52 hover:bg-gray-400">
                <img
                    src={product.images[0]}
                    alt={product.title}
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center space-y-2 transition-opacity duration-300">
                    <button className="bg-transparent text-slate-100 px-4 py-2 border border-slate-300 rounded-lg text-sm font-semibold w-3/4">
                        <FontAwesomeIcon icon={faCartShopping} /> {" "}
                        <span>Add to Cart</span>
                    </button>

                    <button className="bg-transparent text-slate-100 px-4 py-2 border border-slate-300 rounded-lg text-sm font-semibold w-3/4">
                        <FontAwesomeIcon icon={faEye} /> Quick View
                    </button>
                </div>

                <div className="absolute top-4 right-4 text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button onClick={handleWishlistToggle}>
                        <FontAwesomeIcon
                            icon={faHeart}
                            color={isInWishlist ? "red" : "green"}
                        />
                    </button>
                </div>
            </div>

            <h3 className="text-gray-400 text-sm font-medium mt-3 line-clamp-2">
                {product.brand}
            </h3>
            <h3 className="text-gray-800 text-sm font-medium mb-2 line-clamp-2">
                {title}
            </h3>
            <div className="flex items-center space-x-2">
                <span className="text-blue-700 text-lg font-semibold">
                    ৳{product.price}
                </span>
                {product.discountPercentage && (
                    <span className="text-gray-500 line-through text-sm">
                        ৳{product.discountPercentage}
                    </span>
                )}
            </div>
        </div>
    );
}

CardLayout.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        title: PropTypes.string.isRequired,
        brand: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        discountPercentage: PropTypes.number,
    }).isRequired,
};

export default CardLayout;

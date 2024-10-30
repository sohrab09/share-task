import PropTypes from "prop-types";
import QuantityControl from "../QuantityControl/QuantityControl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons/faHeart";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import useProductStore from "../../state/productStore";


const ProductCard = ({ product, imgSrc, title, price, quantity, description, stock, reviews }) => {

    const { addToCart, removeFromCart, decreaseQuantity, addToWishlist, removeFromWishlist, cart, wishlist } = useProductStore();

    const cartItem = cart.find(item => item.id === product.id);
    const wishlistItem = wishlist.find(item => item.id === product.id);

    const isInCart = Boolean(cartItem);
    const isInWishlist = Boolean(wishlistItem);

    const handleCartToggle = () => {
        if (isInCart) {
            removeFromCart(product.id);
        } else {
            addToCart(product);
        }
    };

    const handleWishlistToggle = () => {
        if (isInWishlist) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist(product);
        }
    };

    const handleAddQuantity = () => {
        addToCart(product);
    };

    const handleDecreaseQuantity = () => {
        decreaseQuantity(product.id);
    };

    return (
        <div className="p-6 bg-white shadow-[0_0px_4px_0px_rgba(6,81,237,0.2)] rounded-md relative">
            <div className="flex items-center max-sm:flex-col gap-4 max-sm:gap-6">
                <div className="w-52 shrink-0">
                    <img src={imgSrc} alt={title} className="w-full h-full object-contain" />
                </div>
                <div className="sm:border-l sm:pl-4 sm:border-gray-300 w-full">
                    <h3 className="text-xl font-bold text-gray-800">{title}</h3>
                    <h5 className="mt-4 text-sm text-gray-800 space-y-2">{description}</h5>
                    <h5 className="mt-4 text-sm text-gray-800 space-y-2 font-bold">Stock: {stock}</h5>
                    <ul className="mt-4 text-sm text-gray-800 space-y-2">
                        Review: {reviews.length}
                    </ul>

                    <hr className="border-gray-300 my-4" />
                    <div className="flex items-center justify-between flex-wrap gap-4">
                        <QuantityControl
                            quantity={quantity}
                            handleAddQuantity={handleAddQuantity}
                            handleDecreaseQuantity={handleDecreaseQuantity}
                        />
                        <div className="flex items-center">
                            <h4 className="text-lg font-bold text-gray-800"> <span className="text-2xl">৳</span> {price}</h4>
                            <FontAwesomeIcon
                                icon={faXmark}
                                className="cursor-pointer absolute top-3.5 right-3.5 hover:text-red-500"
                                size="lg"
                                onClick={handleCartToggle}
                            />
                            <FontAwesomeIcon
                                icon={faHeart}
                                className="cursor-pointer absolute top-3.5 right-5.5"
                                size="lg"
                                color={isInWishlist ? "red" : "green"}
                                onClick={handleWishlistToggle}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
    }).isRequired,
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
    reviews: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default ProductCard;
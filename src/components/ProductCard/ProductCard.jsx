import PropTypes from "prop-types";
import QuantityControl from "../QuantityControl/QuantityControl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons/faHeart";


const ProductCard = ({ imgSrc, title, price, quantity, description, stock, reviews }) => {
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
                        <QuantityControl quantity={quantity} />
                        <div className="flex items-center">
                            <h4 className="text-lg font-bold text-gray-800"> <span className="text-2xl">৳</span> {price}</h4>
                            <FontAwesomeIcon
                                icon={faHeart}
                                className="cursor-pointer shrink-0 absolute top-3.5 right-3.5"
                                size="2x"
                                color="red"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

ProductCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
    reviews: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default ProductCard;
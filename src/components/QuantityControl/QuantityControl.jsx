import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const QuantityControl = ({ quantity }) => {
    return (
        <div className="flex items-center gap-3">
            <h4 className="text-sm font-bold text-gray-800">Qty:</h4>
            <button type="button" className="flex items-center justify-center w-5 h-5 bg-blue-600 outline-none rounded-full">
                <FontAwesomeIcon icon={faMinus} className="text-white w-2" />
            </button>
            <span className="font-bold text-sm leading-[16px]">{quantity}</span>
            <button type="button" className="flex items-center justify-center w-5 h-5 bg-blue-600 outline-none rounded-full">
                <FontAwesomeIcon icon={faPlus} className="text-white w-2" />
            </button>
        </div>
    )
};

QuantityControl.propTypes = {
    quantity: PropTypes.number.isRequired,
};

export default QuantityControl;
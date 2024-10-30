import PropTypes from "prop-types";

const NoProductsFound = ({ message }) => {
    return (
        <div className="flex justify-center items-center h-screen">
            <h1 className="text-6xl text-gray-600">{message}</h1>
        </div>
    );
};

NoProductsFound.propTypes = {
    message: PropTypes.string.isRequired,
};

export default NoProductsFound;

import PropTypes from "prop-types";

const ErrorDisplay = ({ errorMessage }) => {

    return (
        <div className="flex justify-center items-center h-screen">
            <h1 className="text-8xl text-red-600">Error: {errorMessage}</h1>
        </div>
    );
};

ErrorDisplay.propTypes = {
    errorMessage: PropTypes.string.isRequired,
};

export default ErrorDisplay;

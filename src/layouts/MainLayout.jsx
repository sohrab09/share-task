import PropTypes from "prop-types";
import CardLayout from "./CardLayout";

const MainLayout = ({ products }) => {
    return (
        <div className="flex items-center justify-center py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-7xl px-4">
                {products.map((product) => (
                    <CardLayout key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

MainLayout.propTypes = {
    products: PropTypes.arrayOf().isRequired,
};

export default MainLayout;

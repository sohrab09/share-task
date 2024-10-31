import { useLocation } from "react-router-dom";
import ProductImage from "../../components/ProductImage/ProductImage";
import ProductDescription from "../../components/ProductDescription/ProductDescription";

const Product = () => {

    const { product } = useLocation().state;

    return (
        <div className="flex items-center justify-center py-10">
            <div className="p-4 lg:max-w-7xl max-w-xl mx-auto">
                <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
                    <ProductImage product={product} />

                    <ProductDescription product={product} />
                </div>
            </div>
        </div>
    )
}

export default Product
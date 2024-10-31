import PropTypes from 'prop-types'

const ProductImage = ({ product }) => {
    return (
        <div className="min-h-[500px] lg:col-span-3 bg-gradient-to-tr from-[#F8C794] via-[#FFE0B5] to-[#FFF2D7] rounded-lg w-full lg:sticky top-0 text-center p-6">
            <img
                src={product.images[0]}
                alt={product.title}
                className="w-3/5 rounded object-cover mx-auto py-6"
            />
            <hr className="border-white border my-6" />
            <div className="flex flex-wrap gap-x-4 gap-y-6 justify-center mx-auto">
                {product.images.map((img, index) => (
                    <div
                        key={index}
                        className="w-20 h-20 max-lg:w-16 max-lg:h-16 bg-[#fff2c9] p-3 rounded-lg"
                    >
                        <img
                            src={img}
                            alt={`Product ${index + 1}`}
                            className="w-full h-full cursor-pointer"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

ProductImage.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
};

export default ProductImage;
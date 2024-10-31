import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import useProductStore from '../../state/productStore';
import NoProductsFound from "../../components/NoProductsFound/NoProductsFound";

const Wishlist = () => {

    const { wishlist, addToCart, removeFromWishlist } = useProductStore();

    return (
        <div className="container mx-auto p-4 sm:p-8 min-h-screen">
            <h2 className="text-3xl font-extrabold text-gray-800 text-center mt-10">Your Favorite Items</h2>

            {
                wishlist.length > 0 ? (
                    <>
                        <p className="text-gray-500 mb-6">There are {wishlist.length} products in this list</p>

                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white rounded-lg shadow-md">
                                <thead>
                                    <tr>
                                        <th className="px-6 py-4 text-left text-gray-500 font-medium"></th>
                                        <th className="px-6 py-4 text-left text-gray-500 font-medium">Product</th>
                                        <th className="px-6 py-4 text-left text-gray-500 font-medium">Price</th>
                                        <th className="px-6 py-4 text-left text-gray-500 font-medium">Stock Status</th>
                                        <th className="px-6 py-4 text-left text-gray-500 font-medium">Action</th>
                                        <th className="px-6 py-4 text-center text-gray-500 font-medium">Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {wishlist.map((item) => {

                                        return (
                                            <tr key={item.id} className="border-t hover:bg-gray-50">
                                                <td className="px-6 py-4">
                                                    <img src={item.images[0]} alt={item.title} className="w-16 h-16 rounded-full object-cover border border-slate-200 bg-slate-200" />
                                                </td>
                                                <td className="px-6 py-4 flex items-center space-x-4">
                                                    <div>
                                                        <p className="text-gray-800 font-semibold">{item.title}</p>
                                                        <p className="text-gray-500 text-sm">
                                                            {item.category} - {item.brand}
                                                        </p>
                                                        <p className="text-gray-500 text-sm">
                                                            {
                                                                item.description.length > 100 ? item.description.slice(0, 100) + "..." : item.description
                                                            }
                                                        </p>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-gray-800 font-medium">৳ {item.price}</td>
                                                <td className="px-6 py-4">
                                                    {item.availabilityStatus === 'In Stock' ? (
                                                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">In Stock</span>
                                                    ) : (
                                                        <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs">Out of Stock</span>
                                                    )}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {item.availabilityStatus === 'In Stock' ? (
                                                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm" onClick={() => addToCart(item)}>
                                                            Add to Cart
                                                        </button>
                                                    ) : (
                                                        <button className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm">
                                                            Contact Us
                                                        </button>
                                                    )}
                                                </td>
                                                <td className="px-6 py-4 text-center">
                                                    <button className="text-gray-400 hover:text-red-600 transition-colors">
                                                        <FontAwesomeIcon
                                                            icon={faTrashCan}
                                                            onClick={() => removeFromWishlist(item.id)}
                                                        />
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </>
                ) : (
                    <NoProductsFound message="No products found in your wishlist" />
                )
            }
        </div>
    );
};


export default Wishlist;

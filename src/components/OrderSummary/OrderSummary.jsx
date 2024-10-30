
const OrderSummary = () => {
    return (
        <div className="bg-white h-max rounded-md p-6 shadow-[0_0px_4px_0px_rgba(6,81,237,0.2)] sticky top-0">
            <h3 className="text-xl font-bold text-gray-800">Order Summary</h3>
            <ul className="text-gray-800 text-sm divide-y mt-4">
                <li className="flex flex-wrap gap-4 py-3">Subtotal <span className="ml-auto font-bold"><span className="text-2xl mr-2">৳</span>2000.00</span></li>
                <li className="flex flex-wrap gap-4 py-3">Shipping <span className="ml-auto font-bold"><span className="text-2xl mr-2">৳</span>160.00</span></li>
                <li className="flex flex-wrap gap-4 py-3">Tax <span className="ml-auto font-bold"><span className="text-2xl mr-2">৳</span>20.00</span></li>
                <li className="flex flex-wrap gap-4 py-3 font-bold">Total <span className="ml-auto"><span className="text-2xl mr-2">৳</span>2180.00</span></li>
            </ul>
            <button type="button" className="mt-4 text-sm px-6 py-3 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md">Make Payment</button>
        </div>
    )
}

export default OrderSummary
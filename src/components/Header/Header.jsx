import { useState } from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import useProductStore from '../../state/productStore';


const Header = () => {

    const { cart, wishlist } = useProductStore();

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-white">
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <header className="absolute inset-x-0 top-0 z-50">
                    <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                        <div className="flex lg:flex-1">
                            <Link to="/" className="-m-1.5 p-1.5">
                                <img
                                    className="h-12 w-auto"
                                    src={logo}
                                    alt="Logo"
                                />
                            </Link>
                        </div>
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                                onClick={toggleMenu}
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                        </div>
                        <div className="hidden lg:flex lg:gap-x-12">
                            <Link to="/" className="text-xl font-semibold text-gray-900">Home</Link>
                            <Link to="/wishlist" className="flex items-center text-xl font-semibold text-gray-900 hover:text-gray-700 transition-colors duration-200">
                                Wishlist
                                {wishlist.length > 0 && (
                                    <span className="ml-2 text-sm font-semibold text-white bg-green-400 rounded-full h-8 w-8 flex items-center justify-center">
                                        {wishlist.length}
                                    </span>
                                )}
                            </Link>

                        </div>
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                            <Link to="/cart" className="flex items-center text-xl font-semibold text-gray-900 hover:text-gray-700 transition-colors duration-200">
                                <FontAwesomeIcon icon={faCartShopping} /> {" "}
                                Cart {" "}
                                {
                                    cart.length > 0 && (
                                        <span className="ml-2 text-sm font-semibold text-white bg-green-400 rounded-full h-8 w-8 flex items-center justify-center">{cart.length}</span>
                                    )
                                }
                            </Link>
                        </div>
                    </nav>
                    {isOpen && (
                        <div className="lg:hidden" role="dialog" aria-modal="true">
                            <div className="fixed inset-0 z-50"></div>
                            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                                <div className="flex items-center justify-between">
                                    <a href="#" className="-m-1.5 p-1.5">
                                        <img
                                            className="h-12 w-auto"
                                            src={logo}
                                            alt="Logo"
                                        />
                                    </a>
                                    <button
                                        type="button"
                                        className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                        onClick={toggleMenu}
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <svg
                                            className="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="mt-6 flow-root">
                                    <div className="-my-6 divide-y divide-gray-500/10">
                                        <div className="space-y-2 py-6">
                                            <Link to="/" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Home</Link>
                                            <Link to="/wishlist" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Wishlist</Link>
                                        </div>
                                        <div className="py-6">
                                            <Link to="/" className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-50">Cart <FontAwesomeIcon icon={faCartShopping} /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </header>
            </div>
        </div>
    );
};

export default Header;

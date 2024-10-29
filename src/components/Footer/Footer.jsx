import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900">
            <div className="relative isolate px-6 pt-14 p-4">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link to="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img
                            src={logo}
                            className="h-12"
                            alt="StylesPrint Logo"
                        />
                    </Link>

                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link to="/" className="me-4 md:me-6">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/wishlist" className="me-4 md:me-6">
                                Wishlist
                            </Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © {new Date().getFullYear()} {' '}
                    <Link to="/" className="text-2xl font-bold uppercase">Styles Print</Link>
                    . All Rights Reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;

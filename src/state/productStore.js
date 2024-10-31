import { create } from 'zustand';
import axiosInstance from '../config/axios';
import { toast } from 'react-toastify';

const toastOptions = {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
};

const useProductStore = create((set) => ({
    products: [],
    isLoading: false,
    error: null,
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    wishlist: JSON.parse(localStorage.getItem('wishlist')) || [],

    fetchProducts: async () => {
        set({ isLoading: true, error: null });
        try {
            const response = await axiosInstance.get('/products');
            set({ products: response.data.products || [], isLoading: false });
        } catch (error) {
            set({ error: error.message, isLoading: false });
        }
    },

    addToCart: (product) => set((state) => {
        const existingProduct = state.cart.find(item => item.id === product.id);

        const newCart = existingProduct
            ? state.cart.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
            : [...state.cart, { ...product, quantity: 1 }];

        localStorage.setItem('cart', JSON.stringify(newCart));
        toast.success(`${product.title} added to cart!`, toastOptions);
        return { cart: newCart };
    }),

    decreaseQuantity: (productId) => set((state) => {
        const existingProduct = state.cart.find(item => item.id === productId);
        let newCart;

        if (existingProduct.quantity > 1) {
            newCart = state.cart.map(item =>
                item.id === productId
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            );
        } else {
            newCart = state.cart.filter(item => item.id !== productId);
            toast.error(`${existingProduct.title} removed from cart!`, toastOptions);
        }

        localStorage.setItem('cart', JSON.stringify(newCart));
        return { cart: newCart };
    }),

    removeFromCart: (productId) => set((state) => {
        const existingProduct = state.cart.find(item => item.id === productId);
        const newCart = state.cart.filter(product => product.id !== productId);
        localStorage.setItem('cart', JSON.stringify(newCart));
        toast.error(`${existingProduct.title} removed from cart!`, toastOptions);
        return { cart: newCart };
    }),

    addToWishlist: (product) => set((state) => {
        const newWishlist = [...state.wishlist, product];
        localStorage.setItem('wishlist', JSON.stringify(newWishlist));
        toast.success(`${product.title} added to wishlist!`, toastOptions);
        return { wishlist: newWishlist };
    }),

    removeFromWishlist: (productId) => set((state) => {
        const existingProduct = state.wishlist.find(item => item.id === productId);
        const newWishlist = state.wishlist.filter(product => product.id !== productId);
        localStorage.setItem('wishlist', JSON.stringify(newWishlist));
        toast.error(`${existingProduct.title} removed from wishlist!`, toastOptions);
        return { wishlist: newWishlist };
    }),

    hasItemsInCart: () => {
        return (state) => state.cart.length > 0;
    },

    hasItemsInWishlist: () => {
        return (state) => state.wishlist.length > 0;
    }
}));

export default useProductStore;

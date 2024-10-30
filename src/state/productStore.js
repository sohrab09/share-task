import { create } from 'zustand';
import axiosInstance from '../config/axios';

const useProductStore = create((set) => ({
    products: [],
    isLoading: false,
    error: null,
    cart: [],
    wishlist: [],

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

        if (existingProduct) {
            return {
                cart: state.cart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            };
        } else {
            return {
                cart: [...state.cart, { ...product, quantity: 1 }]
            };
        }
    }),

    removeFromCart: (productId) => set((state) => ({
        cart: state.cart.filter(product => product.id !== productId)
    })),

    addToWishlist: (product) => set((state) => ({
        wishlist: [...state.wishlist, product]
    })),

    removeFromWishlist: (productId) => set((state) => ({
        wishlist: state.wishlist.filter(product => product.id !== productId)
    })),

    hasItemsInCart: () => {
        return (state) => state.cart.length > 0;
    },

    hasItemsInWishlist: () => {
        return (state) => state.wishlist.length > 0;
    }
}));

export default useProductStore;

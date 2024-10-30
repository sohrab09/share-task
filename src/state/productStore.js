import { create } from 'zustand';
import axiosInstance from '../config/axios';

const useProductStore = create((set) => ({
    products: [],
    isLoading: false,
    error: null,
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

    addToWishlist: (product) => set((state) => ({
        wishlist: [...state.wishlist, product]
    })),

    removeFromWishlist: (productId) => set((state) => ({
        wishlist: state.wishlist.filter(product => product.id !== productId)
    })),
}));

export default useProductStore;

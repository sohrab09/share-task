// src/state/productStore.js
import { create } from 'zustand';
import axiosInstance from '../config/axios';

const useProductStore = create((set) => ({
    products: [],
    isLoading: false,
    error: null,

    fetchProducts: async () => {
        set({ isLoading: true, error: null });
        try {
            const response = await axiosInstance.get('/products');
            set({ products: response.data.products, isLoading: false });
        } catch (error) {
            set({ error: error.message, isLoading: false });
        }
    },
}));

export default useProductStore;

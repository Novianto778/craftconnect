import { create } from 'zustand';

export interface KatalogStore {
    filter: string[];
    setFilter: (filter: string[]) => void;
    priceFilter: {
        min: number;
        max: number;
    };
    setPriceFilter: (priceFilter: { min: number; max: number }) => void;
}

export const useKatalogStore = create<KatalogStore>((set) => ({
    filter: [],
    setFilter: (filter: string[]) => set({ filter }),
    priceFilter: {
        min: 0,
        max: 1000000,
    },
    setPriceFilter: (priceFilter: { min: number; max: number }) =>
        set({ priceFilter }),
}));

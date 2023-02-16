import { CheckoutProduct, Product } from 'typings';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CheckoutStore {
    checkoutProduct: CheckoutProduct[];
    setCheckoutProduct: (checkoutProduct: CheckoutProduct[]) => void;
    incrementQty: (product: Product) => void;
    decrementQty: (product: Product) => void;
}

export const useCheckoutStore = create(
    persist<CheckoutStore>(
        (set) => ({
            checkoutProduct: [],
            setCheckoutProduct: (checkoutProduct: CheckoutProduct[]) =>
                set({ checkoutProduct }),
            incrementQty: (product: Product) =>
                set((state) => {
                    const index = state.checkoutProduct.findIndex(
                        (item) => item.product.id === product.id
                    );
                    if (index >= 0) {
                        const newCheckoutProduct = [...state.checkoutProduct];
                        newCheckoutProduct[index].qty += 1;
                        return { checkoutProduct: newCheckoutProduct };
                    }
                    return { checkoutProduct: [...state.checkoutProduct] };
                }),
            decrementQty: (product: Product) =>
                set((state) => {
                    const index = state.checkoutProduct.findIndex(
                        (item) => item.product.id === product.id
                    );
                    if (index >= 0) {
                        const newCheckoutProduct = [...state.checkoutProduct];
                        if (newCheckoutProduct[index].qty > 1) {
                            newCheckoutProduct[index].qty -= 1;
                        } else {
                            newCheckoutProduct.splice(index, 1);
                        }
                        return { checkoutProduct: newCheckoutProduct };
                    }
                    return { checkoutProduct: [...state.checkoutProduct] };
                }),
        }),
        {
            name: 'checkout-storage',
            getStorage: () => localStorage,
        }
    )
);

// const checkoutProduct = [
//     {
//         product: {},
//         qty: 0,
//     },
// ];

// const checkoutData = {
//     checkoutProduct: checkoutProduct,
//     total: 0,
//     shipping: 0,
//     created_at: '',
// };

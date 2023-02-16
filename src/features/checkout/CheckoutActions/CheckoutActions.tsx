import Button from '@/shared/components/Button/Button';
import { useCheckoutStore } from '@/store/checkoutStore';
import { useRouter } from 'next/router';
import React from 'react';
import { RiShoppingCartLine } from 'react-icons/ri';
import { Product } from 'typings';

type Props = {
    mt?: number;
    product: Product;
};

const CheckoutActions = ({ mt = 0, product }: Props) => {
    const router = useRouter();
    const setCheckoutProduct = useCheckoutStore(
        (state) => state.setCheckoutProduct
    );

    const checkoutProduct = [
        {
            product,
            qty: 1,
        },
    ];

    const handleCheckout = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.stopPropagation();
        setCheckoutProduct(checkoutProduct);
        router.push('/checkout');
    };

    return (
        <div
            className="flex items-center justify-between gap-x-4"
            style={{
                marginTop: `${mt * 4}px`,
            }}
        >
            <Button
                size="sm"
                fullWidth
                className="duration-300 hover:scale-95"
                onClick={(e) => handleCheckout(e)}
            >
                Checkout
            </Button>
            <div className="cursor-pointer rounded-full bg-red-500 p-2 duration-300 hover:scale-95 hover:bg-red-600">
                <RiShoppingCartLine size={20} fill="white" />
            </div>
        </div>
    );
};

export default CheckoutActions;

import Button from '@/shared/components/Button/Button';
import { useCheckoutStore } from '@/store/checkoutStore';
import { useModalStore } from '@/store/modalStore';
import { formatCurrency } from '@/utils/formatCurrency';
import { useRouter } from 'next/router';
import React from 'react';

type Props = {
    total: number;
};

const CheckoutModal = ({ total }: Props) => {
    const closeModal = useModalStore((state) => state.closeModal);
    const setCheckoutProduct = useCheckoutStore(
        (state) => state.setCheckoutProduct
    );
    const router = useRouter();

    const handleOk = () => {
        closeModal();
        setCheckoutProduct([]);
        router.push('/katalog');
    };

    return (
        <div className="absolute h-full w-full">
            <div className="relative top-32 z-300 mx-auto w-96 rounded-md border bg-white p-5 shadow-lg">
                <div className="mt-3 text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                        <svg
                            className="h-6 w-6 text-green-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                            ></path>
                        </svg>
                    </div>
                    <h3 className="mt-2 text-lg font-medium leading-6 text-gray-900">
                        Pembayaran sebesar {formatCurrency(total)} berhasil
                    </h3>
                    <div className="mt-2 px-7 py-3">
                        <p className="text-sm text-gray-500">
                            Terima kasih telah berbelanja di CraftConnect
                        </p>
                    </div>
                    <div className="items-center px-4 py-3">
                        <Button
                            onClick={handleOk}
                            fullWidth
                            id="ok-btn"
                            className="bg-green-500 text-white shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                        >
                            OK
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutModal;

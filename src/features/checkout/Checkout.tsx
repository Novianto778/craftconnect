import Button from '@/shared/components/Button/Button';
import { useCheckoutStore } from '@/store/checkoutStore';
import { useModalStore } from '@/store/modalStore';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import CheckoutInformation from './CheckoutInformation/CheckoutInformation';
import CheckoutModal from './CheckoutModal/CheckoutModal';

type Props = {};
type Payment = 'bank' | 'ewallet';

const Checkout = (props: Props) => {
    const checkoutProduct = useCheckoutStore((state) => state.checkoutProduct);

    const setIsOpen = useModalStore((state) => state.setIsOpen);
    const [payment, setPayment] = useState<Payment>('bank');

    const totalPrice = checkoutProduct.reduce(
        (acc, curr) => acc + curr.product.price * curr.qty,
        0
    );
    const handleCheckout = () => {
        if (checkoutProduct.length === 0) {
            toast.error('Tidak ada barang yang dipilih');
            return;
        }
        setIsOpen(<CheckoutModal total={totalPrice} />);
    };

    return (
        <>
            <div className="container mt-8 grid grid-cols-12 gap-y-8 md:gap-x-12">
                <div className="col-span-12 md:col-span-8">
                    <h1 className="text-xl font-bold">Checkout</h1>
                    {checkoutProduct.length > 0 ? (
                        <CheckoutInformation
                            checkoutProduct={checkoutProduct}
                        />
                    ) : (
                        <div className="flex h-96 flex-col items-center justify-center">
                            <h1 className="text-2xl font-bold">
                                Tidak ada barang yang dipilih
                            </h1>
                            <p className="text-gray-500">
                                Silahkan pilih barang dan lakukan checkout
                            </p>
                        </div>
                    )}
                </div>
                <div className="col-span-12 flex h-full flex-col rounded-md bg-gray-700 p-4 md:col-span-4 md:min-h-[75vh]">
                    <h1 className="text-xl font-bold text-white">Pembayaran</h1>
                    <div className="mt-4">
                        <p className="text-sm font-medium text-gray-100">
                            Metode Pembayaran
                        </p>
                        <div className="mt-2 flex items-center gap-x-4">
                            <Button
                                variant="outlined"
                                isActive={payment === 'bank'}
                                onClick={() => setPayment('bank')}
                                size="sm"
                            >
                                Transfer Bank
                            </Button>
                            <Button
                                variant="outlined"
                                isActive={payment === 'ewallet'}
                                onClick={() => setPayment('ewallet')}
                                size="sm"
                            >
                                E-Wallet
                            </Button>
                        </div>
                    </div>
                    <Button
                        className="mt-auto"
                        fullWidth
                        onClick={handleCheckout}
                        disabled={checkoutProduct.length === 0}
                    >
                        Checkout
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Checkout;

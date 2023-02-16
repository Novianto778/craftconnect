import { useCheckoutStore } from '@/store/checkoutStore';
import { formatCurrency } from '@/utils/formatCurrency';
import Image from 'next/image';
import React from 'react';
import { BiMinus, BiPlus } from 'react-icons/bi';
import { CheckoutProduct } from 'typings';

type Props = {
    checkoutProduct: CheckoutProduct[];
};

const CheckoutInformation = ({ checkoutProduct }: Props) => {
    const incrementQty = useCheckoutStore((state) => state.incrementQty);
    const decrementQty = useCheckoutStore((state) => state.decrementQty);

    const totalPrice = checkoutProduct.reduce(
        (acc, curr) => acc + curr.product.price * curr.qty,
        0
    );
    return (
        <div>
            <div className="inline-block w-full max-w-full">
                <div className="overflow-auto">
                    <table className="min-w-full">
                        <thead className="border-b">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                                >
                                    Produk
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                                >
                                    Qty
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                                >
                                    Harga Satuan
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                                >
                                    Total Harga
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {checkoutProduct.map(({ product, qty }, index) => (
                                <tr className="border-b" key={index}>
                                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                                        <div className="flex items-center gap-x-4">
                                            <Image
                                                src={product.images[0]}
                                                width={40}
                                                height={40}
                                                alt="product"
                                            />
                                            <div className="flex flex-col">
                                                <h6 className="text-sm font-medium">
                                                    {product.name}
                                                </h6>
                                                <p className="text-xs text-gray-500">
                                                    Bahan {product.category}
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                                        <div>
                                            <button
                                                className="rounded-md bg-gray-200 px-2 py-3 duration-300 hover:bg-gray-300"
                                                onClick={() =>
                                                    decrementQty(product)
                                                }
                                            >
                                                <BiMinus />
                                            </button>
                                            <span className="px-4 font-bold">
                                                {qty}
                                            </span>
                                            <button
                                                className="rounded-md bg-gray-200 px-2 py-3 duration-300 hover:bg-gray-300"
                                                onClick={() =>
                                                    incrementQty(product)
                                                }
                                            >
                                                <BiPlus />
                                            </button>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                                        {formatCurrency(product.price)}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                                        {formatCurrency(product.price * qty)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="mt-4 flex flex-col items-end justify-center gap-y-2">
                <div className="grid min-w-[240px] grid-cols-4 items-center gap-x-4">
                    <span className="col-span-2 text-right font-bold">
                        Subtotal:
                    </span>
                    <span className="col-span-2 text-right font-normal">
                        {formatCurrency(totalPrice)}
                    </span>
                </div>
                <div className="grid min-w-[240px] grid-cols-4 items-center gap-x-4">
                    <span className="col-span-2 text-right font-bold">
                        Pengiriman:
                    </span>
                    <span className="col-span-2 text-right font-normal">
                        {formatCurrency(0)}
                    </span>
                </div>
                <div className="mt-2 grid min-w-[240px] grid-cols-4 items-center gap-x-4">
                    <span className="col-span-2 text-right font-bold">
                        Total:
                    </span>
                    <span className="col-span-2 text-right text-lg font-normal">
                        {formatCurrency(totalPrice)}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CheckoutInformation;

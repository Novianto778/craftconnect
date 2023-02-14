import Button from '@/shared/components/Button/Button';
import { formatCurrency } from '@/utils/formatCurrency';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { RiShoppingCartLine } from 'react-icons/ri';
import { Product } from 'typings';

type Props = {
    product: Product;
};

const ProductCard = ({
    product: { id, name, price, category, images, userInfo },
}: Props) => {
    return (
        <Link
            href={`/katalog/${id}`}
            className="col-span-1 max-w-[280px] cursor-pointer overflow-hidden rounded-lg shadow"
        >
            <div className="relative h-32 w-full">
                <Image
                    src={images[0]}
                    fill
                    alt="product"
                    className="max-h-[120px] object-cover"
                    sizes="(max-width: 640px) 100vw, 280px"
                    priority
                />
            </div>
            <div className="flex h-full max-h-card flex-col px-4 py-2">
                <p className="text-xs font-medium text-gray-500">
                    Bahan {category}
                </p>
                <h6 className="text-sm font-semibold leading-4 tracking-widest text-blue-600">
                    {name}
                </h6>
                <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-x-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full">
                            <Image
                                src={userInfo.avatar}
                                alt="profile"
                                width={32}
                                height={32}
                            />
                        </div>
                        <h3 className="text-sm font-medium text-black">
                            {userInfo.username}
                        </h3>
                    </div>
                </div>
                <p className="mt-2 font-bold tracking-wider">
                    {formatCurrency(price)}
                </p>
                <div className="mt-4 flex items-center justify-between gap-x-4">
                    <Button
                        size="sm"
                        fullWidth
                        className="duration-300 hover:scale-95"
                    >
                        Checkout
                    </Button>
                    <div className="cursor-pointer rounded-full bg-red-500 p-2 duration-300 hover:scale-95 hover:bg-red-600">
                        <RiShoppingCartLine size={20} fill="white" />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;

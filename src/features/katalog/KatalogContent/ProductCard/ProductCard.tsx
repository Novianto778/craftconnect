import CheckoutActions from '@/features/checkout/CheckoutActions/CheckoutActions';
import { formatCurrency } from '@/utils/formatCurrency';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Product } from 'typings';

type Props = {
    product: Product;
};

const ProductCard = ({ product }: Props) => {
    const router = useRouter();
    const handleProductClick = () => {
        router.push(`/katalog/${product.id}`);
    };
    return (
        <div
            className="col-span-1 max-w-[280px] cursor-pointer overflow-hidden rounded-lg shadow"
            onClick={handleProductClick}
        >
            <div className="relative h-32 w-full">
                <Image
                    src={product.images[0]}
                    fill
                    alt="product"
                    className="max-h-[120px] object-cover"
                    sizes="(max-width: 640px) 100vw, 280px"
                    priority
                />
            </div>
            <div className="flex h-full max-h-card flex-col px-4 py-2">
                <p className="text-xs font-medium text-gray-500">
                    Bahan {product.category}
                </p>
                <h6 className="text-sm font-semibold leading-4 tracking-widest text-blue-600">
                    {product.name}
                </h6>
                <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-x-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full">
                            <Image
                                src={product.userInfo.avatar}
                                alt="profile"
                                width={32}
                                height={32}
                            />
                        </div>
                        <h3 className="text-sm font-medium text-black">
                            {product.userInfo.username}
                        </h3>
                    </div>
                </div>
                <p className="mt-2 font-bold tracking-wider">
                    {formatCurrency(product.price)}
                </p>
                <CheckoutActions product={product} mt={4} />
            </div>
        </div>
    );
};

export default ProductCard;

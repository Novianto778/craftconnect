import CheckoutActions from '@/features/checkout/CheckoutActions/CheckoutActions';
import { formatCurrency } from '@/utils/formatCurrency';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';
import { RiShoppingCartLine } from 'react-icons/ri';
import { Product } from 'typings';

type Props = {
    product: Product;
};

const ProductCard = ({ product }: Props) => {
    const router = useRouter();
    const handleProductClick = () => {
        router.push(`/katalog/${product.id}`);
    };

    const handleCart = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
        toast.success('Produk berhasil ditambahkan ke keranjang');
    };
    return (
        <>
            <div
                className="col-span-1 max-w-[280px] cursor-pointer overflow-hidden rounded-lg shadow"
                onClick={handleProductClick}
            >
                <div className="relative flex h-48 w-full items-center justify-center overflow-hidden bg-gray-100 p-4">
                    <Image
                        src={product?.images[0]!}
                        alt="product"
                        width={280}
                        height={280}
                        className="w-40 bg-cover object-cover"
                        blurDataURL={product?.images[0]!}
                        placeholder="blur"
                        priority
                    />
                </div>
                <div className="relative flex h-full flex-col px-4 py-2">
                    <h6 className="max-w-[80%] font-semibold leading-5 tracking-widest text-black">
                        {product?.name}
                    </h6>
                    <p className="mt-2 text-sm font-medium text-blue-600">
                        {formatCurrency(product.price)}
                    </p>
                    <p className="clip-text mt-4 text-xs font-medium leading-5 text-gray-500">
                        {product.description}
                    </p>

                    <div
                        className="absolute right-4 -top-4 w-max cursor-pointer rounded-full bg-red-500 p-3 duration-300 hover:scale-95 hover:bg-red-600"
                        onClick={(e) => handleCart(e)}
                    >
                        <RiShoppingCartLine size={16} fill="white" />
                    </div>
                    <CheckoutActions product={product} mt={4} />
                </div>
            </div>
        </>
    );
};

export default ProductCard;

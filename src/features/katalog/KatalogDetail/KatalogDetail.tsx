import useChats from '@/features/chat/useChats';
import CheckoutActions from '@/features/checkout/CheckoutActions/CheckoutActions';
import Button from '@/shared/components/Button/Button';
import { formatCurrency } from '@/utils/formatCurrency';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { RiShoppingCartLine } from 'react-icons/ri';
import { Product } from 'typings';
import ProductHighlight from './ProductHighlight/ProductHighlight';

type Props = {
    product: Product;
};

const KatalogDetail = ({ product }: Props) => {
    const router = useRouter();
    const { handleSelect } = useChats();
    const handleChat = () => {
        router.push('/chat');
        handleSelect(product.userInfo);
    };

    console.log(product.highlight);

    return (
        <div className="container">
            <div className="mt-4 h-full w-full">
                <h1 className="text-2xl font-bold">Detail Produk</h1>
                <div className="mt-4 grid w-full max-w-[100vw] grid-cols-12 items-start justify-between gap-x-0 gap-y-8 md:gap-24 md:gap-x-12">
                    <div className="col-span-12 md:col-span-5">
                        <div className="flex flex-col gap-2">
                            <div className="relative h-72 w-full overflow-hidden rounded-md border">
                                <Image
                                    src={product?.images[0]}
                                    fill
                                    alt="product"
                                    className="bg-cover object-contain"
                                    sizes="(max-width: 640px) 100vw, 640px"
                                />
                            </div>
                            {product?.images.length > 1 && (
                                <div className="flex gap-x-2">
                                    {[
                                        ...new Array(
                                            product?.images.length - 1
                                        ),
                                    ].map((_, index) => (
                                        <div
                                            className="relative flex h-20 w-20 flex-col overflow-hidden rounded"
                                            key={index + 1}
                                        >
                                            <Image
                                                src={product.images[index + 1]}
                                                fill
                                                alt="product"
                                                className="object-cover"
                                                sizes="(max-width: 640px) 100vw, 640px"
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="col-span-12 md:col-start-7 md:col-end-13">
                        <div className="flex flex-col">
                            <p className="mb-1 text-xs font-medium text-gray-500">
                                Bahan {product?.category}
                            </p>
                            <h6 className="text-2xl font-bold tracking-widest text-blue-600">
                                {product?.name}
                            </h6>
                            <p className="mt-2 text-xl font-semibold tracking-wider">
                                {formatCurrency(product?.price)}
                            </p>
                            <p className="mt-4 text-sm text-gray-500">
                                {product?.description}
                            </p>
                            <div className="mt-2 flex items-center justify-between">
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
                                        {product?.userInfo.username}
                                    </h3>
                                </div>
                                <Button
                                    className="rounded bg-chat-send px-2.5 py-1 text-xs text-white"
                                    onClick={handleChat}
                                >
                                    Chat
                                </Button>
                            </div>

                            <div className="mt-4 flex items-center gap-x-2">
                                <CheckoutActions product={product} />
                                <div className="cursor-pointer rounded-full bg-red-500 p-3 duration-300 hover:scale-95 hover:bg-red-600">
                                    <RiShoppingCartLine
                                        size={16}
                                        fill="white"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {product?.highlight?.length! > 0 && (
                <div className="mt-20">
                    <ProductHighlight
                        highlight={product.highlight}
                        image={product.highlightImage}
                    />
                </div>
            )}
        </div>
    );
};

export default KatalogDetail;

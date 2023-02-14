import useChats from '@/features/chat/useChats';
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

// const product = {
//     id: '123123',
//     name: 'Puzzle Stacker Gunung',
//     price: 50000,
//     category: 'Bahan Kayu',
//     image: '/images/product3.png',
//     description: 'Deskripsi produk',
//     createdAt: new Date() as any,
//     highlight: [
//         'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//         'Sed quasi ab error voluptate ipsum pariatur consequatur.',
//         'Quis nesciunt ut quas!',
//     ],
// };

// const user = {
//     avatar: 'https://firebasestorage.googleapis.com/v0/b/chat-app-c7b2e.appspot.com/o/avatars%2Fnovianto%2F5z0n5utulifIwWLcYuXKhxkn6wo2?alt=media&token=9ac79793-d356-4511-a8ba-77ef1bc6f328',
//     email: 'novianto778@gmail.com',
//     role: 'customer',
//     uid: '5z0n5utulifIwWLcYuXKhxkn6wo2',
//     username: 'novianto',
// };

const KatalogDetail = ({ product }: Props) => {
    const router = useRouter();
    const { handleSelect } = useChats();
    const handleChat = () => {
        router.push('/chat');
        handleSelect(product.userInfo);
    };

    console.log(product);

    return (
        <div className="container">
            <div className="mt-4 h-full min-h-main w-full">
                <h1 className="text-2xl font-bold">Detail Produk</h1>
                <div className="mt-4 grid w-full max-w-[100vw] grid-cols-6 items-start justify-between gap-12 md:gap-24">
                    <div className="col-span-6 md:col-span-3">
                        <div className="flex flex-col gap-2">
                            <div className="relative h-72 w-full overflow-hidden rounded border">
                                <Image
                                    src={product.images[0]}
                                    fill
                                    alt="product"
                                    className="object-cover"
                                    sizes="(max-width: 640px) 100vw, 640px"
                                />
                            </div>
                            {product.images.length > 1 && (
                                <div className="flex gap-x-2">
                                    {[
                                        ...new Array(product.images.length - 1),
                                    ].map((_, index) => (
                                        <div
                                            className="relative flex h-20 w-20 flex-col rounded overflow-hidden"
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
                    <div className="col-span-6 md:col-start-4 md:col-end-7">
                        <div className="flex flex-col">
                            <p className="mb-1 text-xs font-medium text-gray-500">
                                Bahan {product.category}
                            </p>
                            <h6 className="text-2xl font-bold tracking-widest text-blue-600">
                                {product.name}
                            </h6>
                            <p className="mt-2 text-xl font-semibold tracking-wider">
                                {formatCurrency(product.price)}
                            </p>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-x-2">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full">
                                        <Image
                                            src="https://firebasestorage.googleapis.com/v0/b/chat-app-c7b2e.appspot.com/o/avatars%2Fsusicraft%2FosxcE1NCvwWI02MLpkeLj7LiBoJ2?alt=media&token=4afae50e-d765-4259-9454-c5703a538ffa"
                                            alt="profile"
                                            width={32}
                                            height={32}
                                        />
                                    </div>
                                    <h3 className="text-sm font-medium text-black">
                                        UMKM A
                                    </h3>
                                </div>
                                <Button
                                    variant="custom"
                                    className="rounded bg-chat-send px-2.5 py-1 text-xs text-white"
                                    onClick={handleChat}
                                >
                                    Chat
                                </Button>
                            </div>
                            <p className="mt-4 text-sm text-gray-500">
                                {product.description}
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
                                    <RiShoppingCartLine
                                        size={20}
                                        fill="white"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8">
                <ProductHighlight
                    highlight={product.highlight}
                    image={product.highlightImage}
                />
            </div>
        </div>
    );
};

export default KatalogDetail;

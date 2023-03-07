import Image from 'next/image';
import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Product } from 'typings';

type Props = {
    highlight: Product['highlight'];
    image: Product['highlightImage'];
};

const ProductHighlight = ({ highlight, image }: Props) => {
    const gapClasses: { [key: number]: string } = {
        2: 'md:gap-y-60',
        3: 'md:gap-y-40',
        4: 'md:gap-y-32',
        5: 'md:gap-y-24',
    };

    return (
        <>
            <h3 className="text-2xl font-bold tracking-widest text-blue-600">
                Highlight Produk
            </h3>
            <div className="mt-8 grid grid-cols-12 py-8 md:gap-x-12 h-full">
                <div className="relative col-span-12 h-[500px] w-full overflow-hidden rounded md:col-span-6 md:max-w-[100%]">
                    <Image
                        src={image!}
                        fill
                        alt="product"
                        className="h-full w-full object-contain"
                    />
                </div>
                <div
                    className={`col-span-12 flex flex-col gap-y-40 md:col-span-6 ${
                        gapClasses[highlight?.length!]
                    }`}
                >
                    {highlight?.map((item, index) => (
                        <div className="relative flex items-center" key={index}>
                            <div className="absolute h-2 w-2 rounded-full bg-green-400"></div>
                            <div className="absolute h-1 w-12 rounded-full bg-green-400 md:w-48"></div>
                            <div className="absolute left-12 flex h-4 w-4 items-center justify-center rounded-full bg-green-400 md:left-48">
                                <AiFillStar fill="white" size={12} />
                            </div>
                            <p className="absolute top-4 left-12 text-sm font-semibold text-green-700 md:left-48">
                                {item}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProductHighlight;

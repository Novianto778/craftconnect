import React from 'react';
import Keunggulan1 from '@/assets/icon/keunggulan1.png';
import Keunggulan2 from '@/assets/icon/keunggulan2.png';
import Keunggulan3 from '@/assets/icon/keunggulan3.png';
import Image from 'next/image';

type Props = {};

const Keunggulan = (props: Props) => {
    return (
        <section className="flex min-h-screen flex-col items-center justify-center gap-y-20">
            <h1 className="mb-8 text-4xl font-bold">
                Keunggulan marketplace kami
            </h1>
            <div className="container flex flex-col justify-between gap-y-8 md:flex-row">
                <div className="flex basis-1/5 flex-col items-center justify-center">
                    <Image src={Keunggulan1} alt="" width={96} height={96} />
                    <h2 className="mt-4 text-lg font-semibold md:text-xl">
                        Desain Variatif
                    </h2>
                    <p className="mt-2 text-center text-base leading-5 text-gray-700 md:text-lg">
                        Produk pilihan dengan desain bervariasi dan menarik dari
                        berbagai umkm
                    </p>
                </div>

                <DotLine />
                <div className="flex basis-1/5 flex-col items-center justify-center">
                    <Image src={Keunggulan2} alt="" width={96} height={96} />
                    <h2 className="mt-4 text-lg font-semibold md:text-xl">
                        UMKM Lokal
                    </h2>
                    <p className="mt-2 text-center text-base leading-5 text-gray-700 md:text-lg">
                        Mendukung produk, kreativitas dan karya industri lokal
                    </p>
                </div>

                <DotLine />
                <div className="flex basis-1/5 flex-col items-center justify-center">
                    <Image src={Keunggulan3} alt="" width={96} height={96} />
                    <h2 className="mt-4 text-lg font-semibold md:text-xl">
                        Nilai dan Kualitas
                    </h2>
                    <p className="mt-2 text-center text-base leading-5 text-gray-700 md:text-lg">
                        Menawarkan produk berkualitas dengan harga yang bersaing
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Keunggulan;

function DotLine() {
    return (
        <div className="hidden w-full basis-1/5 -translate-y-12 items-center justify-center gap-1 md:flex">
            <div className="h-1 w-2 rounded bg-purple-600"></div>
            <div className="h-1 w-2.5 rounded bg-purple-600"></div>
            <div className="h-1 w-2.5 rounded bg-purple-600"></div>
            <div className="h-1 w-2.5 rounded bg-purple-600"></div>
            <div className="h-1 w-2.5 rounded bg-purple-600"></div>
            <div className="h-1 w-2.5 rounded bg-purple-600"></div>
            <div className="h-1 w-2.5 rounded bg-purple-600"></div>
            <div className="h-1 w-2.5 rounded bg-purple-600"></div>
            <div className="h-1 w-2 rounded bg-purple-600"></div>
        </div>
    );
}

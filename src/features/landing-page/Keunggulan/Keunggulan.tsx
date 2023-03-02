import React from 'react';
import Keunggulan1 from '@/assets/img/keunggulan1.png';
import Keunggulan2 from '@/assets/img/keunggulan2.png';
import Keunggulan3 from '@/assets/img/keunggulan3.png';
import Image from 'next/image';

type Props = {};

const Keunggulan = (props: Props) => {
    return (
        <section className="container flex min-h-screen flex-col gap-x-0 md:min-h-[120vh] md:flex-row md:items-center md:gap-x-10 2xl:h-screen">
            <div className="flex h-full flex-1 flex-col justify-center">
                <h1 className="mb-8 max-w-[90%] font-volkhov text-3xl font-semibold">
                    Keunggulan produk pada marketplace kami
                </h1>
                <div className="flex max-w-[80%] flex-col gap-y-8">
                    <div className="flex items-center gap-x-4">
                        <div className="h-12 w-12 shrink-0 rounded bg-[#F4B56A]"></div>
                        <div className="flex flex-col">
                            <h2 className="font-semibold">Desain Variatif</h2>
                            <p className="text-sm leading-5 text-gray-700">
                                Produk pilihan dengan desain bervariasi dan
                                menarik dari berbagai umkm
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-4">
                        <div className="h-12 w-12 shrink-0 rounded bg-[#F15A2B]"></div>
                        <div className="flex flex-col">
                            <h2 className="font-semibold">UMKM Lokal</h2>
                            <p className="text-sm leading-5 text-gray-700">
                                Mendukung produk, kreativitas dan karya industri
                                lokal
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-4">
                        <div className="h-12 w-12 shrink-0 rounded bg-[#006380]"></div>
                        <div className="flex flex-col">
                            <h2 className="font-semibold">
                                Nilai dan Kualitas
                            </h2>
                            <p className="text-sm leading-5 text-gray-700">
                                Menawarkan produk berkualitas dengan harga yang
                                bersaing
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative hidden flex-1 md:block">
                <Image
                    src={Keunggulan1}
                    width={450}
                    height={450}
                    alt="keunggulan1"
                    className="hidden md:block"
                />
                <Image
                    src={Keunggulan2}
                    width={240}
                    height={130}
                    alt="keunggulan2"
                    className="absolute -bottom-20 left-20 hidden md:block"
                />
                <Image
                    src={Keunggulan3}
                    width={240}
                    height={130}
                    alt="keunggulan3"
                    className="absolute -top-20 right-20 hidden md:block"
                />
            </div>
        </section>
    );
};

export default Keunggulan;

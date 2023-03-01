import React from 'react';
import About from '@/assets/img/about.png';
import Image from 'next/image';

type Props = {};

const AboutUs = (props: Props) => {
    return (
        <div className="my-10 h-[50vh] w-full bg-white">
            <div className="container grid h-full grid-cols-3 items-center justify-between gap-x-4">
                <div className="col-span-2 md:col-span-1">
                    <h2 className="font-volkhov text-3xl font-bold">
                        Persembahan karya kerajinan tangan Indonesia
                    </h2>
                </div>
                <div className="col-span-1 hidden sm:block">
                    <Image
                        src={About}
                        width={300}
                        height={300}
                        alt="about pic"
                    />
                </div>
                <div className="col-span-3 flex justify-center gap-x-8 md:col-span-1">
                    <div className="flex flex-col gap-y-1">
                        <p className="font-volkhov text-4xl">500+</p>
                        <p className="text-lg leading-5">
                            UMKM tergabung kedalam platform
                        </p>
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <p className="font-volkhov text-4xl">1500+</p>
                        <p className="text-lg leading-5">
                            Produk terdaftar dalam platform
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;

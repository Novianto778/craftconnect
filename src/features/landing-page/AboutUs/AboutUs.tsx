import React, { useRef } from 'react';
import About from '@/assets/img/about.png';
import Image from 'next/image';
import CountUp, { useCountUp } from 'react-countup';

type Props = {};

const AboutUs = (props: Props) => {
    const countUpRef = useRef(null);
    const countUpRef2 = useRef(null);
    useCountUp({
        ref: countUpRef,
        end: 500,
        enableScrollSpy: true,
        scrollSpyDelay: 100,
        duration: 1,
    });
    useCountUp({
        ref: countUpRef2,
        end: 1500,
        enableScrollSpy: true,
        scrollSpyDelay: 100,
        duration: 1.5,
    });
    return (
        <section className="flex min-h-[60vh] w-full items-center bg-white">
            <div className="container grid h-full grid-cols-3 items-center justify-between md:gap-x-4">
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
                        <div className="font-volkhov text-4xl">
                            <span ref={countUpRef} />
                            <span>+</span>
                        </div>
                        <p className="text-lg leading-5">
                            UMKM tergabung kedalam platform
                        </p>
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <div className="font-volkhov text-4xl">
                            <span ref={countUpRef2} />
                            <span>+</span>
                        </div>
                        <p className="text-lg leading-5">
                            Produk terdaftar dalam platform
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;

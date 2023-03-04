import Button from '@/shared/components/Button/Button';
import Input from '@/shared/components/Input/Input';
import Image from 'next/image';
import React from 'react';
import DotPattern from '@/assets/icon/dot-pattern.svg';

type Props = {};

const JoinUs = (props: Props) => {
    return (
        <section className="h-screen w-full bg-primary-cream">
            <div className="container grid h-full grid-cols-12 content-center items-center justify-between gap-y-12 gap-x-0 lg:gap-x-20">
                <div className="col-span-12 flex flex-col gap-y-8 lg:col-span-6">
                    <h2 className="font-volkhov text-5xl leading-[1.4]">
                        Bergabung dengan kami sekarang.
                    </h2>
                    <p>
                        Segera bergabung dengan lebih dari 500+ UMKM lokal yang
                        mempercayai platform kami.
                    </p>
                </div>
                <div className="relative z-10 col-span-12 w-[90%] lg:col-span-6">
                    <Image
                        src={DotPattern}
                        width={150}
                        height={150}
                        alt="pattern"
                        className="absolute -top-4 -right-10 -z-10 h-auto w-auto"
                    />
                    <div className="flex rounded bg-white px-8 py-6">
                        <input
                            className="text-sm focus:outline-none"
                            placeholder="email bisnis anda"
                        />
                        <Button className="ml-auto md:px-8 md:py-4">
                            Kirim
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JoinUs;

import Button from '@/shared/components/Button/Button';
import Input from '@/shared/components/Input/Input';
import Image from 'next/image';
import React from 'react';
import DotPattern from '@/assets/icon/dot-pattern.svg';

type Props = {};

const JoinUs = (props: Props) => {
    return (
        <div className="h-screen w-full bg-primary-cream">
            <div className="container grid h-full grid-cols-12 items-center justify-between gap-x-0 md:gap-x-20">
                <div className="col-span-12 flex flex-col gap-y-8 md:col-span-6">
                    <h2 className="font-volkhov text-5xl leading-[1.4]">
                        Bergabung dengan kami sekarang.
                    </h2>
                    <p>
                        Segera bergabung dengan lebih dari 500+ UMKM lokal yang
                        mempercayai platform kami.
                    </p>
                </div>
                <div className="relative z-10 col-span-12 w-[90%] md:col-span-6">
                    <Image
                        src={DotPattern}
                        width={150}
                        height={150}
                        alt="pattern"
                        className="absolute -top-4 -right-10 -z-10"
                    />
                    <div className="flex rounded bg-white px-8 py-6">
                        <input
                            className="focus:outline-none"
                            placeholder="email bisnis anda"
                        />
                        <Button className="ml-auto px-8 py-4">Kirim</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinUs;

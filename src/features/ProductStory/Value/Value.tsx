import Image from 'next/image';
import React from 'react';
import Value1 from '@/assets/icon/value1.png';
import Value2 from '@/assets/icon/value2.png';
import Value3 from '@/assets/icon/value3.png';
import Arrow from '@/assets/icon/arrows.svg';

type Props = {};

const Value = (props: Props) => {
    return (
        <section className="flex min-h-screen w-full flex-col items-center justify-center py-10">
            <div className="container flex flex-col gap-y-12">
                <div className="flex flex-col items-center gap-y-2">
                    <h1 className="text-center font-volkhov text-4xl font-bold">
                        Value Product
                    </h1>
                    <p className="max-w-[400px] text-center font-medium">
                        Beberapa nilai pembeda produk pada platform kami dengan
                        produk lain
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-y-6 md:grid-cols-5 md:gap-x-8">
                    <div className="col-span-1 flex flex-col items-center">
                        <Image src={Value1} alt="" width={96} height={96} />

                        <p className="mt-4 text-center text-base font-medium leading-5 md:text-lg">
                            Perbedaan desain pada produk batik kami.
                        </p>
                    </div>
                    <div className="col-span-1 hidden flex-col items-center md:flex">
                        <Image
                            src={Arrow}
                            alt=""
                            width={120}
                            height={120}
                            className="translate-y-8"
                        />
                    </div>
                    <div className="col-span-1 flex flex-col items-center">
                        <Image src={Value2} alt="" width={96} height={96} />

                        <p className="mt-4 text-center text-base font-medium leading-5 md:text-lg">
                            Penggunaan bahan terbaik dikelasnya.
                        </p>
                    </div>
                    <div className="col-span-1 hidden flex-col items-center md:flex">
                        <Image
                            src={Arrow}
                            alt=""
                            width={120}
                            height={120}
                            className="translate-y-8 scale-y-[-1]"
                        />
                    </div>
                    <div className="col-span-1 flex flex-col items-center">
                        <Image src={Value3} alt="" width={96} height={96} />

                        <p className="mt-4 text-center text-base font-medium leading-5 md:text-lg">
                            Memperharikan proses produksi sehingga menjaga
                            kualitas produk.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Value;

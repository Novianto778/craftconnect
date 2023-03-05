import Image from 'next/image';
import React from 'react';
import Timeline1 from '@/assets/img/timeline1.png';
import Timeline2 from '@/assets/img/timeline2.png';
import Timeline3 from '@/assets/img/timeline3.png';
import Timeline4 from '@/assets/img/timeline4.png';
import TimelineLine from '@/assets/icon/timeline.svg';

type Props = {};

const Timeline = (props: Props) => {
    return (
        <div className="min-h-screen w-full">
            <div className="container flex flex-col items-center justify-center gap-y-20 py-10">
                <h1 className="font-volkhov text-4xl font-bold">
                    Bagaimana kami membuat batik?
                </h1>
                <div className="relative grid grid-cols-1 gap-x-0 gap-y-20 md:grid-cols-2 md:gap-y-0 md:gap-x-40">
                    <div className="absolute left-1/2 hidden max-h-full -translate-x-1/2 overflow-y-hidden md:block">
                        <Image
                            src={TimelineLine}
                            alt="timeline line"
                            width={100}
                            height={100}
                            className="z-10"
                        />
                    </div>
                    <div className="col-span-1 flex flex-col gap-y-6">
                        <div className="flex items-center gap-x-10">
                            <div className="flex flex-col gap-y-2">
                                <h1 className="font-volkhov text-2xl font-bold">
                                    Pemilihan bahan
                                </h1>
                                <p>
                                    Memilih kain terbaik yang nantinya akan
                                    digunakan sebagai media pengaplikasian
                                    desain batik.
                                </p>
                            </div>
                            <div className="h-1 w-20 flex-shrink-0 border-t-2 border-dashed border-black"></div>
                        </div>
                        <div className="">
                            <Image
                                src={Timeline1}
                                alt="pemilihan bahan"
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>
                    <div className="col-span-1 mt-20 flex flex-col gap-y-6">
                        <div className="">
                            <Image
                                src={Timeline2}
                                alt="motif desain"
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className="flex items-center gap-x-10">
                            <div className="h-1 w-20 flex-shrink-0 border-t-2 border-dashed border-black"></div>
                            <div className="flex flex-col gap-y-2">
                                <h1 className="font-volkhov text-2xl font-bold">
                                    Motif desain
                                </h1>
                                <p>
                                    Proses brainstorming dan finalisasi
                                    rancangan motif produk kami sehingga
                                    menghasilkan desain akhir yang unik.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 flex flex-col gap-y-6">
                        <div className="flex items-center gap-x-10">
                            <div className="flex flex-col gap-y-2">
                                <h1 className="font-volkhov text-2xl font-bold">
                                    Penutupan dengan malam
                                </h1>
                                <p>
                                    Seluruh permukaan kain ditutup dengan lilin
                                    menggunakan canting. Lilin berfungsi untuk
                                    melindungi bagian-bagian tertentu dari kain
                                    yang tidak ingin terkena warna.
                                </p>
                            </div>
                            <div className="h-1 w-20 flex-shrink-0 border-t-2 border-dashed border-black"></div>
                        </div>
                        <div className="">
                            <Image
                                src={Timeline3}
                                alt="penutupan dengan malam"
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>
                    <div className="col-span-1 mt-20 flex flex-col gap-y-6">
                        <div className="">
                            <Image
                                src={Timeline4}
                                alt="pengeringan"
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className="flex items-center gap-x-10">
                            <div className="h-1 w-20 flex-shrink-0 border-t-2 border-dashed border-black"></div>
                            <div className="flex flex-col gap-y-2">
                                <h1 className="font-volkhov text-2xl font-bold">
                                    Pengeringan
                                </h1>
                                <p>
                                    Proses terakhir setelah motif desain ditutup
                                    dengan lilin malam lalu dikeringkan untuk
                                    menghilangkan kelambaban pada kain.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;

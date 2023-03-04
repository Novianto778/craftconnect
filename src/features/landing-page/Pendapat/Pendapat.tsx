import Image from 'next/image';
import React, { useRef } from 'react';
import Quote from '@/assets/icon/quote.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

type Props = {};

const Pendapat = (props: Props) => {
    const navigationRef = useRef(null);

    return (
        <section className="relative h-screen w-screen max-w-full md:h-[80vh]">
            <div className="pattern flex items-center justify-center">
                <div className="container relative z-10 grid min-h-[60%] w-[90%] grid-cols-12 gap-y-8 overflow-hidden rounded-lg bg-white p-12">
                    <Image
                        src={Quote}
                        width={200}
                        height={200}
                        alt="quote icon"
                        className="absolute -bottom-10 -left-10 -z-10"
                    />
                    <div className="relative col-span-12 md:col-span-6">
                        <p className="text-lg font-medium uppercase text-gray-600">
                            Testimonial
                        </p>
                        <h6 className="max-w-[420px] font-volkhov text-4xl leading-[1.3]">
                            Pendapat tentang CraftConnect?
                        </h6>
                        <div
                            className="swiper-pg mt-2 inline-flex gap-x-2 text-left"
                            ref={navigationRef}
                        ></div>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <Swiper
                            slidesPerView={1}
                            pagination={{
                                clickable: true,
                                el: '.swiper-pg',
                                enabled: true,
                                bulletActiveClass: 'swiper-active',
                            }}
                            modules={[Pagination, Autoplay]}
                            autoplay={{
                                delay: 3000,
                            }}
                            loop={true}
                        >
                            <SwiperSlide>
                                <div className="flex w-full max-w-[500px] flex-col gap-y-4 rounded border bg-white px-6 py-4 text-justify font-medium shadow-md">
                                    <p className="text-sm text-gray-500">
                                        "Saya sangat senang dengan CraftConnect
                                        karena mereka memberikan sarana yang
                                        efektif untuk menghubungkan produk UMKM
                                        dan kerajinan lokal dengan customer.
                                        Saya sudah menjual beberapa produk saya
                                        dan berhasil memperluas pasar saya
                                        melalui platform ini. Sangat
                                        direkomendasikan untuk para pelaku UMKM
                                        yang ingin meningkatkan bisnis mereka!"
                                    </p>
                                    <div className="mb-2 flex items-center gap-x-2">
                                        <Image
                                            src="https://images.unsplash.com/photo-1498558263790-a9555e3d002d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                                            alt=""
                                            width={80}
                                            height={80}
                                            className="h-12 w-12 rounded-full bg-cover object-cover"
                                        />
                                        <div className="flex flex-col">
                                            <p className="font-bold text-black">
                                                Pak Eko
                                            </p>
                                            <p className="text-sm text-gray-400">
                                                UMKM Kain Tenun
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex w-full max-w-[500px] flex-col gap-y-4 rounded border bg-white px-6 py-4 font-medium shadow-md">
                                    <p className="text-sm text-gray-500">
                                        "Sebagai konsumen, saya senang dengan
                                        adanya platform CraftConnect karena saya
                                        bisa mendapatkan produk-produk
                                        berkualitas tinggi dari UMKM dan
                                        kerajinan lokal dengan harga yang
                                        terjangkau. Saya juga merasa puas dengan
                                        proses pengiriman dan layanan pelanggan
                                        yang baik dari para penjual di platform
                                        ini."
                                    </p>
                                    <div className="mb-2 flex items-center gap-x-2">
                                        <Image
                                            src="https://images.unsplash.com/photo-1525875975471-999f65706a10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                                            alt=""
                                            width={80}
                                            height={80}
                                            className="h-12 w-12 rounded-full bg-cover object-cover"
                                        />
                                        <div className="flex flex-col">
                                            <p className="font-bold text-black">
                                                Reina Sari
                                            </p>
                                            <p className="text-sm text-gray-400">
                                                Pekerja Kreatif
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex w-full max-w-[500px] flex-col gap-y-4 rounded border bg-white px-6 py-4 font-medium shadow-md">
                                    <p className="text-sm text-gray-500">
                                        "Saya senang dengan adanya platform
                                        CraftConnect karena saya bisa menemukan
                                        produk-produk unik dari UMKM dan
                                        kerajinan lokal dengan mudah. Saya
                                        sering membeli kerajinan tangan untuk
                                        hadiah atau untuk menghias rumah saya,
                                        dan platform ini sangat membantu dalam
                                        menemukan produk yang saya cari."
                                    </p>
                                    <div className="mb-2 flex items-center gap-x-2">
                                        <Image
                                            src="https://images.unsplash.com/photo-1544168190-79c17527004f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
                                            alt=""
                                            width={80}
                                            height={80}
                                            className="h-12 w-12 rounded-full bg-cover object-cover"
                                        />
                                        <div className="flex flex-col">
                                            <p className="font-bold text-black">
                                                Robby Pratama
                                            </p>
                                            <p className="text-sm text-gray-400">
                                                Konsultan Bisnis
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pendapat;

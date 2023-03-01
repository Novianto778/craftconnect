import Image from 'next/image';
import React from 'react';
import Pattern from '@/assets/img/pattern.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

type Props = {};

const Pendapat = (props: Props) => {
    return (
        <div className="relative h-screen w-screen max-w-full md:h-[80vh]">
            <div className="pattern flex items-center justify-center">
                <div className="container grid w-[90%] grid-cols-12 gap-y-8 rounded-lg bg-white p-12">
                    <div className="col-span-12 md:col-span-6">
                        <p className="text-lg font-medium uppercase text-gray-600">
                            Testimonial
                        </p>
                        <h6 className="max-w-[420px] font-volkhov text-4xl leading-[1.3]">
                            Pendapat tentang CraftConnect?
                        </h6>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <Swiper
                            slidesPerView={1}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination, Autoplay]}
                            autoplay={{
                                delay: 3000,
                            }}
                            loop
                        >
                            <SwiperSlide>
                                <div className="flex max-w-[400px] flex-col gap-y-4 rounded border bg-white px-6 py-4 font-medium text-gray-500 shadow-md">
                                    <p className="text-sm">
                                        “On the Windows talking painted pasture
                                        yet its express parties use. Sure last
                                        upon he same as knew next. Of believed
                                        or diverted no.”
                                    </p>
                                    <div className="mb-2 flex items-center gap-x-2">
                                        <Image
                                            src="https://images.unsplash.com/photo-1444069788560-6ae1deb4c0d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format"
                                            alt=""
                                            width={80}
                                            height={80}
                                            className="h-12 w-12 rounded-full"
                                        />
                                        <div className="flex flex-col">
                                            <p className="font-bold text-black">
                                                Budi
                                            </p>
                                            <p className="text-sm text-gray-400">
                                                CEO CraftConnect
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex max-w-[400px] flex-col gap-y-4 rounded border bg-white px-6 py-4 font-medium text-gray-500 shadow-md">
                                    <p className="text-sm">
                                        “On the Windows talking painted pasture
                                        yet its express parties use. Sure last
                                        upon he same as knew next. Of believed
                                        or diverted no.”
                                    </p>
                                    <div className="mb-2 flex items-center gap-x-2">
                                        <Image
                                            src="https://images.unsplash.com/photo-1444069788560-6ae1deb4c0d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format"
                                            alt=""
                                            width={80}
                                            height={80}
                                            className="h-12 w-12 rounded-full"
                                        />
                                        <div className="flex flex-col">
                                            <p className="font-bold text-black">
                                                Budi
                                            </p>
                                            <p className="text-sm text-gray-400">
                                                Bapak Budi
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
            {/* <div className="container absolute top-0 left-1/2 h-inherit w-inherit max-w-full -translate-x-1/2">
                <h1 className="absolute top-12 left-20 w-96 text-3xl font-bold">
                    Pendapat Pengguna tentang CraftConnect?
                </h1>
                <div className="absolute top-40 left-16 w-96 rounded border bg-white px-6 py-4 font-medium text-gray-500 shadow-md">
                    Qorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos.
                </div>
            </div>
            <div className="container absolute top-0 right-1/2 h-inherit w-inherit max-w-full translate-x-1/2">
                <div className="absolute top-0 right-16 flex w-96 flex-col gap-y-8">
                    <div className="flex flex-col gap-x-4 rounded border bg-white px-6 py-4 font-medium text-gray-500 shadow-md">
                        <div className="mb-2 flex items-center gap-x-2">
                            <Image
                                src="https://images.unsplash.com/photo-1444069788560-6ae1deb4c0d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format"
                                alt=""
                                width={160}
                                height={160}
                                className="h-8 w-8 rounded-full"
                            />
                            <p className="font-bold text-black">Budi</p>
                        </div>
                        <p className="text-sm">
                            Qorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nunc vulputate libero et velit interdum, ac
                            aliquet odio mattis. Class aptent taciti sociosqu ad
                            litora torquent per conubia nostra, per inceptos
                            himenaeos.
                        </p>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Pendapat;

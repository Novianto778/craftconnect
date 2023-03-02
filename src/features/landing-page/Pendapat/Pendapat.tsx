import Image from 'next/image';
import React, { useRef } from 'react';
import Quote from '@/assets/icon/quote.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

type Props = {};

const Pendapat = (props: Props) => {
    const navigationRef = useRef(null);
    // var mySwiper = new Swiper('.swiper-container', {
    //     // If we need pagination
    //     pagination: {
    //         el: '.swiper-pagination',
    //         clickable: true,
    //         renderBullet: function (index, className) {
    //             return (
    //                 '<span class="' + className + '">' + menu[index] + '</span>'
    //             );
    //         },
    //     },
    // });

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
                            // autoplay={{
                            //     delay: 3000,
                            // }}
                            // loop
                        >
                            <SwiperSlide>
                                <div className="flex max-w-[400px] flex-col gap-y-4 rounded border bg-white px-6 py-4 font-medium shadow-md">
                                    <p className="text-gray-500">
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
                                <div className="flex max-w-[400px] flex-col gap-y-4 rounded border bg-white px-6 py-4 font-medium shadow-md">
                                    <p className="text-gray-500">
                                        “Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Natus quis fugiat,
                                        error facere consectetur nobis.”
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
                                <div className="flex max-w-[400px] flex-col gap-y-4 rounded border bg-white px-6 py-4 font-medium shadow-md">
                                    <p className="text-gray-500">
                                        “Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Natus quis fugiat,
                                        error facere consectetur nobis.”
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
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pendapat;

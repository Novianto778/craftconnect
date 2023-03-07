import Story1 from '@/assets/img/story1.png';
import Story2 from '@/assets/img/story2.png';
import Story3 from '@/assets/img/story3.png';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillPlayCircle } from 'react-icons/ai';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';

type Props = {};

const ProductStory = (props: Props) => {
    return (
        <div className="product-story bg-[#54463B]">
            <div className="container">
                <h1 className="pt-8 text-center font-volkhov text-4xl text-white">
                    Cerita Produk
                </h1>
                <Swiper
                    modules={[Autoplay]}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                    }}
                    initialSlide={1}
                    centeredSlides={true}
                    className="!flex min-h-screen items-center justify-center"
                >
                    <SwiperSlide>
                        <div className="group relative w-max duration-300 hover:scale-110">
                            <Image
                                src={Story2}
                                alt="Story 2"
                                width={500}
                                height={500}
                                className={
                                    'aspect-[3/4] w-60 rounded bg-cover object-cover'
                                }
                            />
                            <div className="absolute left-0 top-0 h-full w-full bg-black/20"></div>
                            <Link
                                href="/story/batik-jawa"
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer text-gray-300 opacity-0 delay-200 duration-300 group-hover:opacity-100"
                            >
                                <AiFillPlayCircle size={92} />
                            </Link>
                            <span className="absolute top-2 left-2 font-volkhov text-2xl font-semibold tracking-widest text-white">
                                Kursi
                            </span>
                            <span className="absolute bottom-2 right-2 font-volkhov text-2xl font-semibold tracking-widest text-white">
                                Rotan
                            </span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="group relative w-max duration-300 hover:scale-110">
                            <Image
                                src={Story1}
                                alt="Story 1"
                                width={500}
                                height={500}
                                className={
                                    'aspect-[3/4] w-60 rounded bg-cover object-cover'
                                }
                            />
                            <div className="absolute left-0 top-0 h-full w-full bg-black/20"></div>
                            <Link
                                href="/story/batik-jawa"
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer text-gray-300 opacity-0 delay-200 duration-300 group-hover:opacity-100"
                            >
                                <AiFillPlayCircle size={92} />
                            </Link>
                            <span className="absolute top-2 left-2 font-volkhov text-2xl font-semibold tracking-widest text-white">
                                Batik
                            </span>
                            <span className="absolute bottom-2 right-2 font-volkhov text-2xl font-semibold tracking-widest text-white">
                                Jawa
                            </span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="group relative w-max duration-300 hover:scale-110">
                            <Image
                                src={Story3}
                                alt="Story 3"
                                width={500}
                                height={500}
                                className={
                                    'aspect-[3/4] w-60 rounded bg-cover object-cover'
                                }
                            />
                            <div className="absolute left-0 top-0 h-full w-full bg-black/20"></div>
                            <Link
                                href="/story/batik-jawa"
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer text-gray-300 opacity-0 delay-200 duration-300 group-hover:opacity-100"
                            >
                                <AiFillPlayCircle size={92} />
                            </Link>
                            <span className="absolute top-2 left-2 font-volkhov text-2xl font-semibold tracking-widest text-white">
                                Meja
                            </span>
                            <span className="absolute bottom-2 right-2 font-volkhov text-2xl font-semibold tracking-widest text-white">
                                Sonokeling
                            </span>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default ProductStory;

import Image from 'next/image';
import React, { useEffect } from 'react';
import HeroPattern from '@/assets/img/hero-pattern.png';
import HeroImg from '@/assets/img/hero.png';
import Link from 'next/link';
import AnimatedArrow from '@/shared/components/AnimatedArrow/AnimatedArrow';
import { gsap } from 'gsap';

type Props = {};

const Hero = (props: Props) => {
    useEffect(() => {
        gsap.fromTo(
            '.hero-img',
            {
                x: -100,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                delay: 0.5,
            }
        );

        gsap.fromTo(
            '.hero-tagline',
            {
                y: -100,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: 1,
            }
        );

        gsap.fromTo(
            '.hero-desc',
            {
                x: 100,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                delay: 1,
            }
        );

        gsap.fromTo(
            '.hero-cta',
            {
                y: 400,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: 1.5,
            }
        );

        gsap.fromTo(
            '.category-btn',
            {
                y: 100,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: 1,
            }
        );
    }, []);

    return (
        <div className="h-screen w-full bg-primary-cream">
            <div className="flex h-full w-full">
                <div className="hidden w-full flex-[3] overflow-hidden bg-black pt-10 md:block">
                    <Image
                        src={HeroPattern}
                        width={400}
                        height={900}
                        alt="hero pattern"
                    />
                </div>
                <div className="grid flex-[9] grid-cols-12 pt-10">
                    <div className="hero-img mt-4 hidden flex-col lg:col-span-6 lg:flex">
                        <Image
                            src={HeroImg}
                            width={700}
                            height={700}
                            alt="hero image"
                            className="-translate-x-1/3 rounded"
                        />
                        <div className="category-btn mt-auto flex w-96 items-center bg-primary-light-brown px-6 font-semibold text-white lg:h-full lg:max-h-[8rem]">
                            <span className="animated-arrow cursor-pointer">
                                <span className="the-arrow -left">
                                    <span className="shaft"></span>
                                </span>
                                <span className="main">
                                    <span className="text text-sm">
                                        Lihat Semua Kategori
                                    </span>
                                    <span className="the-arrow -right">
                                        <span className="shaft"></span>
                                    </span>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className="col-span-12 ml-20 lg:col-span-6 lg:ml-0">
                        <div className="flex h-full flex-col justify-center">
                            <h1 className="hero-tagline w-[90%] font-volkhov text-4xl font-bold leading-[1.2] sm:w-[80%] md:text-5xl">
                                <span className="hero-highlight">
                                    Eksplorasi
                                </span>{' '}
                                keunikan seni kerajinan tangan Indonesia
                            </h1>
                            <p className="hero-desc mt-8 w-80 text-lg font-medium text-[#292929]">
                                Jelajahi keragaman karya seni buatan tangan
                                indonesia
                            </p>

                            <Link
                                href="/explore"
                                className="hero-cta relative mt-16 flex items-center py-2 text-lg font-semibold"
                            >
                                <span className="cta-button relative">
                                    Eksplor Sekarang
                                </span>
                                <AnimatedArrow />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;

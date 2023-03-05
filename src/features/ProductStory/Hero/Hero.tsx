import { gsap } from 'gsap';
import React, { useEffect, useRef } from 'react';

type Props = {};

const Hero = (props: Props) => {
    const heroRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        gsap.to('.first', {
            delay: 0.2,
            left: '-100%',
            duration: 1.5,
            ease: 'Expo.easeInOut',
        });
        gsap.to('.second', {
            delay: 0.6,
            left: '-100%',
            duration: 1.5,
            ease: 'Expo.easeInOut',
        });
        gsap.to('.third', {
            delay: 1,
            left: '-100%',
            duration: 1.5,
            ease: 'Expo.easeInOut',
        });
        gsap.fromTo(
            '.product-title',
            {
                opacity: 0,
                y: 0,
            },
            {
                delay: 1,
                opacity: 1,
                y: -50,
                duration: 1,
                ease: 'Expo.easeInOut',
            }
        );
        gsap.fromTo(
            '.product-text p',
            {
                opacity: 0,
                y: -50,
            },
            {
                delay: 1.5,
                opacity: 1,
                y: -50,
                duration: 2,
                ease: 'Expo.easeInOut',
            }
        );
        gsap.fromTo(
            '.product-desc button',
            {
                opacity: 0,
                y: -50,
            },
            {
                delay: 1.5,
                opacity: 1,
                y: -200,
                duration: 1,
                ease: 'Expo.easeInOut',
            }
        );
    }, []);
    return (
        <div
            className="hero relative h-screen max-h-main overflow-hidden"
            ref={heroRef}
        >
            <div className="overlay first"></div>
            <div className="overlay second"></div>
            <div className="overlay third"></div>

            <div className="product-text">
                <h1 className="product-title font-volkhov text-5xl md:text-8xl">
                    Batik Pesona Nusantara
                </h1>
                <p>
                    Temukan opsi koleksi batik dengan desain variatif, unik dan
                    elegan untuk memenuhi koleksi batik anda.
                </p>
            </div>

            <div className="product-desc">
                <button className="hero-button">Pesan Sekarang</button>
            </div>
        </div>
    );
};

export default Hero;

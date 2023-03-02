import { gsap } from 'gsap';
import React, { useEffect } from 'react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';

const Gallery = () => {
    gsap.registerPlugin(ScrollTrigger);

    const comp = React.useRef(null);

    useEffect(() => {
        // Horizontal scroll
        let ctx = gsap.context(() => {
            let tlMain = gsap
                .timeline({
                    scrollTrigger: {
                        trigger: '.section-height',
                        start: 'top top',
                        end: '98% bottom',
                        scrub: 1,
                    },
                })
                .to('.track', {
                    xPercent: -100,
                    ease: 'none',
                });

            // hero photo
            gsap.timeline({
                scrollTrigger: {
                    trigger: '.hero-panel',
                    containerAnimation: tlMain,
                    start: 'left left',
                    end: 'right left',
                    scrub: true,
                },
            }).from('.hero-panel_img', { scale: 1.6 }, 0);

            // note
            gsap.timeline({
                scrollTrigger: {
                    trigger: '.note-panel',
                    containerAnimation: tlMain,
                    start: 'left right',
                    end: 'left left',
                    scrub: true,
                },
            }).from('.note-panel_img', { rotate: 45, scale: 0.3 });

            // thanks
            gsap.timeline({
                scrollTrigger: {
                    trigger: '.thanks-panel_wrap',
                    containerAnimation: tlMain,
                    start: 'left left',
                    end: 'right right',
                    scrub: true,
                },
            })
                .to('.thanks-panel', { xPercent: 100, ease: 'none' })
                .to('.thanks-panel_photo', { scale: 1 }, 0)
                .fromTo(
                    '.thanks-panel_contain.is-2',
                    {
                        clipPath:
                            'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
                    },
                    {
                        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                        ease: 'none',
                    },
                    0
                );

            // stagger photos
            gsap.timeline({
                scrollTrigger: {
                    trigger: '.stagger-panel',
                    containerAnimation: tlMain,
                    start: 'left right',
                    end: 'right left',
                    scrub: true,
                },
            })
                .from('.stagger-panel_img', {
                    x: '100vw',
                    stagger: { each: 0.05 },
                })
                .to('.stagger-panel_img', {
                    scale: 0.5,
                    stagger: { each: 0.05 },
                });
        }, comp);

        return () => {
            ctx.revert();
        };
    }, []);

    return (
        <section id="smooth-content" className="main-wrapper" ref={comp}>
            <div className="section-height">
                <div className="sticky-element">
                    <div className="track">
                        <div className="track-flex">
                            <div className="hero-panel">
                                <div className="hero-panel_img"></div>
                            </div>
                            <div className="note-panel">
                                <div className="note-panel_contain">
                                    <div className="note-panel_img">
                                        <div className="note-panel_img-height"></div>
                                    </div>
                                    <p>
                                        <strong>DEAR PHOTOGRAPHERS,</strong>YOU
                                        ARE CELEBRATED TODAY IN THIS LITTLE
                                        VIRTUAL PHOTOGRAPHIC GALLERY.
                                    </p>
                                </div>
                            </div>
                            <div className="thanks-panel_wrap">
                                <div className="thanks-panel">
                                    <div className="thanks-panel_contain">
                                        <p className="thanks-panel_text">
                                            Gallery
                                        </p>
                                        <div className="thanks-panel_img is-1">
                                            <div className="thanks-panel_img-height">
                                                <Image
                                                    src="https://images.unsplash.com/photo-1534126511673-b6899657816a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
                                                    loading="eager"
                                                    alt=""
                                                    className="thanks-panel_photo"
                                                    width={500}
                                                    height={500}
                                                />
                                            </div>
                                        </div>
                                        <div className="thanks-panel_img is-2">
                                            <div className="thanks-panel_img-height">
                                                <Image
                                                    src="https://images.unsplash.com/photo-1545056769-1e26065c82b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
                                                    loading="eager"
                                                    alt=""
                                                    className="thanks-panel_photo"
                                                    width={500}
                                                    height={500}
                                                />
                                            </div>
                                        </div>
                                        <div className="thanks-panel_img is-3">
                                            <div className="thanks-panel_img-height">
                                                <Image
                                                    src="https://images.unsplash.com/photo-1612736231323-e7bcba8fcbaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                                                    loading="eager"
                                                    alt=""
                                                    className="thanks-panel_photo"
                                                    width={500}
                                                    height={500}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="thanks-panel_contain is-2">
                                        <p className="thanks-panel_text">
                                            Gallery
                                        </p>
                                        <div className="thanks-panel_img is-1">
                                            <div className="thanks-panel_img-height">
                                                <Image
                                                    src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                                                    loading="eager"
                                                    alt=""
                                                    className="thanks-panel_photo"
                                                    width={500}
                                                    height={500}
                                                />
                                            </div>
                                        </div>
                                        <div className="thanks-panel_img is-2">
                                            <div className="thanks-panel_img-height">
                                                <Image
                                                    src="https://images.unsplash.com/photo-1608085576157-7c170e80d04e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                                                    loading="eager"
                                                    alt=""
                                                    className="thanks-panel_photo"
                                                    width={500}
                                                    height={500}
                                                />
                                            </div>
                                        </div>
                                        <div className="thanks-panel_img is-3">
                                            <div className="thanks-panel_img-height">
                                                <Image
                                                    src="https://images.unsplash.com/photo-1622076358551-aaf9a65a0878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjg4fHxjcmFmdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                                                    loading="eager"
                                                    alt=""
                                                    className="thanks-panel_photo"
                                                    width={500}
                                                    height={500}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="stagger-panel">
                                <div className="stagger-panel_img-wrap">
                                    <Image
                                        src="https://images.unsplash.com/photo-1611021061285-16c871740efa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                                        loading="eager"
                                        alt=""
                                        className="stagger-panel_img is-1"
                                        width={500}
                                        height={500}
                                    />
                                    <Image
                                        src="https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600"
                                        loading="eager"
                                        alt=""
                                        className="stagger-panel_img is-2"
                                        width={500}
                                        height={500}
                                    />
                                    <Image
                                        src="https://images.unsplash.com/photo-1609980775647-1fb1ef376268?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
                                        loading="eager"
                                        alt=""
                                        className="stagger-panel_img is-3"
                                        width={500}
                                        height={500}
                                    />
                                    <Image
                                        src="https://images.unsplash.com/photo-1612465289702-7c84b5258fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=373&q=80"
                                        loading="eager"
                                        alt=""
                                        className="stagger-panel_img is-4"
                                        width={500}
                                        height={500}
                                    />
                                    <Image
                                        src="https://images.unsplash.com/photo-1582131503261-fca1d1c0589f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29vZCUyMGFydHxlbnwwfDF8MHx8&auto=format&fit=crop&w=600&q=60"
                                        loading="eager"
                                        alt=""
                                        className="stagger-panel_img is-5"
                                        width={500}
                                        height={500}
                                    />
                                </div>
                            </div>
                            <div className="wide-panel">
                                <Image
                                    src="https://firebasestorage.googleapis.com/v0/b/chat-app-c7b2e.appspot.com/o/gallery.png?alt=media&token=ccfd2d0a-2a2a-4ce1-be1f-71a21285b8fa"
                                    loading="eager"
                                    alt=""
                                    className="wide-panel_img"
                                    width={1400}
                                    height={1400}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="footer"></div> */}
        </section>
    );
};

export default Gallery;

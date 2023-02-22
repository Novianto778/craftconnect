import { gsap } from 'gsap';
import React, { useEffect } from 'react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

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
        <div id="smooth-content" className="main-wrapper" ref={comp}>
            {/* <div className="hero">
                <div className="is-hero container">
                    <div className="hero_content">
                        <p className="hero_sub">PHOTOGRAPHER&#x27;S</p>
                        <h1>CELEBRATION</h1>
                        <div className="hero_p-wrap">
                            <p>
                                TODAY WE WANT TO HONOR ALL THE PHOTOGRAPHERS WHO
                                GENEROUSLY SHARE THEIR PICTURES WITH THE
                                WORLD.THIS WEBSITE IS A CELEBRATION OF THEIR
                                TALENT!
                            </p>
                        </div>
                    </div>
                </div>
            </div> */}
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
                                                <img
                                                    src="https://uploads-ssl.webflow.com/63f03bc7e2860c3ba3418ce4/63f03bc8e2860c0362418cf2_thanks-1.c050f96d.webp"
                                                    loading="eager"
                                                    alt=""
                                                    className="thanks-panel_photo"
                                                />
                                            </div>
                                        </div>
                                        <div className="thanks-panel_img is-2">
                                            <div className="thanks-panel_img-height">
                                                <img
                                                    src="https://uploads-ssl.webflow.com/63f03bc7e2860c3ba3418ce4/63f03bc8e2860c66f5418cf4_thanks-2.5b322fb7.webp"
                                                    loading="eager"
                                                    alt=""
                                                    className="thanks-panel_photo"
                                                />
                                            </div>
                                        </div>
                                        <div className="thanks-panel_img is-3">
                                            <div className="thanks-panel_img-height">
                                                <img
                                                    src="https://uploads-ssl.webflow.com/63f03bc7e2860c3ba3418ce4/63f03bc8e2860c48ab418cf5_thanks-3.48846b1e.webp"
                                                    loading="eager"
                                                    alt=""
                                                    className="thanks-panel_photo"
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
                                                <img
                                                    src="https://uploads-ssl.webflow.com/63f03bc7e2860c3ba3418ce4/63f03bc8e2860c315e418cf3_thanks-1bis.a9fa8549.webp"
                                                    loading="eager"
                                                    alt=""
                                                    className="thanks-panel_photo"
                                                />
                                            </div>
                                        </div>
                                        <div className="thanks-panel_img is-2">
                                            <div className="thanks-panel_img-height">
                                                <img
                                                    src="https://uploads-ssl.webflow.com/63f03bc7e2860c3ba3418ce4/63f03bc8e2860c06ee418cf6_thanks-2bis.0afa6688.webp"
                                                    loading="eager"
                                                    alt=""
                                                    className="thanks-panel_photo"
                                                />
                                            </div>
                                        </div>
                                        <div className="thanks-panel_img is-3">
                                            <div className="thanks-panel_img-height">
                                                <img
                                                    src="https://uploads-ssl.webflow.com/63f03bc7e2860c3ba3418ce4/63f03bc8e2860c3484418cf7_thanks-3bis.68c75dbb.webp"
                                                    loading="eager"
                                                    alt=""
                                                    className="thanks-panel_photo"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="stagger-panel">
                                <div className="stagger-panel_img-wrap">
                                    <img
                                        src="https://uploads-ssl.webflow.com/63f03bc7e2860c3ba3418ce4/63f03bc8e2860c464e418d00_groupe-centre2.24043a60.webp"
                                        loading="eager"
                                        srcSet="
                                  https://uploads-ssl.webflow.com/63f03bc7e2860c3ba3418ce4/63f03bc8e2860c464e418d00_groupe-centre2.24043a60-p-500.webp  500w,
                                  https://uploads-ssl.webflow.com/63f03bc7e2860c3ba3418ce4/63f03bc8e2860c464e418d00_groupe-centre2.24043a60-p-800.webp  800w,
                                  https://uploads-ssl.webflow.com/63f03bc7e2860c3ba3418ce4/63f03bc8e2860c464e418d00_groupe-centre2.24043a60.webp       1000w
                              "
                                        sizes="(max-width: 479px) 29vw, (max-width: 991px) 25vw, 14vw"
                                        alt=""
                                        className="stagger-panel_img is-1"
                                    />
                                    <img
                                        src="https://uploads-ssl.webflow.com/63f03bc7e2860c3ba3418ce4/63f03bc8e2860cba0e418cff_groupe-left3-v2.b32f9c0a.webp"
                                        loading="eager"
                                        alt=""
                                        className="stagger-panel_img is-2"
                                    />
                                    <img
                                        src="https://uploads-ssl.webflow.com/63f03bc7e2860c3ba3418ce4/63f03bc8e2860c4c67418d01_groupe-right2.8c20aca0.webp"
                                        loading="eager"
                                        srcSet="
                                  https://uploads-ssl.webflow.com/63f03bc7e2860c3ba3418ce4/63f03bc8e2860c4c67418d01_groupe-right2.8c20aca0-p-500.webp 500w,
                                  https://uploads-ssl.webflow.com/63f03bc7e2860c3ba3418ce4/63f03bc8e2860c4c67418d01_groupe-right2.8c20aca0.webp       750w
                              "
                                        sizes="(max-width: 479px) 42vw, (max-width: 991px) 36vw, 20vw"
                                        alt=""
                                        className="stagger-panel_img is-3"
                                    />
                                    <img
                                        src="https://uploads-ssl.webflow.com/63f03bc7e2860c3ba3418ce4/63f03bc8e2860cb11b418cfd_groupe-left2-v2.00b0dbc2.webp"
                                        loading="eager"
                                        alt=""
                                        className="stagger-panel_img is-4"
                                    />
                                    <img
                                        src="https://uploads-ssl.webflow.com/63f03bc7e2860c3ba3418ce4/63f03bc8e2860cda16418cfe_groupe-left1-v2.35b78d82.webp"
                                        loading="eager"
                                        alt=""
                                        className="stagger-panel_img is-5"
                                    />
                                </div>
                            </div>
                            <div className="wide-panel">
                                <img
                                    src="https://uploads-ssl.webflow.com/63f03bc7e2860c3ba3418ce4/63f03bc8e2860c8a1f418d03_sand3.4054f4f4.webp"
                                    loading="eager"
                                    srcSet="
                              https://uploads-ssl.webflow.com/63f03bc7e2860c3ba3418ce4/63f03bc8e2860c8a1f418d03_sand3.4054f4f4-p-500.webp   500w,
                              https://uploads-ssl.webflow.com/63f03bc7e2860c3ba3418ce4/63f03bc8e2860c8a1f418d03_sand3.4054f4f4-p-800.webp   800w,
                              https://uploads-ssl.webflow.com/63f03bc7e2860c3ba3418ce4/63f03bc8e2860c8a1f418d03_sand3.4054f4f4-p-1080.webp 1080w,
                              https://uploads-ssl.webflow.com/63f03bc7e2860c3ba3418ce4/63f03bc8e2860c8a1f418d03_sand3.4054f4f4-p-1600.webp 1600w,
                              https://uploads-ssl.webflow.com/63f03bc7e2860c3ba3418ce4/63f03bc8e2860c8a1f418d03_sand3.4054f4f4.webp        1920w
                          "
                                    sizes="100vw"
                                    alt=""
                                    className="wide-panel_img"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="footer"></div> */}
        </div>
    );
};

export default Gallery;

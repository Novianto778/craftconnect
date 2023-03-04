import cn from 'classnames';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useLayoutEffect, useRef, useState } from 'react';
import AboutUs from './AboutUs/AboutUs';
import Category from './Category/Category';
import Footer from './Footer/Footer';
import Gallery from './Gallery/Gallery';
import Hero from './Hero/Hero';
import JoinUs from './JoinUs/JoinUs';
import Keunggulan from './Keunggulan/Keunggulan';
import Pendapat from './Pendapat/Pendapat';
import ProductStory from './ProductStory/ProductStory';
import Sponsor from './Sponsor/Sponsor';

type Props = {};

gsap.registerPlugin(ScrollTrigger);
const LandingPage = (props: Props) => {
    const homeScroll = useRef<HTMLDivElement>(null);
    const childTriggers = useRef<HTMLDivElement[]>([]);
    const childTargets = useRef<HTMLDivElement[]>([]);
    const heroRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useLayoutEffect(() => {
        // childTriggers.current.map((childTrigger, index) => {
        //     ScrollTrigger.create({
        //         trigger: childTrigger,
        //         start: 'top center',
        //         end: 'bottom center',
        //         onToggle: (isActive) => {
        //             if (isActive) {
        //                 setActiveIndex(index);
        //             }
        //         },
        //     });
        // });
        // gsap.to('.first', {
        //     delay: 0.2,
        //     left: '-100%',
        //     duration: 1.5,
        //     ease: 'Expo.easeInOut',
        // });
        // gsap.to('.second', {
        //     delay: 0.6,
        //     left: '-100%',
        //     duration: 1.5,
        //     ease: 'Expo.easeInOut',
        // });
        // gsap.to('.third', {
        //     delay: 1,
        //     left: '-100%',
        //     duration: 1.5,
        //     ease: 'Expo.easeInOut',
        // });
        // gsap.fromTo(
        //     '.product-title',
        //     {
        //         opacity: 0,
        //         y: 0,
        //     },
        //     {
        //         delay: 1.5,
        //         opacity: 1,
        //         y: -50,
        //         duration: 1,
        //         ease: 'Expo.easeInOut',
        //     }
        // );
        // gsap.fromTo(
        //     '.product-img',
        //     {
        //         opacity: 0,
        //         y: -200,
        //     },
        //     {
        //         delay: 2,
        //         duration: 1,
        //         opacity: 1,
        //         y: -100,
        //         ease: 'Expo.easeInOut',
        //     }
        // );
        // gsap.fromTo(
        //     '.product-desc p',
        //     {
        //         opacity: 0,
        //         y: -50,
        //     },
        //     {
        //         delay: 2.5,
        //         opacity: 1,
        //         y: -50,
        //         duration: 2,
        //         ease: 'Expo.easeInOut',
        //     }
        // );
        // gsap.fromTo(
        //     '.product-desc button',
        //     {
        //         opacity: 0,
        //         y: -50,
        //     },
        //     {
        //         delay: 2.5,
        //         opacity: 1,
        //         y: -100,
        //         duration: 2,
        //         ease: 'Expo.easeInOut',
        //     }
        // );
    }, []);
    return (
        <div className="landing-page">
            {/* <div className="h-screen w-full bg-red-400"></div> */}
            {/* <ProductStory /> */}
            {/* <div
                className="hero relative h-screen max-h-main overflow-hidden bg-blue-200"
                ref={heroRef}
            >
                <div className="overlay first"></div>
                <div className="overlay second"></div>
                <div className="overlay third"></div>

                <img
                    src="https://raw.githubusercontent.com/Pd0420/Animated-adidas-website-Landing-Page-/fd774dc9a6d4ae9aecf0c7c92bc98c7824923bd1/hero.png"
                    alt=""
                    className="product-img"
                />

                <div className="product-text">
                    <h1 className="product-title text-[64px] sm:text-[92px] md:text-[120px] lg:text-[160px]">
                        CraftConnect.
                    </h1>
                </div>

                <div className="product-desc">
                    <p>The pure comfort is here!</p>
                    <button className="hero-button">Pesan Sekarang</button>
                </div>
            </div> */}
            <Hero />
            <AboutUs />
            <Sponsor />
            <ProductStory />
            <Keunggulan />
            <Gallery />
            <Category />
            <JoinUs />
            <Pendapat />
            {/* <section className="home-scroll_section" ref={homeScroll}>
                <div
                    id="w-node-_7e33c050-16d7-6450-728b-4393fedf22fa-86dde1de"
                    className="home-scroll_visual page-padding"
                >
                    <div className="home-scroll_img-wrap w-dyn-list">
                        <div
                            role="list"
                            className="home-scroll_img-list w-dyn-items"
                        >
                            <div
                                role="listitem"
                                className={cn(
                                    'home-scroll_img-item w-dyn-item',
                                    {
                                        'is-active': activeIndex === 0,
                                    }
                                )}
                                ref={(ref) => {
                                    if (ref && !childTargets.current[0])
                                        childTargets.current[0] = ref;
                                }}
                            >
                                <img
                                    src="https://uploads-ssl.webflow.com/63f98a0ee0a5071d9ddde1e8/63f98a0ee0a5075ad2dde1f1_filters_quality(85) (2).webp"
                                    loading="lazy"
                                    alt=""
                                    sizes="(max-width: 991px) 100vw, 37vw"
                                    srcSet="
                                            https://uploads-ssl.webflow.com/63f98a0ee0a5071d9ddde1e8/63f98a0ee0a5075ad2dde1f1_filters_quality(85)%2520(2)-p-500.webp   500w,
                                            https://uploads-ssl.webflow.com/63f98a0ee0a5071d9ddde1e8/63f98a0ee0a5075ad2dde1f1_filters_quality(85)%2520(2)-p-800.webp   800w,
                                            https://uploads-ssl.webflow.com/63f98a0ee0a5071d9ddde1e8/63f98a0ee0a5075ad2dde1f1_filters_quality(85)%2520(2)-p-1080.webp 1080w,
                                            https://uploads-ssl.webflow.com/63f98a0ee0a5071d9ddde1e8/63f98a0ee0a5075ad2dde1f1_filters_quality(85)%20(2).webp          1418w
                                        "
                                    className="home-scroll_img"
                                />
                            </div>
                            <div
                                role="listitem"
                                className={cn(
                                    'home-scroll_img-item w-dyn-item',
                                    {
                                        'is-active': activeIndex === 1,
                                    }
                                )}
                                ref={(ref) => {
                                    if (ref && !childTargets.current[1])
                                        childTargets.current[1] = ref;
                                }}
                            >
                                <img
                                    src="https://uploads-ssl.webflow.com/63f98a0ee0a5071d9ddde1e8/63f98a0ee0a50789f2dde1f0_filters_quality(85).webp"
                                    loading="lazy"
                                    alt=""
                                    sizes="(max-width: 991px) 100vw, 37vw"
                                    srcSet="
                                            https://uploads-ssl.webflow.com/63f98a0ee0a5071d9ddde1e8/63f98a0ee0a50789f2dde1f0_filters_quality(85)-p-500.webp   500w,
                                            https://uploads-ssl.webflow.com/63f98a0ee0a5071d9ddde1e8/63f98a0ee0a50789f2dde1f0_filters_quality(85)-p-800.webp   800w,
                                            https://uploads-ssl.webflow.com/63f98a0ee0a5071d9ddde1e8/63f98a0ee0a50789f2dde1f0_filters_quality(85)-p-1080.webp 1080w,
                                            https://uploads-ssl.webflow.com/63f98a0ee0a5071d9ddde1e8/63f98a0ee0a50789f2dde1f0_filters_quality(85).webp        1436w
                                        "
                                    className="home-scroll_img"
                                />
                            </div>
                            <div
                                role="listitem"
                                className={cn(
                                    'home-scroll_img-item w-dyn-item',
                                    {
                                        'is-active': activeIndex === 2,
                                    }
                                )}
                                ref={(ref) => {
                                    if (ref && !childTargets.current[2])
                                        childTargets.current[2] = ref;
                                }}
                            >
                                <img
                                    src="https://uploads-ssl.webflow.com/63f98a0ee0a5071d9ddde1e8/63f98a0ee0a5078047dde1ef_filters_quality(85) (3).webp"
                                    loading="lazy"
                                    alt=""
                                    sizes="(max-width: 991px) 100vw, 37vw"
                                    srcSet="
                                            https://uploads-ssl.webflow.com/63f98a0ee0a5071d9ddde1e8/63f98a0ee0a5078047dde1ef_filters_quality(85)%2520(3)-p-500.webp   500w,
                                            https://uploads-ssl.webflow.com/63f98a0ee0a5071d9ddde1e8/63f98a0ee0a5078047dde1ef_filters_quality(85)%2520(3)-p-800.webp   800w,
                                            https://uploads-ssl.webflow.com/63f98a0ee0a5071d9ddde1e8/63f98a0ee0a5078047dde1ef_filters_quality(85)%2520(3)-p-1080.webp 1080w,
                                            https://uploads-ssl.webflow.com/63f98a0ee0a5071d9ddde1e8/63f98a0ee0a5078047dde1ef_filters_quality(85)%2520(3)-p-1600.webp 1600w,
                                            https://uploads-ssl.webflow.com/63f98a0ee0a5071d9ddde1e8/63f98a0ee0a5078047dde1ef_filters_quality(85)%2520(3)-p-2000.webp 2000w,
                                            https://uploads-ssl.webflow.com/63f98a0ee0a5071d9ddde1e8/63f98a0ee0a5078047dde1ef_filters_quality(85)%20(3).webp          2274w
                                        "
                                    className="home-scroll_img"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    id="w-node-_7e33c050-16d7-6450-728b-4393fedf2302-86dde1de"
                    className="home-scroll_content page-padding"
                >
                    <div className="home-scroll_text-wrap w-dyn-list">
                        <div
                            role="list"
                            className="home-scroll_text-list w-dyn-items"
                        >
                            <div
                                role="listitem"
                                className={cn(
                                    'home-scroll_text-item w-dyn-item',
                                    {
                                        'is-active': activeIndex === 0,
                                    }
                                )}
                                ref={(ref) => {
                                    if (ref && !childTriggers.current[0])
                                        childTriggers.current[0] = ref;
                                }}
                            >
                                <img
                                    src="https://uploads-ssl.webflow.com/63f98a0ee0a5071d9ddde1e8/63f98a0ee0a5075ad2dde1f1_filters_quality(85) (2).webp"
                                    loading="lazy"
                                    alt=""
                                    sizes="(max-width: 767px) 87vw, (max-width: 991px) 479.9999694824219px, 100vw"
                                    srcSet="
                                            https://uploads-ssl.webflow.com/63f98a0ee0a5071d9ddde1e8/63f98a0ee0a5075ad2dde1f1_filters_quality(85)%2520(2)-p-500.webp   500w,
                                            https://uploads-ssl.webflow.com/63f98a0ee0a5071d9ddde1e8/63f98a0ee0a5075ad2dde1f1_filters_quality(85)%2520(2)-p-800.webp   800w,
                                            https://uploads-ssl.webflow.com/63f98a0ee0a5071d9ddde1e8/63f98a0ee0a5075ad2dde1f1_filters_quality(85)%2520(2)-p-1080.webp 1080w,
                                            https://uploads-ssl.webflow.com/63f98a0ee0a5071d9ddde1e8/63f98a0ee0a5075ad2dde1f1_filters_quality(85)%20(2).webp          1418w
                                        "
                                    className="home-scroll_photo"
                                />
                                <h2 className="text-size-h1">Fully edible</h2>
                                <p>
                                    Apeel is made from edible plant oils and
                                    composed entirely of mono and diglycerides.
                                    Apeel products are non-GMO, include no
                                    animal-derived inputs and do not contain
                                    wheat, soybean, peanuts, tree nuts (almond
                                    nuts, brazil nuts, cashew nuts, hazelnuts,
                                    macadamia nuts, pecan nuts, pine nuts,
                                    pistachio nuts or walnuts) sesame seeds,
                                    mustard, sulfites, or inputs from milk,
                                    eggs, fish, shellfish, or crustacea. We are
                                    committed to ensuring the highest standards
                                    of purity for our products in accordance
                                    with food regulations in your country.
                                </p>
                            </div>
                            <div
                                role="listitem"
                                className={cn(
                                    'home-scroll_text-item w-dyn-item',
                                    {
                                        'is-active': activeIndex === 1,
                                    }
                                )}
                                ref={(ref) => {
                                    if (ref && !childTriggers.current[1])
                                        childTriggers.current[1] = ref;
                                }}
                            >
                                <img
                                    src="https://uploads-ssl.webflow.com/63f98a0ee0a5071d9ddde1e8/63f98a0ee0a50789f2dde1f0_filters_quality(85).webp"
                                    loading="lazy"
                                    alt=""
                                    sizes="(max-width: 767px) 87vw, (max-width: 991px) 479.9999694824219px, 100vw"
                                    srcSet="
                                            https://uploads-ssl.webflow.com/63f98a0ee0a5071d9ddde1e8/63f98a0ee0a50789f2dde1f0_filters_quality(85)-p-500.webp   500w,
                                            https://uploads-ssl.webflow.com/63f98a0ee0a5071d9ddde1e8/63f98a0ee0a50789f2dde1f0_filters_quality(85)-p-800.webp   800w,
                                            https://uploads-ssl.webflow.com/63f98a0ee0a5071d9ddde1e8/63f98a0ee0a50789f2dde1f0_filters_quality(85)-p-1080.webp 1080w,
                                            https://uploads-ssl.webflow.com/63f98a0ee0a5071d9ddde1e8/63f98a0ee0a50789f2dde1f0_filters_quality(85).webp        1436w
                                        "
                                    className="home-scroll_photo"
                                />
                                <h2 className="text-size-h1">Invisible</h2>
                                <p>
                                    Apeel is colorless, odorless, and tasteless
                                    on produce. Just like the cuticle “peel” on
                                    the outside of plants, Apeel’s peel is tiny.
                                    And even though the ingredient is safe to
                                    eat in much higher quantities, the amount of
                                    Apeel on the surface of produce is
                                    exceptionally low. Even if all of the
                                    produce you consumed was treated with Apeel,
                                    the contribution of monoglycerides and
                                    diglycerides to your daily dietary fat
                                    intake would equal less than 1%.
                                </p>
                            </div>
                            <div
                                role="listitem"
                                className={cn(
                                    'home-scroll_text-item w-dyn-item',
                                    {
                                        'is-active': activeIndex === 2,
                                    }
                                )}
                                ref={(ref) => {
                                    if (ref && !childTriggers.current[2])
                                        childTriggers.current[2] = ref;
                                }}
                            >
                                <img
                                    src="https://uploads-ssl.webflow.com/63f98a0ee0a5071d9ddde1e8/63f98a0ee0a5078047dde1ef_filters_quality(85) (3).webp"
                                    loading="lazy"
                                    alt=""
                                    sizes="(max-width: 767px) 87vw, (max-width: 991px) 479.9999694824219px, 100vw"
                                    srcSet="
                                            https://uploads-ssl.webflow.com/63f98a0ee0a5071d9ddde1e8/63f98a0ee0a5078047dde1ef_filters_quality(85)%2520(3)-p-500.webp   500w,
                                            https://uploads-ssl.webflow.com/63f98a0ee0a5071d9ddde1e8/63f98a0ee0a5078047dde1ef_filters_quality(85)%2520(3)-p-800.webp   800w,
                                            https://uploads-ssl.webflow.com/63f98a0ee0a5071d9ddde1e8/63f98a0ee0a5078047dde1ef_filters_quality(85)%2520(3)-p-1080.webp 1080w,
                                            https://uploads-ssl.webflow.com/63f98a0ee0a5071d9ddde1e8/63f98a0ee0a5078047dde1ef_filters_quality(85)%2520(3)-p-1600.webp 1600w,
                                            https://uploads-ssl.webflow.com/63f98a0ee0a5071d9ddde1e8/63f98a0ee0a5078047dde1ef_filters_quality(85)%2520(3)-p-2000.webp 2000w,
                                            https://uploads-ssl.webflow.com/63f98a0ee0a5071d9ddde1e8/63f98a0ee0a5078047dde1ef_filters_quality(85)%20(3).webp          2274w
                                        "
                                    className="home-scroll_photo"
                                />
                                <h2 className="text-size-h1">Non-GMO</h2>
                                <p>
                                    Apeel products are non-GMO, include no
                                    animal-derived inputs and do not contain
                                    wheat, soybean, corn, peanuts, tree nuts
                                    (almond nuts, brazil nuts, cashew nuts,
                                    hazelnuts, macadamia nuts, pecan nuts, pine
                                    nuts, pistachio nuts or walnuts) sesame
                                    seeds, mustard, sulfites, or inputs from
                                    milk, eggs, fish, shellfish, or crustacea.
                                    We are committed to ensuring the highest
                                    standards of purity for our products in
                                    accordance with food regulations in your
                                    country.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <Footer />
        </div>
    );
};

export default LandingPage;

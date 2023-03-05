import cn from 'classnames';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

type Props = {};

gsap.registerPlugin(ScrollTrigger);
const Popular = (props: Props) => {
    const childTriggers = useRef<HTMLDivElement[]>([]);
    const childTargets = useRef<HTMLDivElement[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        childTriggers.current.map((childTrigger, index) => {
            ScrollTrigger.create({
                trigger: childTrigger,
                start: 'top center',
                end: 'bottom center',
                onToggle: (isActive) => {
                    if (isActive) {
                        setActiveIndex(index);
                    }
                },
            });
        });
    }, []);

    return (
        <div className="relative bg-[#a4947b]">
            <div className="popular-pattern z-10"></div>
            <h1 className="z-20 pl-16 pt-8 font-volkhov text-4xl font-bold text-white md:max-w-md">
                Produk batik yang paling populer di Pesona Nusantara
            </h1>
            <section className="home-scroll_section relative z-20">
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
                                <Image
                                    src="https://firebasestorage.googleapis.com/v0/b/chat-app-c7b2e.appspot.com/o/batiktulis.png?alt=media&token=d292ae7a-e691-461a-b772-34f97c0fbbdd"
                                    loading="lazy"
                                    alt=""
                                    className="home-scroll_img"
                                    width={600}
                                    height={600}
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
                                <Image
                                    src="https://firebasestorage.googleapis.com/v0/b/chat-app-c7b2e.appspot.com/o/batikcelup.png?alt=media&token=cfc0d7f6-c24c-4720-a26c-6110e757dc0d"
                                    alt=""
                                    className="home-scroll_img"
                                    width={600}
                                    height={600}
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
                                <Image
                                    src="https://firebasestorage.googleapis.com/v0/b/chat-app-c7b2e.appspot.com/o/batikcap.png?alt=media&token=bd7ba649-a70a-4370-aa65-936a36a4f796"
                                    alt=""
                                    className="home-scroll_img"
                                    width={600}
                                    height={600}
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
                                <Image
                                    src="https://firebasestorage.googleapis.com/v0/b/chat-app-c7b2e.appspot.com/o/batiktulis.png?alt=media&token=d292ae7a-e691-461a-b772-34f97c0fbbdd"
                                    alt=""
                                    className="home-scroll_photo"
                                    width={600}
                                    height={600}
                                />
                                <h2 className="text-size-h1">Batik tulis</h2>
                                <p>
                                    Batik tulis menjadi populer karena merupakan
                                    karya seni tradisional yang memiliki
                                    keunikan dan nilai sejarah. Proses
                                    pembuatannya yang dilakukan secara manual
                                    dan membutuhkan keahlian tinggi menjadikan
                                    setiap kain batik tulis memiliki nilai seni
                                    yang tinggi. Sehingga hal tersebut membuat
                                    kain batik tulis menjadi salah satu kain
                                    batik yang paling dicari.
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
                                <Image
                                    src="https://firebasestorage.googleapis.com/v0/b/chat-app-c7b2e.appspot.com/o/batikcelup.png?alt=media&token=cfc0d7f6-c24c-4720-a26c-6110e757dc0d"
                                    alt=""
                                    className="home-scroll_photo"
                                    width={600}
                                    height={600}
                                />
                                <h2 className="text-size-h1">Batik celup</h2>
                                <p>
                                    Batik celup populer di kalangan konsumen
                                    yang mencari kain batik yang indah namun
                                    dengan harga yang terjangkau. Batik celup
                                    juga populer di kalangan masyarakat yang
                                    menghargai kain batik sebagai warisan budaya
                                    dan ingin memakainya sebagai busana
                                    sehari-hari. Corak motif yang populer pada
                                    batik celup adalah motif Mega Mendung,
                                    Lereng, Truntum, dan Sekar Jagad.
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
                                <Image
                                    src="https://firebasestorage.googleapis.com/v0/b/chat-app-c7b2e.appspot.com/o/batikcap.png?alt=media&token=bd7ba649-a70a-4370-aa65-936a36a4f796"
                                    alt=""
                                    className="home-scroll_photo"
                                    width={600}
                                    height={600}
                                />
                                <h2 className="text-size-h1">Batik cap</h2>
                                <p>
                                    Menempati posisi ketiga sebagai batik
                                    populer di antara koleksi Pesona Nusantara
                                    batik yang digemari konsumen. Kain batik cap
                                    juga populer di kalangan masyarakat yang
                                    ingin memakainya sebagai busana sehari-hari
                                    namun tetap terlihat elegan dan memiliki
                                    nilai budaya yang tinggi namun dengan harga
                                    yang terjangkau.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Popular;

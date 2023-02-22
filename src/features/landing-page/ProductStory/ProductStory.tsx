import React, { useEffect, useRef } from 'react';
import { FaArrowRight, FaPlay, FaVideo } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
import { RiArrowRightUpFill } from 'react-icons/ri';

type Props = {};

const ProductStory = (props: Props) => {
    const trailerRef = useRef<HTMLDivElement>(null);
    const productStoryRef = useRef<HTMLDivElement>(null);
    const [currentIcon, setCurrentIcon] = React.useState<string | null>(null);

    const animateTrailer = (e: MouseEvent, interacting: boolean) => {
        const x = e.clientX - trailerRef?.current?.offsetWidth! / 2,
            y = e.clientY - trailerRef?.current?.offsetHeight! / 2;

        const keyframes = {
            transform: `translate(${x}px, ${y}px) scale(${
                interacting ? 4 : 1
            })`,
        };

        trailerRef?.current?.animate(keyframes, {
            duration: 800,
            fill: 'forwards',
        });
    };

    const getTrailerIcon = (type: string) => {
        switch (type) {
            case 'video':
                return <FaPlay />;
            case 'link':
                return <RiArrowRightUpFill />;
            default:
                return <i></i>;
        }
    };

    useEffect(() => {
        // mouseevent type
        const mouseMoveHandler = (e: MouseEvent) => {
            const x = e.clientX - trailerRef?.current?.offsetWidth! / 2,
                y = e.clientY - trailerRef?.current?.offsetHeight! / 2;

            // check if mouse not in product story

            // if (
            //     e.clientX < productStoryRef?.current?.offsetLeft! ||
            //     e.clientX >
            //         productStoryRef?.current?.offsetLeft! +
            //             productStoryRef?.current?.offsetWidth! ||
            //     e.clientY < productStoryRef?.current?.offsetTop! ||
            //     e.clientY >
            //         productStoryRef?.current?.offsetTop! +
            //             productStoryRef?.current?.offsetHeight!
            // ) {
            //     setShowTrailer(true);
            //     const keyframes = {
            //         transform: `translate(${x}px, ${y}px)`,
            //     };

            //     trailerRef?.current?.animate(keyframes, {
            //         duration: 800,
            //         fill: 'forwards',
            //     });
            // } else {
            //     setShowTrailer(false);
            // }
            // let interacting = false;

            const interactable = (e.target as HTMLElement).closest(
                    '.interactable'
                ),
                interacting = interactable !== null;

            // const icon = document.getElementById('trailer-icon');

            animateTrailer(e, interacting);
            if (trailerRef.current) {
                trailerRef.current.dataset.type = interacting
                    ? (interactable as HTMLElement).dataset.type
                    : '';
            }

            setCurrentIcon((interactable as HTMLElement)?.dataset.type! || '');
        };

        window.addEventListener('mousemove', mouseMoveHandler);
        return () => {
            window.removeEventListener('mousemove', mouseMoveHandler);
        };
    }, []);

    return (
        <div
            className="flex h-screen items-center justify-center gap-x-12 bg-gray-400"
            ref={productStoryRef}
        >
            <div id="trailer" ref={trailerRef}>
                {/* <i id="trailer-icon" className="fa-solid fa-arrow-up-right"></i> */}
                <i id="trailer-icon">{getTrailerIcon(currentIcon!)}</i>
            </div>

            <div
                className="interactable"
                data-type="link"
                style={{
                    backgroundImage:
                        'url(https://images.unsplash.com/photo-1657739774592-14c8f97eaece?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60)',
                }}
            ></div>

            <div
                className="interactable"
                data-type="video"
                style={{
                    backgroundImage:
                        'url(https://images.unsplash.com/photo-1657779582398-a13b5896ff19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60)',
                }}
            ></div>
        </div>
    );
};

export default ProductStory;

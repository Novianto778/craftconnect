import '@/features/landing-page/Gallery/gallery.css';
import '@/features/landing-page/Hero/hero.css';
import '@/features/landing-page/landingpage.css';
import '@/features/ProductStory/Popular/Popular.css';
import ModalContainer from '@/layout/ModalContainer/ModalContainer';
import Navbar from '@/layout/Navbar/Navbar';
import CubeLoading from '@/shared/components/CubeLoading/CubeLoading';
import '@/styles/globals.css';
import cn from 'classnames';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Router, { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';

import { Poppins, Volkhov } from '@next/font/google';

const volkhov = Volkhov({
    weight: ['400', '700'],
    variable: '--font-volkhov',
    subsets: ['latin'],
});

const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    variable: '--font-poppins',
    subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
    const [showChild, setShowChild] = useState(false);
    const router = useRouter();

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const start = () => {
            setLoading(true);
        };
        const end = () => {
            setLoading(false);
        };
        Router.events.on('routeChangeStart', start);
        Router.events.on('routeChangeComplete', end);
        Router.events.on('routeChangeError', end);
        return () => {
            Router.events.off('routeChangeStart', start);
            Router.events.off('routeChangeComplete', end);
            Router.events.off('routeChangeError', end);
        };
    }, []);

    const isHideNavbar = false;
    useEffect(() => {
        setShowChild(true);
    }, []);

    if (!showChild) {
        return null;
    }

    if (typeof window === 'undefined') {
        return <></>;
    }

    return (
        <div className={`${volkhov.variable} ${poppins.variable}`}>
            <Head>
                <link rel="icon" href="/images/logo.ico" />
            </Head>
            <Toaster />
            <div className="h-full font-poppins">
                <ModalContainer />
                {!isHideNavbar && !loading && <Navbar />}
                <div
                    className={cn('h-full max-h-main', {
                        'mt-[60px]': !isHideNavbar && router.pathname !== '/',
                    })}
                >
                    {loading ? <CubeLoading /> : <Component {...pageProps} />}
                </div>
            </div>
        </div>
    );
}

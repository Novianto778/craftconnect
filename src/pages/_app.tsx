import '@/features/landing-page/Gallery/gallery.css';
import '@/features/landing-page/ProductStory/ProductStory.css';
import ModalContainer from '@/layout/ModalContainer/ModalContainer';
import Navbar from '@/layout/Navbar/Navbar';
import CubeLoading from '@/shared/components/CubeLoading/CubeLoading';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Router, { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';

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

    const isAuthPage =
        router.pathname === '/login' || router.pathname === '/register';
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
        <>
            <Head>
                <link rel="icon" href="/images/logo.ico" />
            </Head>
            <Toaster />
            <div className="h-full">
                <ModalContainer />
                {!isAuthPage && <Navbar />}
                <div className="h-full max-h-main">
                    {loading ? <CubeLoading /> : <Component {...pageProps} />}
                </div>
            </div>
        </>
    );
}

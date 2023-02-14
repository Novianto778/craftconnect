import ModalContainer from '@/layout/ModalContainer/ModalContainer';
import Navbar from '@/layout/Navbar/Navbar';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }: AppProps) {
    const [showChild, setShowChild] = useState(false);
    const router = useRouter();

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
                    <Component {...pageProps} />
                </div>
            </div>
        </>
    );
}

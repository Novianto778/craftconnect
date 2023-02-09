import ModalContainer from '@/layout/ModalContainer/ModalContainer';
import Navbar from '@/layout/Navbar/Navbar';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

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
        <html>
            <Head>
                <link rel="icon" href="/images/logo.ico" />
            </Head>
            <div className="h-screen">
                <ModalContainer />
                {!isAuthPage && <Navbar />}
                <div className="max-h-main h-full">
                    <Component {...pageProps} />
                </div>
            </div>
        </html>
    );
}

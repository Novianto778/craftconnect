import ModalContainer from '@/layout/ModalContainer/ModalContainer';
import Navbar from '@/layout/Navbar/Navbar';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link rel="icon" href="/images/logo.ico" />
            </Head>
            <div className="h-screen">
                <ModalContainer />
                <Navbar />
                <div className="max-h-main h-full">
                    <Component {...pageProps} />
                </div>
            </div>
        </>
    );
}

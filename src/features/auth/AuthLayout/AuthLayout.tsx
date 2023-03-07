import Head from 'next/head';
import React from 'react';

type Props = {
    children: React.ReactNode;
    title: string;
};

const AuthLayout = ({ children, title }: Props) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>

            <div className="context pt-[60px] absolute top-0 left-1/2 z-50 flex min-h-main h-full -translate-x-1/2 items-center justify-center">
                <div className="flex w-full max-w-[400px] flex-col items-center gap-3 rounded-xl bg-white p-8">
                    <span className="font-primary text-3xl font-bold text-gray-700">
                        CraftConnect
                    </span>
                    <span className="text-base font-medium">{title}</span>
                    {children}
                </div>
            </div>

            <div className="area">
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    );
};

export default AuthLayout;

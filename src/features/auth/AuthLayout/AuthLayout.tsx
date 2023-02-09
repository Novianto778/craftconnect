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

            <div className="context h-screen flex items-center justify-center absolute top-0 left-1/2 -translate-x-1/2 z-50">
                <div className="bg-white p-8 rounded-xl flex flex-col gap-3 items-center max-w-[400px] w-full">
                    <span className="text-gray-700 font-bold text-3xl font-primary">
                        CraftConnect
                    </span>
                    <span className="font-medium text-base">{title}</span>
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

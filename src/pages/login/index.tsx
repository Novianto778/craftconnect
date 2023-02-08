import React from 'react';
import Head from 'next/head';
import Input from '@/shared/components/Input/Input';
import { LoginSchema, LoginType } from './login.types';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import styles from '@/styles/background.module.css';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/lib/firebase';
import Link from 'next/link';
import { withPublic } from '@/layout/route';

type Props = {};

const LoginPage = (props: Props) => {
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginType>({
        resolver: zodResolver(LoginSchema),
    });

    const onSubmit = async (data: LoginType) => {
        await signInWithEmailAndPassword(data.email, data.password);
    };

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            <Head>
                <title>Login</title>
            </Head>

            <div className="h-screen flex items-center justify-center absolute top-0 left-1/2 -translate-x-1/2 z-50">
                <div className="bg-white p-8 rounded-xl flex flex-col gap-3 items-center min-w-[400px] w-full">
                    <span className="text-gray-700 font-bold text-3xl font-primary">
                        CraftConnect
                    </span>
                    <span className="font-medium text-base">Login</span>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col gap-5 w-full"
                    >
                        <Input
                            type="email"
                            placeholder="email"
                            variant="floating"
                            label="Email"
                            sizes="sm"
                            error={errors.email?.message}
                            {...register('email')}
                        />
                        <Input
                            type="password"
                            placeholder="password"
                            variant="floating"
                            label="password"
                            sizes="sm"
                            error={errors.password?.message}
                            {...register('password')}
                        />

                        <button type="submit">Sign In</button>
                    </form>
                    <p>
                        Belum punya akun? <Link href="/register">Daftar</Link>
                    </p>
                </div>
            </div>

            <div className={styles.area}>
                <ul className={styles.circles}>
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
        </>
    );
};

export default withPublic(LoginPage);

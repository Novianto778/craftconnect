import { auth } from '@/lib/firebase';
import Input from '@/shared/components/Input/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { LoginSchema, LoginType } from './login.types';

type Props = {};

const LoginForm = (props: Props) => {
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
        </>
    );
};

export default LoginForm;

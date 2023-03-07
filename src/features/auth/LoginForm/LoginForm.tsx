import { auth } from '@/lib/firebase';
import Button from '@/shared/components/Button/Button';
import Input from '@/shared/components/Input/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { LoginSchema, LoginType } from './login.types';
import { toast } from 'react-hot-toast';

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
    if (error && !loading) {
            toast.error(error.message);
        }
    };

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

                <Button type="submit" isLoading={loading}>
                    Sign In
                </Button>
            </form>
            <p>
                Belum punya akun?{' '}
                <Link href="/register" className="text-blue-600">
                    Daftar
                </Link>
            </p>
        </>
    );
};

export default LoginForm;

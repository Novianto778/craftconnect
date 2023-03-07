import AddAvatar from '@/assets/img/addAvatar.png';
import { auth, firestore, storage } from '@/lib/firebase';
import Button from '@/shared/components/Button/Button';
import Input from '@/shared/components/Input/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { doc, setDoc } from 'firebase/firestore';
import { getDownloadURL, ref } from 'firebase/storage';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import {
    useCreateUserWithEmailAndPassword,
    useSignInWithEmailAndPassword,
} from 'react-firebase-hooks/auth';
import { useUploadFile } from 'react-firebase-hooks/storage';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { RegisterSchema, RegisterType } from './register.types';

type RoleType = {
    value: string;
    label: string;
};

type Props = {};

const RegisterForm = (props: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterType>({
        resolver: zodResolver(RegisterSchema),
    });
    const [image, setImage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth);
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

    const [uploadFile] = useUploadFile();

    console.log(errors);

    if (error) {
        toast.error(error.message);
    }

    const onSubmit = async (data: RegisterType) => {
        setIsLoading(true);
        const createdUser = await createUserWithEmailAndPassword(
            data.email,
            data.password
        );
        const storageRef = ref(
            storage,
            `avatars/${data.username}/${createdUser?.user?.uid}`
        );
        // await uploadFile(storageRef, data.avatar[0]);
        // const avatarUrl = await getDownloadURL(storageRef);

        const userRef = doc(firestore, 'users', createdUser?.user?.uid!);
        await setDoc(userRef, {
            uid: createdUser?.user?.uid,
            username: data.username,
            email: data.email,
            role: 'customer',
            avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
        });
        await setDoc(doc(firestore, 'userChats', createdUser?.user?.uid!), {});
        await signInWithEmailAndPassword(data.email, data.password);
        setIsLoading(false);
        router.push('/');
    };
    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex w-full flex-col gap-5"
            >
                <Input
                    type="text"
                    placeholder="username"
                    variant="floating"
                    label="Username"
                    sizes="sm"
                    error={errors.username?.message}
                    {...register('username')}
                />
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
                {/* <div>
                    <input
                        type="file"
                        {...register('avatar')}
                        id="avatar"
                        className="hidden"
                        onChange={(e) => {
                            if (e.target.files) {
                                setImage(
                                    URL.createObjectURL(e.target.files[0])
                                );
                            }
                        }}
                    />
                </div>
                {image ? (
                    <div className="relative h-20 w-20">
                        <Image
                            src={image}
                            width={64}
                            height={64}
                            alt="avatar"
                        />
                    </div>
                ) : (
                    <label
                        htmlFor="avatar"
                        className="flex cursor-pointer items-center gap-x-2"
                    >
                        <Image
                            src={AddAvatar}
                            width={32}
                            height={32}
                            alt="add avatar"
                        />
                        <span className="text-sm text-gray-500">
                            Tambahkan Avatar
                        </span>
                    </label>
                )} */}
                {errors.avatar && (
                    <p className="text-sm text-red-500">
                        {errors.avatar.message as string}
                    </p>
                )}
                <Button type="submit" isLoading={loading || isLoading}>
                    Sign Up
                </Button>
            </form>
            <p>
                Sudah punya akun?{' '}
                <Link href="/login" className="text-blue-600">
                    Login
                </Link>
            </p>
        </>
    );
};

export default RegisterForm;

import AddAvatar from '@/assets/img/addAvatar.png';
import { auth, firestore, storage } from '@/lib/firebase';
import Input from '@/shared/components/Input/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { doc, setDoc } from 'firebase/firestore';
import { getDownloadURL, ref } from 'firebase/storage';
import Image from 'next/image';
import Link from 'next/link';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useUploadFile } from 'react-firebase-hooks/storage';
import { Controller, useForm } from 'react-hook-form';
import ReactSelect from 'react-select';
import { FormSchema, FormType } from './register.types';

type RoleType = {
    value: string;
    label: string;
};

const roleOptions: RoleType[] = [
    { value: 'umkm', label: 'UMKM' },
    {
        value: 'customer',
        label: 'Customer',
    },
];

type Props = {};

const RegisterForm = (props: Props) => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<FormType>({
        resolver: zodResolver(FormSchema),
    });

    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth);

    const [uploadFile] = useUploadFile();

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <p>Loading...</p>;
    }

    const onSubmit = async (data: FormType) => {
        const createdUser = await createUserWithEmailAndPassword(
            data.email,
            data.password
        );
        const storageRef = ref(
            storage,
            `avatars/${data.username}/${createdUser?.user?.uid}`
        );
        await uploadFile(storageRef, data.avatar[0]);
        const avatarUrl = await getDownloadURL(storageRef);

        const userRef = doc(firestore, 'users', createdUser?.user?.uid!);
        await setDoc(userRef, {
            uid: createdUser?.user?.uid,
            username: data.username,
            email: data.email,
            role: data.role.value,
            avatar: avatarUrl,
        });
        await setDoc(doc(firestore, 'userChats', createdUser?.user?.uid!), {});
    };
    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-5 w-full"
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
                <Controller
                    name="role"
                    control={control}
                    render={({ field }) => (
                        <ReactSelect
                            options={roleOptions}
                            placeholder="Pilih Role"
                            className="text-sm"
                            {...field}
                        />
                    )}
                />

                <div>
                    <input
                        type="file"
                        {...register('avatar')}
                        id="avatar"
                        className="hidden"
                    />
                    <label
                        htmlFor="avatar"
                        className="flex gap-x-2 items-center cursor-pointer"
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
                </div>

                <button type="submit">Sign Up</button>
            </form>
            <p>
                Sudah punya akun? <Link href="/login">Login</Link>
            </p>
        </>
    );
};

export default RegisterForm;

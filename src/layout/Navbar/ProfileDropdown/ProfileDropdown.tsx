import { auth } from '@/lib/firebase';
import Button from '@/shared/components/Button/Button';
import useOnClickOutside from '@/shared/hooks/useOnClickOutside';
import Image from 'next/image';
import { useRef } from 'react';
import { useSignOut } from 'react-firebase-hooks/auth';
import { User } from 'typings';

type Props = {
    currentUser: User;
};

const ProfileDropdown = ({ currentUser }: Props) => {
    const [signOut, loading] = useSignOut(auth);

    return (
        <div className="absolute right-0 flex min-w-[200px] flex-col gap-y-4 rounded bg-gray-800 px-4 py-2">
            <div className="flex items-center gap-x-2">
                {currentUser?.avatar && (
                    <Image
                        src={currentUser?.avatar as string}
                        width={32}
                        height={32}
                        alt="user profile"
                        onClick={() => signOut()}
                    />
                )}
                <p className="text-sm font-semibold">
                    Hi, {currentUser?.username}
                </p>
            </div>
            <div className="flex flex-col gap-y-2">
                <Button size="sm" isLoading={loading} onClick={() => signOut()}>
                    Sign Out
                </Button>
            </div>
        </div>
    );
};

export default ProfileDropdown;

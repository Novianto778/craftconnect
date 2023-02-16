import { auth } from '@/lib/firebase';
import Button from '@/shared/components/Button/Button';
import { useAuthStore } from '@/store/authStore';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { User } from 'typings';

type Props = {
    currentUser: User;
};

const ProfileDropdown = ({ currentUser }: Props) => {
    const [signOut, loading] = useSignOut(auth);
    const setCurrentUser = useAuthStore((state) => state.setCurrentUser);

    const handleLogout = async () => {
        await signOut();
        setCurrentUser(null);
    };

    return (
        <div className="absolute right-0 z-200 flex min-w-[200px] flex-col gap-y-4 rounded bg-gray-800 px-4 py-2">
            <div className="flex items-center gap-x-2">
                {currentUser?.avatar && (
                    <Image
                        src={currentUser?.avatar as string}
                        width={32}
                        height={32}
                        alt="user profile"
                    />
                )}
                <p className="text-sm font-semibold">
                    Hi, {currentUser?.username}
                </p>
            </div>
            <div className="flex flex-col gap-y-2">
                <Button size="sm" isLoading={loading} onClick={handleLogout}>
                    Sign Out
                </Button>
            </div>
        </div>
    );
};

export default ProfileDropdown;

import useAuth from '@/shared/hooks/useAuth';
import Image from 'next/image';
import React from 'react';

type Props = {};

const Navbar = (props: Props) => {
    const { currentUser } = useAuth();
    return (
        <div className="user-info-header fixed top-[60px] z-50 w-full bg-white px-5 py-2">
            <div className="flex justify-between">
                <div className="flex items-center">
                    {currentUser ? (
                        <Image
                            src={currentUser?.avatar}
                            width={28}
                            height={28}
                            alt="profile image"
                        />
                    ) : (
                        <div className="h-7 w-7 rounded-full bg-gray-300"></div>
                    )}
                    <h3 className="tex-md pl-4 text-gray-400">
                        {currentUser?.username
                            ? currentUser?.username
                            : 'username'}
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

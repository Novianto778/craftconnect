import useAuth from '@/shared/hooks/useAuth';
import React from 'react';

type Props = {};

const Navbar = (props: Props) => {
    const { currentUser } = useAuth();
    return (
        <div className="bg-white user-info-header px-5 py-2 fixed top-14 z-50 w-full">
            <div className="flex justify-between">
                <div className="flex items-center">
                    <img src={currentUser?.avatar} width="28" />
                    <h3 className="text-gray-400 tex-md pl-4">
                        {currentUser?.username}
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

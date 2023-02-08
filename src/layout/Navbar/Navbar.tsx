import { auth } from '@/lib/firebase';
import React from 'react';
import { useSignOut } from 'react-firebase-hooks/auth';

type Props = {};

const Navbar = (props: Props) => {
    const [signOut, loading, error] = useSignOut(auth);
    return (
        <div className="h-14 w-full bg-blue-200 sticky top-0 z-100">
            Navbar
            <button onClick={() => signOut()}>Sign Out</button>
        </div>
    );
};

export default Navbar;

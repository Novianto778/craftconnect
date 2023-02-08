import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { User } from 'typings';
import { auth, firestore } from '@/lib/firebase';

const useAuth = () => {
    const [user, loading] = useAuthState(auth);
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const getCurrentUser = async () => {
        const res = await getDoc(doc(firestore, 'users', user?.uid!));
        if (res.exists()) {
            setCurrentUser(res.data() as User);
        }
    };
    useEffect(
        () => {
            if (user) {
                getCurrentUser();
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [user]
    );

    return { currentUser, loading };
};

export default useAuth;

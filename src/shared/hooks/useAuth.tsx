import { auth, firestore } from '@/lib/firebase';
import { useAuthStore } from '@/store/authStore';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { User } from 'typings';

const useAuth = () => {
    const [user, isLoading] = useAuthState(auth);
    const currentUser = useAuthStore((state) => state.currentUser);
    const setCurrentUser = useAuthStore((state) => state.setCurrentUser);
    const loading = useAuthStore((state) => state.loading);
    const setLoading = useAuthStore((state) => state.setLoading);

    // console.log('currentuser in useAuth', currentUser);

    useEffect(() => {
        const getCurrentUser = async () => {
            const res = await getDoc(doc(firestore, 'users', user?.uid!));
            if (res.exists()) {
                setCurrentUser(res.data() as User);
            } else {
                setCurrentUser(null);
            }
            setLoading(false);
        };

        if (user) {
            getCurrentUser();
        }

        if (!user && !isLoading) {
            setLoading(false);
        }
    }, [user?.uid]);

    return { currentUser, loading };
};

export default useAuth;

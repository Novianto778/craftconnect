import { firestore } from '@/lib/firebase';
import useUserStore from '@/store/userStore';
import { User } from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect } from 'react';
import useAuth from './useAuth';

const useUser = () => {
    const users = useUserStore((state) => state.users);
    const setUsers = useUserStore((state) => state.setUsers);
    const [loading, setLoading] = React.useState<boolean>(false);
    const { currentUser } = useAuth();

    useEffect(() => {
        if (!currentUser) return;
        const getUsers = async () => {
            setLoading(true);

            try {
                const q = query(
                    collection(firestore, 'users'),
                    where('uid', '!=', currentUser?.uid)
                );

                const querySnapshot = await getDocs(q);
                const users: User[] = [];
                querySnapshot.forEach((doc) => {
                    users.push(doc.data() as User);
                });

                setUsers(users);
            } catch (error) {
                console.log('Error getting documents: ', error);
            }
            setLoading(false);
        };
        getUsers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentUser]);

    return { users, loading };
};

export default useUser;

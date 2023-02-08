import { auth } from '@/lib/firebase';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

export function withProtected(Component: React.FC) {
    return function ProtectedComponent(props: any) {
        const [user, loading] = useAuthState(auth);
        const router = useRouter();
        useEffect(() => {
            if (!user && !loading) {
                router.replace('/login');
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [user, loading]);

        if (!user || loading) {
            return <h1>Loading...</h1>;
        }

        return <Component {...props} />;
    };
}

export function withPublic(Component: React.FC) {
    return function PublicComponent(props: any) {
        const [user, loading] = useAuthState(auth);
        const router = useRouter();
        useEffect(() => {
            if (user && !loading) {
                router.replace('/');
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [user]);

        if (user || loading) {
            return <h1>Loading...</h1>;
        }

        return <Component {...props} />;
    };
}

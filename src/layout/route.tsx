import Spinner from '@/shared/components/Spinner/Spinner';
import useAuth from '@/shared/hooks/useAuth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export function withProtected(
    Component: React.FC,
    allowedRoles: string[] = []
) {
    return function ProtectedComponent(props: any) {
        const { currentUser, loading } = useAuth();
        const router = useRouter();

        // console.log('isAuth protected', currentUser, loading);

        const isAllowed =
            allowedRoles.length > 0
                ? allowedRoles.includes(currentUser?.role!)
                : true;

        // console.log('isAuth', currentUser, loading);
        // useEffect(() => {
        if (!isAllowed && !loading) {
            router.replace('/');
        }
        if (!currentUser && !loading) {
            router.replace('/login');
        }
        // }, [currentUser]);

        if (!currentUser || loading) {
            return <Spinner fullPage size="lg" />;
        }

        return <Component {...props} />;
    };
}

export function withPublic(Component: React.FC) {
    return function PublicComponent(props: any) {
        const { currentUser, loading } = useAuth();
        const router = useRouter();

        // console.log('isAuth public', currentUser, loading);

        if (currentUser && !loading) {
            router.replace('/');
        }
        if (currentUser || loading) {
            return <Spinner fullPage size="lg" />;
        }

        return <Component {...props} />;
    };
}

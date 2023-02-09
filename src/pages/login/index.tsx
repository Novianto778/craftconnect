import AuthLayout from '@/features/auth/AuthLayout/AuthLayout';
import LoginForm from '@/features/auth/LoginForm/LoginForm';
import { withPublic } from '@/layout/route';

type Props = {};

const LoginPage = (props: Props) => {
    return (
        <>
            <AuthLayout title="Login">
                <LoginForm />
            </AuthLayout>
        </>
    );
};

export default withPublic(LoginPage);

import AuthLayout from '@/features/auth/AuthLayout/AuthLayout';
import RegisterForm from '@/features/auth/RegisterForm/RegisterForm';
import { withPublic } from '@/layout/route';

type Props = {};


const RegisterPage = (props: Props) => {
    
    return (
        <>
        
            <AuthLayout title="Register">
                <RegisterForm />
            </AuthLayout>
        </>
    );
};

export default withPublic(RegisterPage);

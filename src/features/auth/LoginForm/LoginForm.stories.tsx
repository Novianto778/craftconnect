import { ComponentMeta, ComponentStory } from '@storybook/react';
import AuthLayout from '../AuthLayout/AuthLayout';
import LoginForm from './LoginForm';

export default {
    title: 'Pages/Login',
    component: LoginForm,
    decorators: [
        (Story) => (
            <AuthLayout title="Login">
                <Story />
            </AuthLayout>
        ),
    ],
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
    <LoginForm {...args} />
);

export const Login = Template.bind({});
Login.args = {};
Login.storyName = 'Login Page';

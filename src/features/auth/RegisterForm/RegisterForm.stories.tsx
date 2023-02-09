import { ComponentMeta, ComponentStory } from '@storybook/react';
import AuthLayout from '../AuthLayout/AuthLayout';
import RegisterForm from './RegisterForm';

export default {
    title: 'Pages/Register',
    component: RegisterForm,
    decorators: [
        (Story) => (
            <AuthLayout title="Register">
                <Story />
            </AuthLayout>
        ),
    ],
} as ComponentMeta<typeof RegisterForm>;

const Template: ComponentStory<typeof RegisterForm> = (args) => (
    <RegisterForm {...args} />
);

export const Register = Template.bind({});
Register.args = {};
Register.storyName = 'Register Page';

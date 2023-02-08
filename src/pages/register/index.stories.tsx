import { Meta, Story } from '@storybook/react';
import RegisterPage from '.';

export default {
    title: 'Pages/Register',
    component: RegisterPage,
} as Meta;

const Template: Story = (args) => <RegisterPage {...args} />;

export const Register = Template.bind({});
Register.args = {};
Register.storyName = 'Register Page';

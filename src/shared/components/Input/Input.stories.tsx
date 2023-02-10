import { ComponentMeta, ComponentStory } from '@storybook/react';
import Input from './Input';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        type: {
            control: {
                type: 'radio',
                options: ['text', 'password'],
            },
        },
        variant: {
            control: {
                type: 'radio',
                required: true,
            },
        },
        // label: {
        //     name: 'label',
        //     type: { name: 'string', required: true },
        //     defaultValue: 'Hello',
        //     description: 'demo description',
        //     table: {
        //         type: { summary: 'string' },
        //         defaultValue: { summary: 'Hello' },
        //     },
        //     control: {
        //         type: 'text',
        //     },
        // },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
    type: 'text',
    placeholder: 'text',
    variant: 'primary',
    label: 'Default label',
    sizes: 'sm',
};

export const Primary = Template.bind({});
Primary.args = {
    ...Default.args,
    variant: 'primary',
};

export const Underline = Template.bind({});
Underline.args = {
    ...Default.args,
    variant: 'underline',
};

export const Floating = Template.bind({});
Floating.args = {
    ...Default.args,
    variant: 'floating',
};

export const Password = Template.bind({});
Password.args = {
    ...Default.args,
    type: 'password',
    placeholder: 'password',
    label: 'password',
};

export const Disabled = Template.bind({});
Disabled.args = {
    ...Default.args,
    disabled: true,
};

export const WrapperClassName = Template.bind({});
WrapperClassName.args = {
    ...Default.args,
    wrapperClassName: 'p-4 bg-gray-200',
};

export const CustomWidth = Template.bind({});
CustomWidth.args = {
    ...Default.args,
    wrapperClassName: 'w-1/2',
};

export const CustomColor = Template.bind({});
CustomColor.args = {
    ...Default.args,
    className: 'text-white bg-gray-700 focus:bg-gray-800',
};

export const Error = Template.bind({});
Error.args = {
    ...Default.args,
    error: 'This is error message',
};

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BiArrowToRight, BiFace, BiUpArrow } from 'react-icons/bi';
import Button from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    args: {
        children: 'Button',
        variant: 'primary',
        size: 'base',
        fullWidth: false,
        isLoading: false,
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
    variant: 'secondary',
};

export const Icon = Template.bind({});
Icon.args = {
    iconLeft: <BiUpArrow />,
    iconRight: <BiArrowToRight />,
};

export const Outlined = Template.bind({});
Outlined.args = {
    variant: 'outlined',
    className: 'text-black border-2 border-black',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
    fullWidth: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};

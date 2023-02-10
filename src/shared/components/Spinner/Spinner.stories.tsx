import { ComponentMeta, ComponentStory } from '@storybook/react';
import Spinner from './Spinner';

export default {
    title: 'shared/Spinner',
    component: Spinner,
    args: {
        fullPage: false,
        size: 'base',
        color: 'white',
    },
    argTypes: {
        color: {
            control: {
                type: 'select',
                options: ['white', 'blue-500', 'gray-500'],
            },
        },
    },
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => (
    <Spinner {...args} />
);

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [
    (Story) => (
        <div className="bg-blue-500 w-[50vw] h-[50vh]">
            <Story />
        </div>
    ),
];

export const FullPage = Template.bind({});
FullPage.args = {
    fullPage: true,
};

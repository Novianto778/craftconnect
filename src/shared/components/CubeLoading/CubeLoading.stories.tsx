import CubeLoading from './CubeLoading';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'shared/CubeLoading',
    component: CubeLoading,
} as ComponentMeta<typeof CubeLoading>;

const Template: ComponentStory<typeof CubeLoading> = (args) => (
    <CubeLoading {...args} />
);
export const Default = Template.bind({});

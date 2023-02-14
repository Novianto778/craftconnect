import { ComponentMeta, ComponentStory } from '@storybook/react';
import RangeSlider from './RangeSlider';

export default {
    title: 'shared/RangeSlider',
    component: RangeSlider,
} as ComponentMeta<typeof RangeSlider>;

const Template: ComponentStory<typeof RangeSlider> = (args) => (
    <RangeSlider {...args} />
);

export const Default = Template.bind({});
Default.args = {
    min: 0,
    max: 1000000,
    step: 10000,
    onChange: (min, max) => console.log(min, max),
};

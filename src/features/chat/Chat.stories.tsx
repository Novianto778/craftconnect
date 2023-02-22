import Navbar from '@/layout/Navbar/Navbar';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Chat from './Chat';

export default {
    title: 'Pages/Chat',
    component: Chat,
} as ComponentMeta<typeof Chat>;

const Template: ComponentStory<typeof Chat> = (args) => <Chat {...args} />;

export const Default = Template.bind({});
Default.storyName = 'Chat Page';

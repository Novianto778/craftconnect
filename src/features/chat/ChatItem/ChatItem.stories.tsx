import { ComponentMeta, ComponentStory } from '@storybook/react';
import ChatItem from './ChatItem';

export default {
    title: 'features/chat/ChatItem',
    component: ChatItem,
    argTypes: {
        children: {
            control: {
                type: 'text',
            },
        },
    },
} as ComponentMeta<typeof ChatItem>;

const Template: ComponentStory<typeof ChatItem> = (args) => (
    <ChatItem {...args} />
);

export const Receive = Template.bind({});
Receive.args = {
    type: 'receive',
    time: '12.00',
    children: 'Ini adalah pesan dari orang lain',
};

export const Send = Template.bind({});
Send.args = {
    type: 'send',
    time: '12.05',
    children: 'Ini adalah pesan yang Anda kirimkan',
};

export const SendAndReceive: ComponentStory<typeof ChatItem> = (args) => (
    <div className="flex flex-col gap-y-4" {...args}>
        <ChatItem type="receive" time={args.time}>
            {args.children}
        </ChatItem>
        <ChatItem type="send" time={args.time}>
            {args.children}
        </ChatItem>
    </div>
);

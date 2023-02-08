import Chat from '@/features/chat/Chat';
import { withProtected } from '@/layout/route';
import Head from 'next/head';
import React from 'react';

type Props = {};

const ChatPage = (props: Props) => {
    return (
        <>
            <Head>
                <title>Chat</title>
            </Head>
            <Chat />
        </>
    );
};

export default withProtected(ChatPage);

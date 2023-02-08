import { firestore } from '@/lib/firebase';
import useAuth from '@/shared/hooks/useAuth';
import { useChatStore } from '@/store/chatStore';
import {
    doc,
    onSnapshot
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import ChatInput from '../ChatInput/ChatInput';
import ChatItem from '../ChatItem/ChatItem';
import useChats from '../useChats';

type Props = {};

const ChatArea = (props: Props) => {
    const { currentUser } = useAuth();
    const chatId = useChatStore((state) => state.chatId);
    const [messages, setMessages] = useState<any[]>([]);
    const selectedUser = useChatStore((state) => state.selectedUser);
    const { handleSend } = useChats();

    useEffect(() => {
        if (!chatId) return;
        const unsubscribe = onSnapshot(
            doc(firestore, 'chats', chatId),
            (doc) => {
                const data = doc.data();
                if (data) {
                    setMessages(data.messages);
                }
            }
        );

        return () => {
            unsubscribe();
        };
    }, [chatId]);

    return (
        <div className="relative pb-20">
            {selectedUser ? (
                <>
                    <div className="pt-20 px-4 gap-y-4 flex flex-col">
                        {messages.map((message: any) => (
                            <ChatItem
                                key={message.id}
                                type={
                                    message.senderId === currentUser?.uid
                                        ? 'send'
                                        : 'receive'
                                }
                                time={message.date
                                    ?.toDate()
                                    ?.toLocaleTimeString()}
                            >
                                {message.text}
                            </ChatItem>
                        ))}
                    </div>
                    <ChatInput onSend={handleSend} />
                </>
            ) : (
                <div className="flex items-center justify-center h-full max-h-main">
                    <h1 className="text-2xl font-semibold">
                        Pilih user untuk memulai percakapan
                    </h1>
                </div>
            )}
        </div>
    );
};

export default ChatArea;

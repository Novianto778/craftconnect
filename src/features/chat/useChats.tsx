import { firestore } from '@/lib/firebase';
import useAuth from '@/shared/hooks/useAuth';
import { useChatStore } from '@/store/chatStore';
import { useModalStore } from '@/store/modalStore';
import {
    arrayUnion, doc, getDoc, onSnapshot, serverTimestamp, setDoc, Timestamp, updateDoc
} from 'firebase/firestore';
import { useEffect } from 'react';
import { User, UserChat } from 'typings';
import { v4 as uuid } from 'uuid';

const useChats = () => {
    const chats = useChatStore((state) => state.chats);
    const setChats = useChatStore((state) => state.setChats);
    const selectedUser = useChatStore((state) => state.selectedUser);
    const setSelectedUser = useChatStore((state) => state.setSelectedUser);
    const setChatId = useChatStore((state) => state.setChatId);
    const chatId = useChatStore((state) => state.chatId);
    const loading = useChatStore((state) => state.loading);
    const setLoading = useChatStore((state) => state.setLoading);
    const { currentUser } = useAuth();
    const closeModal = useModalStore((state) => state.closeModal);
    const query = useChatStore((state) => state.query);
    const setQuery = useChatStore((state) => state.setQuery);

    const filteredChat = chats.filter((chat) => {
        return chat[1].userInfo.username
            .toLowerCase()
            .includes(query.toLowerCase());
    });

    const handleSelect = async (selectedUser: User) => {
        setSelectedUser(selectedUser);
        const combineId =
            currentUser?.uid! > selectedUser.uid
                ? currentUser?.uid + selectedUser.uid
                : selectedUser.uid + currentUser?.uid;
        setChatId(combineId);

        try {
            const res = await getDoc(doc(firestore, 'chats', combineId));
            if (!res.exists()) {
                await setDoc(doc(firestore, 'chats', combineId), {
                    messages: [],
                });

                await updateDoc(
                    doc(firestore, 'userChats', currentUser?.uid!),
                    {
                        [combineId]: {
                            userInfo: {
                                uid: selectedUser.uid,
                                username: selectedUser.username,
                                avatar: selectedUser.avatar,
                                email: selectedUser.email,
                                role: selectedUser.role,
                            },
                            lastMessage: {
                                message: '',
                                timestamp: '',
                            },
                            // unread: 0,
                            date: serverTimestamp(),
                        },
                    }
                );
                await updateDoc(
                    doc(firestore, 'userChats', selectedUser?.uid!),
                    {
                        [combineId]: {
                            userInfo: {
                                uid: currentUser?.uid,
                                username: currentUser?.username,
                                avatar: currentUser?.avatar,
                                email: currentUser?.email,
                                role: currentUser?.role,
                            },
                            lastMessage: {
                                message: '',
                                timestamp: '',
                            },
                            // unread: 0,
                            date: serverTimestamp(),
                        },
                    }
                );
            }
        } catch (error) {
            console.log('Error getting documents: ', error);
        }
        closeModal();
    };

    const handleSend = async (message: string) => {
        await updateDoc(doc(firestore, 'chats', chatId), {
            messages: arrayUnion({
                id: uuid(),
                text: message,
                senderId: currentUser?.uid,
                date: Timestamp.now(),
            }),
        });
        await updateDoc(doc(firestore, 'userChats', selectedUser?.uid!), {
            [`${chatId}.date`]: Timestamp.now(),
            [`${chatId}.lastMessage`]: {
                message,
                timestamp: Timestamp.now(),
            },
        });
        await updateDoc(doc(firestore, 'userChats', currentUser?.uid!), {
            [`${chatId}.date`]: Timestamp.now(),
            [`${chatId}.lastMessage`]: {
                message,
                timestamp: Timestamp.now(),
            },
        });
    };

    useEffect(() => {
        if (!currentUser?.uid) return;
        setLoading(true);
        const unsub = onSnapshot(
            doc(firestore, 'userChats', currentUser?.uid),
            (doc) => {
                if (doc.exists()) {
                    setChats(Object.entries(doc.data() as UserChat));
                    setLoading(false);
                }
            }
        );
        return () => {
            unsub();
        };
    }, [currentUser?.uid]);

    return {
        chats,
        setChats,
        selectedUser,
        setSelectedUser,
        handleSelect,
        chatId,
        setChatId,
        loading,
        handleSend,
        setQuery,
        query,
        filteredChat,
        setLoading,
    };
};

export default useChats;

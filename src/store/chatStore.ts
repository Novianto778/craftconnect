import { User } from 'typings';
import { create } from 'zustand';

type ChatStore = {
    selectedUser: User | null;
    setSelectedUser: (user: User | null) => void;
    chats: any[];
    setChats: (chats: any[]) => void;
    chatId: string;
    setChatId: (chatId: string) => void;
    query: string;
    setQuery: (query: string) => void;
    loading: boolean;
    setLoading: (loading: boolean) => void;
};

export const useChatStore = create<ChatStore>((set) => ({
    selectedUser: null,
    setSelectedUser: (user: User | null) => set({ selectedUser: user }),
    chats: [],
    setChats: (chats: any[]) => set({ chats }),
    chatId: '',
    setChatId: (chatId: string) => set({ chatId }),
    query: '',
    setQuery: (query: string) => set({ query }),
    loading: true,
    setLoading: (loading: boolean) => set({ loading }),
}));

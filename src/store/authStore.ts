import { User } from 'typings';
import { create } from 'zustand';

export interface AuthStore {
    currentUser: User | null;
    setCurrentUser: (user: User | null) => void;
    loading: boolean;
    setLoading: (loading: boolean) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
    currentUser: null,
    setCurrentUser: (user: User | null) => set({ currentUser: user }),
    loading: true,
    setLoading: (loading: boolean) => set({ loading }),
}));

import { create } from 'zustand';

type UserStore = {
    users: any[];
    setUsers: (user: any) => void;
};

const useUserStore = create<UserStore>((set) => ({
    users: [],
    setUsers: (user: any) => set({ users: user }),
}));

export default useUserStore;

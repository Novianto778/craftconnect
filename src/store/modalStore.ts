import { create } from 'zustand';

type ModalStore = {
    isOpen: boolean;
    setIsOpen: (element: React.ReactElement) => void;
    modalContent: React.ReactElement | null;
    closeModal: () => void;
};

export const useModalStore = create<ModalStore>((set) => ({
    isOpen: false,
    setIsOpen: (element: React.ReactElement) =>
        set({ isOpen: true, modalContent: element }),
    modalContent: null,
    closeModal: () => set({ isOpen: false, modalContent: null }),
}));

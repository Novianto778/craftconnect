import { useModalStore } from '@/store/modalStore';
import React from 'react';

type Props = {};

const ModalContainer = (props: Props) => {
    const isOpen = useModalStore((state) => state.isOpen);
    const modalContent = useModalStore((state) => state.modalContent);
    return <>{isOpen && modalContent}</>;
};

export default ModalContainer;

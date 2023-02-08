import Input from '@/shared/components/Input/Input';
import { useModalStore } from '@/store/modalStore';
import React from 'react';
import { BiMessageAdd } from 'react-icons/bi';
import useChats from '../useChats';
import UserModal from '../UserModal/UserModal';

type Props = {};

const Search = (props: Props) => {
    const setIsOpen = useModalStore((state) => state.setIsOpen);
    const { setQuery } = useChats();

    const handleOpenModal = () => {
        setIsOpen(<UserModal />);
    };

    return (
        <div className="search-box h-10 text-slate-800 w-full">
            <div className="flex items-center justify-between px-5 border-b border-slate-100 pb-4 w-full">
                <div className="flex items-center w-full">
                    <Input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Search"
                        className="focus:outline-none"
                        variant="underline"
                        onChange={(e) => setQuery(e.target.value)}
                        wrapperClassName="w-full"
                    />
                </div>
                <div>
                    <button className="relative" onClick={handleOpenModal}>
                        <BiMessageAdd size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Search;

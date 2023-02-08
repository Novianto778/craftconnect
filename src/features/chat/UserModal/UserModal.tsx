import useUser from '@/shared/hooks/useUser';
import { useModalStore } from '@/store/modalStore';
import React from 'react';
import useChats from '../useChats';
import UserListItem from '../UserListItem/UserListItem';

type Props = {};

const UserModal = (props: Props) => {
    const { users, loading } = useUser();
    const { handleSelect } = useChats();
    const closeModal = useModalStore((state) => state.closeModal);

    return (
        <div
            className="modal fade fixed top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/4  w-screen h-screen outline-none overflow-x-hidden overflow-y-auto z-300"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex={-1}
            aria-labelledby="modal"
            aria-hidden="true"
        >
            <div className="modal-dialog relative w-auto pointer-events-none">
                <div className="modal-content border-none shadow-lg relative flex flex-col w-full max-w-[680px] pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                    <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                        <h5
                            className="text-xl font-medium leading-normal text-gray-800"
                            id="exampleModalLabel"
                        >
                            Pilih User
                        </h5>
                        <button
                            type="button"
                            className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body relative p-4">
                        {users &&
                            users.map((user) => (
                                <UserListItem
                                    user={user}
                                    onSelect={handleSelect}
                                />
                            ))}
                    </div>
                    <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                        <button
                            onClick={closeModal}
                            type="button"
                            className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                            data-bs-dismiss="modal"
                        >
                            Tutup
                        </button>
                        {/* <button
                            type="button"
                            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                        >
                            Understood
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserModal;

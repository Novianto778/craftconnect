import Spinner from '@/shared/components/Spinner/Spinner';
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

    console.log(users);
    

    return (
        <div
            className="modal fade fixed top-1/2 left-1/2 z-200  w-screen -translate-x-1/4 -translate-y-1/2 overflow-y-auto overflow-x-hidden outline-none h-[70vh]"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex={-1}
            aria-labelledby="modal"
            aria-hidden="true"
        >
            <div className="modal-dialog pointer-events-none relative w-auto">
                <div className="modal-content pointer-events-auto relative flex w-full max-w-[680px] flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none">
                    <div className="modal-header flex flex-shrink-0 items-center justify-between rounded-t-md border-b border-gray-200 p-4">
                        <h5
                            className="text-xl font-medium leading-normal text-gray-800"
                            id="exampleModalLabel"
                        >
                            Pilih User
                        </h5>
                        <button
                            type="button"
                            className="btn-close box-content h-4 w-4 rounded-none border-none p-1 text-black opacity-50 hover:text-black hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body relative p-4 max-h-80 overflow-y-auto">
                        {
                            loading && <p>Loading...</p>
                        }
                        {
                            !loading && !users && <p>Tidak ada user</p>
                        }
                        {users &&
                            users.map((user) => (
                                <UserListItem
                                    user={user}
                                    onSelect={handleSelect}
                                />
                            ))}
                    </div>
                    <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t border-gray-200 p-4">
                        <button
                            onClick={closeModal}
                            type="button"
                            className="inline-block rounded bg-purple-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg"
                            data-bs-dismiss="modal"
                        >
                            Tutup
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserModal;

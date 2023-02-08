import Image from 'next/image';
import React from 'react';
import { User } from 'typings';

type Props = {
    onSelect?: (selectedUser: User) => Promise<void>;
    user: User;
    isSelected?: boolean;
    lastMessage?: {
        message: string;
        timestamp: string;
    };
};

const UserListItem = ({ onSelect, user, isSelected, lastMessage }: Props) => {
    const handleSelect = () => {
        onSelect?.(user);
    };

    return (
        <div
            className={`flex items-center hover:bg-slate-100 transition px-5 py-3 hover:cursor-pointer ${
                isSelected ? 'bg-slate-100' : ''
            }`}
            onClick={handleSelect}
        >
            <div className="pr-4 w-auto h-auto">
                <Image
                    src={user?.avatar}
                    alt="profile"
                    width={32}
                    height={32}
                />
            </div>
            <div>
                <h3 className="text-black text-sm font-medium">
                    {user?.username}
                </h3>

                {lastMessage && (
                    <p className="text-sm text-gray-400 overflow-hidden h-5">
                        {(lastMessage?.message.substring(0, 30) as string) ||
                            'No messages yet'}
                    </p>
                )}
            </div>
        </div>
    );
};

export default UserListItem;

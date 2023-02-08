import React, { useEffect } from 'react';
import { useRef } from 'react';
import { BsCheck } from 'react-icons/bs';

type Props = {
    type: 'send' | 'receive';
    children: React.ReactNode;
    time: string;
};

const ChatItem = ({ type, time, children }: Props) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [time]);
    return (
        <div
            ref={ref}
            className={`relative flex ${
                type === 'receive' ? 'justify-start' : 'justify-end'
            }`}
        >
            <div
                className={`px-5 ${
                    type === 'receive' ? 'bg-chat-receive' : 'bg-chat-send'
                } text-white py-2 text-sm max-w-[60%] rounded ${
                    type === 'receive' ? 'rounded-tl-none' : 'rounded-tr-none'
                } font-normal relative`}
            >
                <p>{children}</p>
                <div className="flex items-center justify-end">
                    <BsCheck size={20} />
                    <span className="text-xs text-white">{time}</span>
                </div>
            </div>
        </div>
    );
};

export default ChatItem;

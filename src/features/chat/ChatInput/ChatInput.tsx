import React from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineSend } from 'react-icons/ai';

type Props = {
    onSend: (message: string) => void;
};

type FormType = {
    text: string;
};

const ChatInput = ({ onSend }: Props) => {
    const { register, handleSubmit, reset } = useForm<FormType>();

    const onSubmit = (data: { text: string }) => {
        onSend(data.text);
        reset();
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white fixed bottom-0 w-4/6"
        >
            <div className="flex items-center relative px-4">
                <input
                    className="w-full bg-white pt-3 h-12 focus:outline-none font-light"
                    placeholder="Write a message"
                    {...register('text')}
                ></input>
                <button type="submit">
                    <AiOutlineSend />
                </button>
            </div>
        </form>
    );
};

export default ChatInput;

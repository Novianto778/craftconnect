import React from 'react';
import ChatArea from './ChatArea/ChatArea';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';

type Props = {};

const Chat = (props: Props) => {
    return (
        <>
            <div className="messanger h-screen max-h-main overflow-hidden bg-white">
                <div className="flex h-full overflow-hidden">
                    <div className="w-2/6 basis-2/6 border-r-2 border-slate-200 bg-white">
                        <Sidebar />
                    </div>
                    <div className="relative basis-4/6">
                        <div className="relative h-full overflow-auto bg-slate-100">
                            <Navbar />
                            <ChatArea />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Chat;

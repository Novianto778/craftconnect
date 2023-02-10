import React from 'react';
import ChatArea from './ChatArea/ChatArea';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';

type Props = {};

const Chat = (props: Props) => {
    return (
        <>
            <div className="messanger bg-white max-h-main h-full overflow-hidden">
                <div className="flex h-full overflow-hidden">
                    <div className="basis-2/6 bg-white border-slate-200 border-r-2 w-2/6">
                        <Sidebar />
                    </div>
                    <div className="basis-4/6 relative">
                        <div className="overflow-auto bg-slate-100 h-full relative">
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

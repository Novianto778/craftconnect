export type User = {
    avatar: string;
    email: string;
    role: string;
    uid: string;
    username: string;
};

export type UserChat = [
    string,
    {
        lastMessage: {
            message: string;
            timestamp: string;
        };
        userInfo: User;
        date: {
            seconds: number;
            nanoseconds: number;
        };
    }
];

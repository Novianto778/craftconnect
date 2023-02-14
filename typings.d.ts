import { Timestamp } from 'firebase/firestore';

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

export type Product = {
    id: string;
    name: string;
    price: number;
    category: string;
    images: string[];
    description: string;
    createdAt: Timestamp;
    highlightImage: string;
    highlight: string[];
    userInfo: {
        avatar: string;
        email: string;
        role: string;
        uid: string;
        username: string;
    };
};

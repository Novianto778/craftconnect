import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Timestamp } from 'firebase/firestore';
import Katalog from './Katalog';

export default {
    title: 'Pages/Katalog',
    component: Katalog,
} as ComponentMeta<typeof Katalog>;

const Template: ComponentStory<typeof Katalog> = (args) => (
    <Katalog {...args} />
);
export const Default = () => {
    const products = [
        {
            id: 'f39159c8-f0ce-4584-bec0-c97013249716',
            description:
                'Puzzle Stacker Gunung adalah pilihan yang sempurna bagi mereka yang ingin mengasah kemampuan berfikir, keterampilan motorik halus, dan kreativitas. Ini juga dapat membantu membangun rasa percaya diri dan membuat anak-anak merasa bangga saat mereka berhasil membuat puzzle. Mainan ini dapat ditemukan dalam beberapa ukuran dan warna yang berbeda, membuatnya pilihan yang sempurna untuk anak-anak dan orang dewasa dari berbagai usia.',
            images: [
                'https://firebasestorage.googleapis.com/v0/b/chat-app-c7b2e.appspot.com/o/products%2FPuzzle%20Stacker%20Gunung%2Fpexels-antoni-shkraba-6219076.jpg?alt=media&token=b7a5b68b-0533-4cb0-9185-2be37dc5918a',
                'https://firebasestorage.googleapis.com/v0/b/chat-app-c7b2e.appspot.com/o/products%2FPuzzle%20Stacker%20Gunung%2Fpexels-antoni-shkraba-6219073.jpg?alt=media&token=b4dac385-5ca6-4f57-b399-ed64ffb92d43',
                'https://firebasestorage.googleapis.com/v0/b/chat-app-c7b2e.appspot.com/o/products%2FPuzzle%20Stacker%20Gunung%2FWooden%20Mountain%20Stacker.jpg?alt=media&token=ccf83b30-575d-45a8-9652-692152e09a80',
            ],
            category: 'Kayu',
            highlight: [
                'Puzzle Stacker Gunung menawarkan desain unik dan menyenangkan bagi semua usia.',
                'Mainan ini membantu meningkatkan kemampuan berfikir dan keterampilan motorik.',
                'Produk ini dibuat dari bahan berkualitas tinggi dan aman untuk anak-anak.',
            ],
            userInfo: {
                role: 'customer',
                email: 'novianto778@gmail.com',
                username: 'novianto',
                avatar: 'https://firebasestorage.googleapis.com/v0/b/chat-app-c7b2e.appspot.com/o/avatars%2Fnovianto%2F5z0n5utulifIwWLcYuXKhxkn6wo2?alt=media&token=9ac79793-d356-4511-a8ba-77ef1bc6f328',
                uid: '5z0n5utulifIwWLcYuXKhxkn6wo2',
            },
            createdAt: {
                seconds: 1676297360,
                nanoseconds: 382000000,
            } as Timestamp,
            highlightImage:
                'https://firebasestorage.googleapis.com/v0/b/chat-app-c7b2e.appspot.com/o/products%2FPuzzle%20Stacker%20Gunung%2FMy%20project.png?alt=media&token=32910b0f-d15e-40dc-8241-9d1343a86d5f',
            price: 50000,
            name: 'Puzzle Stacker Gunung',
        },
    ];

    return <Template products={products} />;
};

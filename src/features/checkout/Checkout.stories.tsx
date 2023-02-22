import { useCheckoutStore } from '@/store/checkoutStore';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useEffect } from 'react';
import Checkout from './Checkout';

export default {
    title: 'Pages/Checkout',
    component: Checkout,
} as ComponentMeta<typeof Checkout>;

const Template: ComponentStory<typeof Checkout> = (args) => (
    <Checkout {...args} />
);

export const Default = () => {
    const setCheckoutProduct = useCheckoutStore(
        (state) => state.setCheckoutProduct
    );

    useEffect(() => {
        setCheckoutProduct([
            {
                product: {
                    id: '1',
                    name: 'Baju',
                    price: 10000,
                    images: ['https://picsum.photos/200'],
                } as any,
                qty: 1,
            },
        ]);
    }, []);

    return <Template />;
};

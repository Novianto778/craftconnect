import { ComponentMeta } from '@storybook/react';
import AnimatedArrow from './AnimatedArrow';

export default {
    title: 'shared/Animated Arrow',
    component: AnimatedArrow,
    decorators: [
        (Story) => (
            <div
                style={{
                    width: '100%',
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof AnimatedArrow>;

export const Default = () => <AnimatedArrow />;

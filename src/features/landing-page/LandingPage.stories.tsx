import { ComponentMeta } from '@storybook/react';
import LandingPage from './LandingPage';

export default {
    title: 'pages/Landing Page',
    component: LandingPage,
} as ComponentMeta<typeof LandingPage>;

export const Default = () => <LandingPage />;

import '../src/styles/globals.css';
import '@/features/landing-page/Gallery/gallery.css';
import '@/features/landing-page/Hero/hero.css';
import '@/features/landing-page/landingpage.css';
import '@/features/ProductStory/Popular/Popular.css';
// import '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css';
import { withConsole } from '@storybook/addon-console';
import { addDecorator } from '@storybook/react';
import * as NextImage from 'next/image';
import { WithNextRouter } from 'storybook-addon-next-router/dist/decorators';
import { RouterContext } from 'next/dist/shared/lib/router-context';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
    configurable: true,
    value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    previewTabs: {
        'storybook/docs/panel': { index: -1 },
    },
    docs: {
        source: {
            excludeDecorators: true,
        },
    },
    nextRouter: {
        Provider: RouterContext.Provider,
    },

    options: {
        storySort: (a, b) =>
            a[1].kind === b[1].kind
                ? 0
                : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
    },
};

export const decorators = [
    (Story) => (
        <div className="p-4">
            <Story />
        </div>
    ),
    WithNextRouter,
];

addDecorator((storyFn, context) => withConsole()(storyFn)(context));

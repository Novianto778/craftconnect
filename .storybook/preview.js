import '../src/styles/globals.css';
// import '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css';
import * as NextImage from 'next/image';
import { withConsole } from '@storybook/addon-console';
import { addDecorator } from '@storybook/react';

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

    options: {
        storySort: (a, b) =>
            a[1].kind === b[1].kind
                ? 0
                : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
    },
};

addDecorator((storyFn, context) => withConsole()(storyFn)(context));

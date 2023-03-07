/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                volkhov: 'var(--font-volkhov)',
                poppins: 'var(--font-poppins)',
            },
            backgroundColor: {
                primary: '#a7bcff',
                chat: {
                    send: '#F86320',
                    receive: '#3365FF',
                },
                primary: {
                    cream: '#EEEAE5',
                    brown: '#A8866C',
                    'light-brown': '#A8866C',
                },
                black: '#121212',
            },
            colors: {
                primary: {
                    cream: '#EEEAE5',
                    brown: '#A8866C',
                },
            },
            zIndex: {
                100: 100,
                200: 200,
                300: 300,
                400: 400,
                500: 500,
                9999: 9999,
            },
            minHeight: {
                main: 'calc(100vh - 60px)',
                chat: 'calc(100vh - 160px)',
            },
            maxHeight: {
                main: 'calc(100vh - 60px)',
                chat: 'calc(100vh - 160px)',
                card: 'calc(100% - 8rem)',
                inherit: 'inherit',
            },
            width: {
                inherit: 'inherit',
                filter: 'calc(25% - 4rem)',
            },
            height: {
                inherit: 'inherit',
            },
            container: {
                center: true,
                padding: '2rem',
            },
        },
    },
    plugins: [],
};

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
            backgroundColor: {
                primary: '#a7bcff',
                chat: {
                    send: '#F86320',
                    receive: '#3365FF',
                },
            },
            zIndex: {
                100: 100,
                200: 200,
                300: 300,
            },
            minHeight: {
                main: 'calc(100vh - 60px)',
            },
            maxHeight: {
                main: 'calc(100vh - 60px)',
                card: 'calc(100% - 8rem)',
            },
            width: {
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

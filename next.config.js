/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            'localhost',
            'cdn-icons-png.flaticon.com',
            'firebasestorage.googleapis.com',
            'images.unsplash.com',
        ],
    },
    fontLoaders: [
        { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
};

module.exports = nextConfig;

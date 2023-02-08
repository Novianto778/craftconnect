import { withProtected } from '@/layout/route';
import Head from 'next/head';

function Home() {
    return (
        <>
            <Head>
                <title>CraftConnect</title>
                <meta name="description" content="Craft Connect" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <h1>Home</h1>
            </main>
        </>
    );
}

export default withProtected(Home)
import LandingPage from '@/features/landing-page/LandingPage';
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
            </Head>
            <main>
                <LandingPage />
            </main>
        </>
    );
}

export default withProtected(Home);

import Checkout from '@/features/checkout/Checkout';
import { withProtected } from '@/layout/route';
import Head from 'next/head';

type Props = {};

const CheckoutPage = (props: Props) => {
    return (
        <>
            <Head>
                <title>Checkout</title>
            </Head>
            <Checkout />
        </>
    );
};

export default withProtected(CheckoutPage);

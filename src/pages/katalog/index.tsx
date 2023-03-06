import Katalog from '@/features/katalog/Katalog';
import { firestore } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { Product } from 'typings';

type Props = {
    products: Product[];
};

const KatalogPage = ({ products }: Props) => {
    return (
        <>
            <Head>
                <title>Katalog</title>
            </Head>
            <Katalog products={products} />
        </>
    );
};

export default KatalogPage;

export const getServerSideProps: GetStaticProps = async () => {
    const productsRef = await getDocs(collection(firestore, 'products'));

    const products = productsRef.docs.map(
        (doc) =>
            ({
                id: doc.id,
                ...doc.data(),
            } as Product)
    );

    return {
        props: {
            products,
        },
    };
};

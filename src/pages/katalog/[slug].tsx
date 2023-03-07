import KatalogDetail from '@/features/katalog/KatalogDetail/KatalogDetail';
import { firestore } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { Product } from 'typings';

type Props = {
    product: Product;
};

const KatalogDetailPage = ({ product }: Props) => {
    return (
        <>
            <Head>
                <title>{product.name}</title>
            </Head>``
            <KatalogDetail product={product} />
        </>
    );
};

export default KatalogDetailPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const slug = context.params?.slug;

    const productRef = await getDoc(doc(firestore, 'products', slug as string));

    if (!productRef.exists()) {
        return {
            notFound: true,
        };
    }

    const product: Product = productRef.data() as Product;

    return {
        props: {
            product,
        },
    };
};

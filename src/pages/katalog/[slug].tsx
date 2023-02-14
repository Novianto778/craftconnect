import KatalogDetail from '@/features/katalog/KatalogDetail/KatalogDetail';
import { withProtected } from '@/layout/route';
import { firestore } from '@/lib/firebase';
import { doc, getDoc, getDocs, collection } from 'firebase/firestore';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const KatalogDetailPage = ({ product }: Props) => {
    return (
        <div>
            <KatalogDetail product={product} />
        </div>
    );
};

export default withProtected(KatalogDetailPage);

// getStaticProps with params

export const getStaticProps: GetStaticProps = async (context) => {
    const slug = context.params?.slug;

    const productRef = await getDoc(doc(firestore, 'products', slug as string));

    if (!productRef.exists()) {
        return {
            notFound: true,
        };
    }

    const product = {
        id: productRef.id,
        ...productRef.data(),
    };

    return {
        props: {
            product: JSON.parse(JSON.stringify(product)),
        },
        revalidate: 60,
    };
};

export const getStaticPaths = async () => {
    const productRef = await getDocs(collection(firestore, 'products'));

    const products = productRef.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));

    const paths = products.map((product) => ({
        params: { slug: product.id },
    }));

    return {
        paths,
        fallback: false,
    };
};

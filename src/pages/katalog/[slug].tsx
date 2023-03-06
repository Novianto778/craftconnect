import KatalogDetail from '@/features/katalog/KatalogDetail/KatalogDetail';
import { firestore } from '@/lib/firebase';
import Spinner from '@/shared/components/Spinner/Spinner';
import { doc, getDoc } from 'firebase/firestore';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Product } from 'typings';

// ssr props
type Props = {
    product: InferGetServerSidePropsType<typeof getServerSideProps>;
};

const KatalogDetailPage = (product: Props) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [singleProduct, setSingleProduct] = useState<Product | null>(null);
    const router = useRouter();

    console.log(router.query.slug);

    useEffect(() => {
        setLoading(true);
        if (!router.query.slug) return;
        const getProduct = async () => {
            const productRef = await getDoc(
                doc(firestore, 'products', router.query.slug as string)
            );
            if (!productRef.exists()) return;
            setLoading(false);
            setSingleProduct(productRef.data() as Product);
        };

        getProduct();
    }, [router.query.slug]);

    if (loading) return <Spinner />;

    if (!singleProduct && !loading) return <div>Product not found</div>;

    return (
        <div>
            <KatalogDetail product={singleProduct!} />
        </div>
    );
};

export default KatalogDetailPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const slug = context.params?.slug;
    console.log(slug);

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
    };
};

// // getStaticProps with params

// export const getStaticProps: GetStaticProps = async (context) => {
//     const slug = context.params?.slug;
//     console.log(slug);

//     const productRef = await getDoc(doc(firestore, 'products', slug as string));

//     if (!productRef.exists()) {
//         return {
//             notFound: true,
//         };
//     }

//     const product = {
//         id: productRef.id,
//         ...productRef.data(),
//     };

//     return {
//         props: {
//             product: JSON.parse(JSON.stringify(product)),
//         },
//         revalidate: 1,
//     };
// };

// export const getStaticPaths = async () => {
//     const productRef = await getDocs(collection(firestore, 'products'));

//     const products = productRef.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//     }));

//     const paths = products.map((product) => ({
//         params: { slug: product.id },
//     }));

//     return {
//         paths,
//         fallback: false,
//     };
// };

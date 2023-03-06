import Katalog from '@/features/katalog/Katalog';
import { firestore } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Product } from 'typings';

const KatalogPage = () => {
    const [products, setProducts] = useState<Product[] | null>([]);
    useEffect(() => {
        const getProducts = async () => {
            const productsRef = await getDocs(
                collection(firestore, 'products')
            );

            const products = productsRef.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            setProducts(products);
        };
        getProducts();
    }, []);

    if (products.length === 0) return <div>Loading...</div>;

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

// export const getStaticProps: GetStaticProps = async () => {
//     const productRef = await getDocs(collection(firestore, 'products'));

//     const products = productRef.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//     }));

//     return {
//         props: {
//             products: JSON.parse(JSON.stringify(products)),
//         },
//         revalidate: 60,
//     };
// };

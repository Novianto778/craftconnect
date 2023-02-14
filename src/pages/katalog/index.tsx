import Katalog from '@/features/katalog/Katalog';
import { withProtected } from '@/layout/route';
import { firestore } from '@/lib/firebase';
import { getDocs, collection } from 'firebase/firestore';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import React from 'react';

const KatalogPage = ({
    products,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <>
            <Katalog products={products} />
        </>
    );
};

export default withProtected(KatalogPage, []);

export const getStaticProps: GetStaticProps = async () => {
    const productRef = await getDocs(collection(firestore, 'products'));

    const products = productRef.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));

    return {
        props: {
            products: JSON.parse(JSON.stringify(products)),
        },
        revalidate: 60,
    };
};

// export const getStaticPaths = async () => {
//     const productRef = await getDocs(collection(firestore, 'products'));

//     const products = productRef.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//     }));

//     const paths = products.map((product) => ({
//         params: { id: product.id },
//     }));

//     return {
//         paths,
//         fallback: false,
//     };
// };

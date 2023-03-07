import ProductStory from '@/features/ProductStory/ProductStory';
import Head from 'next/head';
import React from 'react';

type Props = {};

const ProductStoryPage = (props: Props) => {
    return (
        <>
        <Head>
            <title>Product Story</title>
        </Head>
            <ProductStory />
        </>
    );
};

export default ProductStoryPage;

import { firestore } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { GetStaticProps } from 'next';
import { Product } from 'typings';
import ProductCard from './ProductCard/ProductCard';

type Props = {
    products: Product[];
};

const KatalogContent = ({ products }: Props) => {
    console.log(products);
    return (
        <>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </>
    );
};

export default KatalogContent;

import { useKatalogStore } from '@/store/katalogStore';
import { Product } from 'typings';
import ProductCard from './ProductCard/ProductCard';

type Props = {
    products: Product[];
};

const KatalogContent = ({ products }: Props) => {
    const filter = useKatalogStore((state) => state.filter);
    const priceFilter = useKatalogStore((state) => state.priceFilter);

    const filteredProducts = (
        filter && filter.length > 0
            ? products.filter((product) =>
                  filter.includes(product.category.toLowerCase())
              )
            : products
    )?.filter((product) => {
        return (
            product.price >= priceFilter.min && product.price <= priceFilter.max
        );
    });

    return (
        <>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredProducts?.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </>
    );
};

export default KatalogContent;

import Button from '@/shared/components/Button/Button';
import useMediaQuery from '@/shared/hooks/useMediaQuery';
import cn from 'classnames';
import { useState } from 'react';
import { Product } from 'typings';
import KatalogContent from './KatalogContent/KatalogContent';
import KatalogFilter from './KatalogFilter/KatalogFilter';

type Props = {
    products: Product[];
};

const Katalog = ({ products }: Props) => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const matches = useMediaQuery('(min-width: 640px)');

    let filterClasses = 'lg:block lg:basis-1/4 w-filter z-100 relative';
    if (!matches) {
        filterClasses =
            'absolute right-0 h-full max-h-main bg-white px-4 shadow lg:hidden z-30';
    }

    return (
        <>
            <div className="container mx-auto flex h-full gap-x-8 pt-8 w-full">
                <div
                    className={cn(filterClasses, {
                        hidden: !isFilterOpen,
                        absolute: isFilterOpen,
                    })}
                >
                    <KatalogFilter />
                </div>
                <div className="basis-full lg:basis-3/4">
                    <KatalogContent products={products} />
                </div>
                <div className="fixed bottom-4 right-4 z-50 lg:hidden">
                    <Button
                        size="sm"
                        onClick={() => setIsFilterOpen((prev) => !prev)}
                    >
                        {isFilterOpen ? 'Tutup' : 'Filter'}
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Katalog;

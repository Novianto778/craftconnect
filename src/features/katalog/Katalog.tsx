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

    let filterClasses = 'lg:block lg:basis-1/4 w-filter';
    if (!matches) {
        filterClasses =
            'absolute right-0 h-full max-h-main bg-white px-4 shadow lg:hidden z-30';
    }

    return (
        <>
            <div className="container relative mx-auto flex h-full max-h-main gap-x-4 pt-8">
                <div
                    className={cn(filterClasses, {
                        hidden: !isFilterOpen,
                    })}
                >
                    <KatalogFilter />
                </div>
                <div className="basis-full lg:basis-3/4">
                    <KatalogContent products={products} />
                </div>
                <div className="absolute bottom-4 right-4 z-50 lg:hidden">
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

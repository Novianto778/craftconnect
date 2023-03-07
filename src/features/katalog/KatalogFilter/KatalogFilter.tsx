import RangeSlider from '@/shared/components/RangeSlider/RangeSlider';
import { useKatalogStore } from '@/store/katalogStore';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

type Props = {};

const KatalogFilter = (props: Props) => {
    const { register, watch } = useForm();
    const setFilter = useKatalogStore((state) => state.setFilter);
    const setPriceFilter = useKatalogStore((state) => state.setPriceFilter);

    const filter = watch('tipe');

    useEffect(() => {
        if (filter) {
            setFilter(filter);
        }
    }, [filter]);

    return (
        <div className="sticky top-20 left-0 h-max min-w-[200px] rounded-lg border bg-white p-4">
            <div className="flex flex-col gap-y-6">
                <div className="flex flex-col gap-y-2">
                    <h6 className="font-semibold">Tipe</h6>
                    <div className="flex flex-col gap-y-2">
                        <div className="flex items-center gap-x-2">
                            <input
                                type="checkbox"
                                value="kayu"
                                {...register('tipe')}
                            />
                            <p className="text-sm">Kayu</p>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <input
                                type="checkbox"
                                {...register('tipe')}
                                value="batu"
                            />
                            <p className="text-sm">Batu</p>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <input
                                type="checkbox"
                                {...register('tipe')}
                                value="kain"
                            />
                            <p className="text-sm">Kain</p>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <input
                                type="checkbox"
                                {...register('tipe')}
                                value="keramikkaca"
                            />
                            <p className="text-sm">Keramik & Kaca</p>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <input
                                type="checkbox"
                                {...register('tipe')}
                                value="plastik"
                            />
                            <p className="text-sm">Plastik</p>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <input
                                type="checkbox"
                                {...register('tipe')}
                                value="kertas"
                            />
                            <p className="text-sm">Kertas</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-2">
                    <h6 className="font-semibold">Harga</h6>
                    <RangeSlider
                        min={0}
                        max={1000000}
                        step={10000}
                        onChange={(min, max) => setPriceFilter({ min, max })}
                    />
                </div>
            </div>
        </div>
    );
};

export default KatalogFilter;

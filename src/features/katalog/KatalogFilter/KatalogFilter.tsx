import React from 'react';
import cn from 'classnames';
import RangeSlider from '@/shared/components/RangeSlider/RangeSlider';

type Props = {};

const KatalogFilter = (props: Props) => {
    return (
        <div className="h-full">
            <div className="flex flex-col gap-y-6">
                <div className="flex flex-col gap-y-2">
                    <h6 className="font-semibold">Tipe</h6>
                    <div className="flex flex-col gap-y-2">
                        <div className="flex items-center gap-x-2">
                            <input type="checkbox" />
                            <p className="text-sm">Kayu</p>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <input type="checkbox" />
                            <p className="text-sm">Batu</p>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <input type="checkbox" />
                            <p className="text-sm">Kertas</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-2">
                    <h6 className="font-semibold">Harga</h6>
                    <RangeSlider min={0} max={1000000} step={10000} />
                </div>
            </div>
        </div>
    );
};

export default KatalogFilter;

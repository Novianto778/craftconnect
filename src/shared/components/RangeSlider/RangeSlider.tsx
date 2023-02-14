import useDebounce from '@/utils/useDebounce';
import { useState, useEffect, useRef } from 'react';
import Input from '../Input/Input';

type Props = {
    initialMin?: number;
    initialMax?: number;
    min: number;
    max: number;
    step: number;
    onChange?: (minValue: number, maxValue: number) => void;
};

const RangeSlider = ({
    initialMin,
    initialMax,
    min,
    max,
    step,
    onChange,
}: Props) => {
    const progressRef = useRef<HTMLDivElement>(null);
    const [minValue, setMinValue] = useState(initialMin || min);
    const [maxValue, setMaxValue] = useState(initialMax || max);

    const debounceMax = useDebounce(maxValue, 500);
    const debounceMin = useDebounce(minValue, 500);

    const handleMin = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (maxValue - minValue >= 0 && maxValue <= max) {
            if (parseInt(e.target.value) > maxValue) {
            } else {
                setMinValue(parseInt(e.target.value));
            }
        } else {
            if (parseInt(e.target.value) < minValue) {
                setMinValue(parseInt(e.target.value));
            }
        }
    };

    const handleMax = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (maxValue - minValue >= 0 && maxValue <= max) {
            if (parseInt(e.target.value) < minValue) {
            } else {
                setMaxValue(parseInt(e.target.value));
            }
        } else {
            if (parseInt(e.target.value) > maxValue) {
                setMaxValue(parseInt(e.target.value));
            }
        }
    };

    const handleMaxInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (parseInt(e.target.value) > max) {
            setMaxValue(max);
        } else {
            setMaxValue(parseInt(e.target.value));
        }
    };

    useEffect(() => {
        if (progressRef.current) {
            progressRef.current.style.left = (minValue / max) * step + '%';
            progressRef.current.style.right =
                step - (maxValue / max) * step + '%';
        }
    }, [minValue, maxValue, max, step]);

    useEffect(() => {
        if (onChange) {
            onChange(minValue, maxValue);
        }
    }, [debounceMax, debounceMin]);

    return (
        <>
            <div className="flex items-center justify-between rounded-md">
                <div className="flex items-center">
                    <span className="p-2 text-sm font-semibold">Min</span>
                    <Input
                        onChange={(e) => setMinValue(parseInt(e.target.value))}
                        type="number"
                        value={minValue}
                        variant="underline"
                        sizes="sm"
                        className="px-0 py-0"
                        wrapperClassName="w-20"
                    />
                </div>
                <div className="flex items-center pr-2">
                    <div className="flex items-center rounded-md">
                        <span className="p-2 text-sm font-semibold">Max</span>
                        <Input
                            onChange={handleMaxInput}
                            type="number"
                            value={maxValue}
                            variant="underline"
                            sizes="sm"
                            className="px-0 py-0"
                            wrapperClassName="w-20"
                        />
                    </div>
                </div>
            </div>

            <div className="my-2">
                <div className="slider relative h-1 rounded-md bg-gray-300">
                    <div
                        className="progress absolute h-1 rounded bg-green-300 "
                        ref={progressRef}
                    ></div>
                </div>

                <div className="range-input relative  ">
                    <input
                        onChange={handleMin}
                        type="range"
                        min={min}
                        step={step}
                        max={max}
                        value={minValue}
                        className="range-min pointer-events-none absolute -top-1 h-1 w-full appearance-none bg-transparent"
                    />

                    <input
                        onChange={handleMax}
                        type="range"
                        min={min}
                        step={step}
                        max={max}
                        value={maxValue}
                        className="range-max pointer-events-none absolute  -top-1 h-1  w-full appearance-none  bg-transparent"
                    />
                </div>
            </div>
        </>
    );
};

export default RangeSlider;

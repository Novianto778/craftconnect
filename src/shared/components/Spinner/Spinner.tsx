import cn from 'classnames';
import React from 'react';

type Props = {
    fullPage?: boolean;
    size?: 'sm' | 'base' | 'lg';
    color?: string;
};

const Spinner = ({
    fullPage = false,
    size = 'base',
    color = 'white',
}: Props) => {
    let basicStyle = 'animate-spin rounded-full border-b-2';

    if (size === 'sm') basicStyle += ' h-3 w-3';
    if (size === 'base') basicStyle += ' h-4 w-4';
    if (size === 'lg') basicStyle += ' h-5 w-5';

    if (fullPage) {
        return (
            <div className="fixed top-0 left-0 w-full h-full bg-gray-600 bg-opacity-50 flex items-center justify-center">
                <div className={cn(basicStyle, `border-${color}`)}></div>
            </div>
        );
    }

    return <div className={cn(basicStyle, `border-${color}`)}></div>;
};

export default Spinner;

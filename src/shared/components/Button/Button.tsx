import cn from 'classnames';
import React from 'react';
import Spinner from '../Spinner/Spinner';

type Props = {
    variant?: 'primary' | 'secondary' | 'custom';
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    children: React.ReactNode;
    className?: string;
    size?: 'sm' | 'base' | 'lg';
    fullWidth?: boolean;
    isLoading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
    variant = 'primary',
    children,
    iconLeft,
    iconRight,
    className,
    size = 'base',
    fullWidth = false,
    isLoading = false,
    ...rest
}: Props) => {
    let basicStyle =
        'flex items-center justify-center gap-x-2 duration-300 disabled:opacity-50 disabled:cursor-not-allowed';
    if (variant === 'primary') {
        basicStyle +=
            ' bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded';
    }
    if (variant === 'secondary') {
        basicStyle +=
            ' bg-gray-500 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded';
    }

    if (variant === 'custom') {
        basicStyle += ' font-medium py-2 px-4 rounded';
    }

    if (fullWidth) basicStyle += ' w-full';

    if (size === 'sm') {
        basicStyle += ' text-sm px-2.5 py-1.5';
    }

    if (size === 'lg') {
        basicStyle += ' text-lg px-4 py-2';
    }

    return (
        <button
            className={cn(basicStyle, className)}
            disabled={isLoading}
            {...rest}
        >
            {isLoading ? (
                <>
                    <Spinner size={size} />
                    <span>Loading...</span>
                </>
            ) : (
                <>
                    {iconLeft}
                    {children}
                    {iconRight}
                </>
            )}
        </button>
    );
};

export default Button;

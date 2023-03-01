import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { twMerge } from 'tailwind-merge';

type Props = {
    className?: string;
    type?: string;
    sizes?: 'sm' | 'base' | 'lg';
    wrapperClassName?: string;
    error?: string;
} & React.InputHTMLAttributes<HTMLInputElement> &
    ConditionalProps;

type ConditionalProps =
    | {
          variant?: 'floating';
          label: string;
      }
    | {
          variant?: 'primary' | 'underline';
          label?: string;
      };

const Input = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
    const {
        variant = 'primary',
        className,
        type = 'text',
        label,
        sizes,
        wrapperClassName,
        error,
        ...rest
    } = props;
    const [inputType, setInputType] = useState(type);
    let basicClass = `form-control block w-full px-4 py-2 font-normal text-${sizes} text-gray-700 bg-white border-gray-300 rounded-md duration-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed`;

    if (variant === 'primary') {
        basicClass += ' border border-solid';
    }

    if (variant === 'underline') {
        basicClass += ' border-b rounded-none';
    }

    return (
        <div className={twMerge('relative', wrapperClassName)}>
            {variant === 'floating' ? (
                <div className="relative">
                    <input
                        className={twMerge(
                            'peer cursor-pointer border',
                            basicClass,
                            className
                        )}
                        placeholder=" "
                        type={inputType}
                        ref={ref}
                        {...rest}
                    />
                    <label className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600">
                        {label}
                    </label>
                </div>
            ) : (
                <input
                    type={inputType}
                    className={twMerge(basicClass, className)}
                    ref={ref}
                    {...rest}
                />
            )}
            {type === 'password' && (
                <div
                    className="absolute right-3 top-3 cursor-pointer select-none"
                    onClick={() =>
                        setInputType((prev) =>
                            prev === 'password' ? 'text' : 'password'
                        )
                    }
                >
                    {inputType === 'password' ? (
                        <AiOutlineEye size={20} />
                    ) : (
                        <AiOutlineEyeInvisible size={20} />
                    )}
                </div>
            )}
            {error && <div className="mt-1 text-sm text-red-500">{error}</div>}
        </div>
    );
});

Input.displayName = 'Input';

export default Input;

import classNames from 'classnames';
import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useForm } from 'react-hook-form';

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
        <div className={classNames('relative', wrapperClassName)}>
            {variant === 'floating' ? (
                <div className="relative">
                    <input
                        className={classNames(
                            'peer border cursor-pointer',
                            basicClass,
                            className
                        )}
                        placeholder=" "
                        type={inputType}
                        ref={ref}
                        {...rest}
                    />
                    <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                        {label}
                    </label>
                </div>
            ) : (
                <input
                    type={inputType}
                    className={classNames(basicClass, className)}
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
            {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
        </div>
    );
});

Input.displayName = 'Input';

export default Input;

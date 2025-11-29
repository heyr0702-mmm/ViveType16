import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
}) => {
    const baseStyles = "font-bold transition-transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed font-handwriting";

    const variants = {
        primary: "bg-ink text-paper border-2 border-ink shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] active:translate-y-[0px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]",
        secondary: "bg-transparent text-ink border-2 border-ink shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:bg-gray-100",
        ghost: "bg-transparent text-ink hover:underline",
    };

    const sizes = {
        sm: "px-3 py-1 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-xl",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

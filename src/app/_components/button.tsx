import React from 'react';

interface ButtonProps {
    href?: string;
    variant?: 'primary' | 'secondary';
    text: string;
    target?: '_blank' | '_self';
}

const Button: React.FC<ButtonProps> = ({
    href = '#',
    variant = 'primary',
    text,
    target = '_self'
}) => {
    const baseStyles = "px-6 py-3 rounded-full font-semibold transition-all duration-300";

    const variantStyles = {
        primary: "bg-gradient-to-r from-red-600 to-red-500 text-white hover:from-red-500 hover:to-red-400 shadow-lg shadow-red-500/30",
        secondary: "bg-transparent text-white border border-red-600/40 hover:border-red-400 hover:bg-red-500/10"
    };

    return (
        <a
            href={href}
            target={target}
            rel={target === '_blank' ? 'noopener noreferrer' : undefined}
            className={`${baseStyles} ${variantStyles[variant]}`}
        >
            {text}
        </a>

    );
};

export default Button;

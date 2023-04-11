import Link from 'next/link';
import React from 'react';

interface IButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    isDisabled?: boolean;
}

export default function Button({ onClick, children, isDisabled }: IButtonProps) {
    return (
        <button
            className={`text-black border-2 rounded-xl px-20 mr-4 py-2 text-xl font-medium ${isDisabled ? 'text-gray-600 bg-gray-300' : 'bg-stone-50'}`}
            aria-current="page"
            onClick={onClick}
            disabled={isDisabled}
        >
            {children}
        </button>
    );
}

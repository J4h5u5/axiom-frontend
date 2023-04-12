import Link from 'next/link';
import React from 'react';
import styles from './Button.module.css';
import { ICommonComp } from '../componentsInterface';

interface IButtonProps extends ICommonComp {
    children: React.ReactNode;
    onClick?: () => void;
    isDisabled?: boolean;
}

export default function Button({ onClick, children, isDisabled, className }: IButtonProps) {
    return (
        <button
            className={`${styles.button} text-black border-2 rounded-xl px-2 py-2 text-xl font-medium ${className} ${
                isDisabled ? 'text-gray-600 bg-gray-300' : 'bg-stone-50'
            }`}
            aria-current="page"
            onClick={onClick}
            disabled={isDisabled}
        >
            {children}
        </button>
    );
}

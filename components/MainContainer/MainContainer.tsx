import Link from 'next/link';
import React from 'react';
import Button from '../Button/Button';
import { useUser } from '../../hooks/useUser';
import { useRouter } from 'next/router';
import SpaceLink from '../SpaceLink/SpaceLink';
import BackButton from '../BackButton/BackButton';

type Props = {
    className?: string;
    children: React.ReactNode;
    backRoute?: string;
    isShowLogo?: boolean;
};

export default function MainContainer({ className, children, backRoute, isShowLogo = false }: Props) {
    const [isAuth, setIsAuth] = React.useState(false);

    const user = useUser();
    const router = useRouter();

    React.useEffect(() => {
        setIsAuth(!!user.authToken);
    }, [user.authToken]);

    return (
        <div className={`view bg-bombay${className ? ` ${className}` : ''}`}>
            <div className='container'>
                {isShowLogo && <header className="header">
                    <div className="header__logo"></div>
                </header>}
                <div>
                {backRoute && <div className='my-4'><BackButton href={backRoute}/></div>}

                </div>
                {children}
            </div>
        </div>
    );
}

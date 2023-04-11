import Link from 'next/link';
import React from 'react';
import Button from '../Button/Button';
import { useUser } from '../../hooks/useUser';
import { useRouter } from 'next/router';
import SpaceLink from '../SpaceLink/SpaceLink';

type Props = {
    children: React.ReactNode;
};

export default function MainContainer({ children }: Props) {
    const user = useUser();
    const router = useRouter();

    return (
        <div className="container">
            <header className="header">
                <div className="header__logo"></div>
            </header>
            {user.authToken &&
                <div className='flex mb-20'>
                    <SpaceLink href={router.pathname === '/profile' ? '#' : '/profile'}>
                        <Button isDisabled={router.pathname === '/profile'}>
                            Капсула
                        </Button>
                    </SpaceLink>

                    <SpaceLink href={router.pathname === '/lounge' ? '#' : '/lounge'}>
                        <Button isDisabled={router.pathname === '/lounge'}>
                            Зал ожидания
                        </Button>
                    </SpaceLink>
                </div>
            }

        {children}
        </div>
    );
}

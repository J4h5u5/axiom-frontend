import * as React from 'react';
import { API_URL } from '../../apiUrls';
import MainContainer from '../../components/MainContainer/MainContainer';
import { useUser } from '../../hooks/useUser';
import { useRouter } from 'next/router';
import Button from '../../components/Button/Button';
import SpaceLink from '../../components/SpaceLink/SpaceLink';
import styles from './Lounge.module.css';

export default function LoungePage() {
    const router = useRouter();
    const user = useUser();

    React.useEffect(() => {
        if (!user.authToken) {
            router.push('/');
        }
    }, [user]);

    return user.authToken ? (
        <MainContainer className='auth'>
            <section className="wrapper-second m-auto text-center">
                <h1 className="title">РЕГИСТРАЦИЯ ПРОШЛА УСПЕШНО!</h1>
                <div className='flex flex-col m-auto'>
                    <SpaceLink className='mb-4 mt-8'href={ '/screen'}>
                        <Button className={`${styles.screen_btn}`}>Экран</Button>
                    </SpaceLink>
                    <SpaceLink href={'/profile'}>
                        <Button className={`${styles.screen_btn}`}>Капсула</Button>
                    </SpaceLink>
                </div>
                <div className="mt-8 text-center flex flex-col items-center">
                    <span className={`${styles.screen_btn} ${styles.description} ${styles.description_a} description__text`}>
                        В Области Посадки работает Техника! Дата Вылета уточняется.
                    </span>
                </div>
            </section>
        </MainContainer>
    ) : null;
}

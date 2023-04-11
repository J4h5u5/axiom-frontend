import * as React from 'react';
import { API_URL } from '../../apiUrls';
import MainContainer from '../../components/MainContainer/MainContainer';
import { useUser } from '../../hooks/useUser';
import { useRouter } from 'next/router';

export default function loungePage() {
    const router = useRouter();
    const user = useUser();

    React.useEffect(() => {
        if (!user.authToken) {
            router.push('/');
        }
    }, [user]);

    return user.authToken ? (
        <MainContainer>
            <section className="wrapper-second">
                <h1 className="title">РЕГИСТРАЦИЯ ПРОШЛА УСПЕШНО!</h1>

                <div className="description">
                    <span className="description__text">
                        В Области Посадки работает Техника! Дата Вылета уточняется.
                    </span>
                    <span className="description__text">
                        Твои космомили: {user.miles}
                    </span>
                </div>
            </section>
        </MainContainer>
    ) : null;
}

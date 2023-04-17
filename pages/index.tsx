import React from 'react';
import useSWR, { SWRConfig } from 'swr';
import { useRouter } from 'next/navigation';
import { API_URL } from '../apiUrls';
import { ITgUserData } from '../apiService/interface';
import { login } from '../utils/login';
import Script from 'next/script';
import MainContainer from '../components/MainContainer/MainContainer';
import { GetServerSideProps } from 'next/types';
import { fetcher } from '../utils/fetcher';

export const getServerSideProps: GetServerSideProps = async () => {
    let res;
    try {
        res = await fetcher<{ status: string, data: { usersCount: number } }>(`${API_URL}/usersCount`);
    } catch (error) {
        res = 0;
    }

    return {
        props: {
            fallback: {
                [`${API_URL}/usersCount`]: res,
            },
        },
    };
};

const UsersAmount = () => {
    const url = `${API_URL}/usersCount`;
    const { data } = useSWR<{ status: string; data: { usersCount: number } }>(
        url,
        { refreshInterval: 10_000 }
    );

    return <span>{data?.data?.usersCount || '0'}</span>
}

const Home: React.FC<{ fallback: Record<string, any> }>= ({ fallback }) => {
    const router = useRouter();
    const [pageState, setPageState] = React.useState<'init' | 'success' | 'error'>('init');

    React.useEffect(() => {
        (window as any).TelegramLoginWidget = {
            dataOnauth: async (userData: ITgUserData) => {
                try {
                    await login(userData);
                    setPageState('success');
                    router.push('/lounge');
                } catch (error) {
                    setPageState('error');
                }
            },
        };
    }, []);

    return (
        <SWRConfig value={{ fallback }}>
            <MainContainer isShowLogo>
                <main className="main">
                    <section className="wrapper">
                        <h1 className="title text-text">Найди свое место во вселенной!</h1>
                        <div className="interactive-wrapper">
                            <div className="form">
                                <div className="form__input">
                                    <div className="form__input-content">
                                        <span className="form__input-content-description text-text">
                                            рейс: #TR300_<UsersAmount />
                                        </span>
                                    </div>
                                </div>
                                <div className="form__input">
                                    <div className="form__input-content">
                                        <span className="form__input-content-description text-text">Даты: [Уточняется]</span>
                                    </div>
                                </div>
                                <div className="auth-wrapper" id="authWrapper">
                                    <button className="form__btn bg-goldenDream text-text">ПОЕХАЛИ!</button>
                                    <button className="form__btn_hover text-text">Регистрация в ТГ</button>

                                    <Script
                                        id="tg-widget"
                                        strategy="afterInteractive"
                                        dangerouslySetInnerHTML={{
                                            __html: `
                                    (function (d, s, id) {
                                            var js,
                                                el = d.getElementsByTagName(s)[0];
                                            if (d.getElementById(id)) {
                                                return;
                                            }
                                            js = d.createElement(s);
                                            js.async = true;
                                            js.id = id;

                                            js.src = 'https://telegram.org/js/telegram-widget.js?21'
                                            js.setAttribute('data-telegram-login', '${
        process.env.NEXT_PUBLIC_ENV ||
                                              'AxiomAuthBot'
        }')
                                            js.setAttribute('data-size', 'large')


                                            // if (cornerRadius !== undefined) {
                                            //     js.setAttribute('data-radius', cornerRadius.toString())
                                            // }

                                            js.setAttribute('data-request-access', 'write')

                                            js.setAttribute('data-userpic', 'false')
                                            js.setAttribute('data-onauth', 'TelegramLoginWidget.dataOnauth(user)')

                                            js.charset = "UTF-8";

                                            d.querySelector('#authWrapper').appendChild(js, el);
                                    })(document, "script");
                                    `,
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="countdown hidden">7</div>
                            <div className="cosmos micro">ТЫКОСМОСДЕТКА!</div>
                        </div>

                        <div className="description">
                            <span className="description__text text-text">
                                Вся необходимая информация будет доступна в <span>Зале Ожидания</span> после{' '}
                                <span>регистрации</span> и получения <span>посадочного талона</span>.
                            </span>
                        </div>
                        <div className="wrapper_video">
                            <div className="inner_video">
                                <video
                                    className="video"
                                    controls
                                    poster="video_player_mock.png"
                                >
                                    <source src="tr300_1.mp4" type="video/mp4" />
                                Your browser doesn`&apos;`t support HTML5 video tag.
                                </video>
                            </div>
                        </div>
                    </section>
                </main>
            </MainContainer>
        </SWRConfig>
    );
}

export default Home;

import React from 'react';
import { useRouter } from 'next/navigation';
import { TLoginButton, TLoginButtonSize } from 'react-telegram-auth';
import { API_URL } from '../apiUrls';
import { ITgUserData } from '../apiService/interface';
import { login } from '../utils/login';
import Script from 'next/script';


export const getStaticProps = async () => {
    const res = await fetch(`${API_URL}/usersCount`);
    const usersCount = await res.json();

    return {
        props: usersCount.data
    }
}

const Home: React.FC<{ usersCount: number }> = ({ usersCount }) => {
    const router = useRouter();
    const [pageState, setPageState] = React.useState<'init' | 'success' | 'error'>('init');



    const onAuth = React.useCallback(async (userData: ITgUserData) => {
        try {
            await login(userData);
            setPageState('success');
            router.push('/launge');
        } catch (error) {
            setPageState('error');
        }
    }, []);

    React.useEffect(() => {
        window.TelegramLoginWidget = {
            dataOnauth: async (userData: ITgUserData) => {
                try {
                    await login(userData);
                    setPageState('success');
                    router.push('/launge');
                } catch (error) {
                    setPageState('error');
                }
            }
          }
    }, [])

    return (
        <div className="container">
            <header className="header">
                <div className="header__logo"></div>
            </header>

            <main className="main">
                <section className="wrapper">
                    <h1 className="title">НАЙДИ СВОЁ МЕСТО ВО ВСЕЛЕННОЙ</h1>
                    <div className="interactive-wrapper">
                        <div className="form">
                            <div className="form__input">
                                <div className="form__input-content">
                                    <span className="form__input-content-description">
                                        РЕЙС: # TR 300_{usersCount}
                                    </span>
                                </div>
                            </div>
                            <div className="form__input">
                                <div className="form__input-content">
                                    <span className="form__input-content-description">ДАТА: [Уточняется]</span>
                                </div>
                            </div>
                            <div className="auth-wrapper" id="authWrapper">
                                <button className="form__btn">ПОЕХАЛИ!</button>
                                <button className="forn__btn_hover">Регистрация в ТГ</button>

                            <Script
                                strategy="afterInteractive"
                                dangerouslySetInnerHTML={{
                                __html: `
                                (function (d, s, id) {
                                    console.log(s)
                                        var js,
                                            el = d.getElementsByTagName(s)[0];
                                        if (d.getElementById(id)) {
                                            return;
                                        }
                                        js = d.createElement(s);
                                        js.async = true;
                                        js.id = id;

                                        js.src = 'https://telegram.org/js/telegram-widget.js?21'
                                        js.setAttribute('data-telegram-login', 'AxiomAuthDevBot')


                                        // if (cornerRadius !== undefined) {
                                        //     js.setAttribute('data-radius', cornerRadius.toString())
                                        // }

                                        js.setAttribute('data-request-access', 'write')

                                        js.setAttribute('data-userpic', 'false')
                                        js.setAttribute('data-onauth', 'TelegramLoginWidget.dataOnauth(user)')

                                        js.charset = "UTF-8";
                                        console.log(d.querySelector('#authWrapper'))
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
                        <span className="description__text">
                            Вся необходимая информация будет доступна в <span>Зале Ожидания</span> после{' '}
                            <span>регистрации</span> и получения <span>посадочного талона</span>.
                        </span>
                    </div>
                    <video
                        className="video"
                        controls
                        poster="video_player_mock.png"
                    >
                        <source
                            src="tr300_1.mp4"
                            type="video/mp4"
                        />
                        Your browser doesn't support HTML5 video tag.
                    </video>
                </section>
            </main>
        </div>
    );
}

export default Home;


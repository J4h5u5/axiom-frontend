import { Inter } from 'next/font/google';
import Script from 'next/script'
import { TLoginButton, TLoginButtonSize } from 'react-telegram-auth';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
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
                                        РЕЙС: # TR 300_<span id="users-count"></span>
                                    </span>
                                </div>
                            </div>
                            <div className="form__input">
                                <div className="form__input-content">
                                    <span className="form__input-content-description">ДАТА: [Уточняется]</span>
                                </div>
                            </div>
                            <div className="auth-wrapper">
                                <button className="form__btn">ПОЕХАЛИ!</button>
                                <button className="forn__btn_hover">Регистрация в ТГ</button>
                                <TLoginButton
                                    botName="AxiomAuthDevBot"
                                    buttonSize={TLoginButtonSize.Large}
                                    lang="en"
                                    usePic={false}
                                    cornerRadius={20}
                                    onAuthCallback={(user) => {
                                    console.log('Hello, user!', user);
                                    }}
                                    requestAccess={'write'}
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

                <section className="wrapper-second wrapper-second-hidden removed">
                    <h1 className="title">РЕГИСТРАЦИЯ ПРОШЛА УСПЕШНО!</h1>
                    <div className="description">
                        <span className="description__text">
                            В Области Посадки работает Техника! Дата Вылета уточняется.
                        </span>
                        <span className="description__text">
                            Твои космомили: <span id="miles"></span>
                        </span>
                    </div>
                </section>
            </main>
        </div>
    );
}

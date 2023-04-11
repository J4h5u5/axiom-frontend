import React from 'react';
import { useRouter } from 'next/navigation';
import { TLoginButton, TLoginButtonSize } from 'react-telegram-auth';
import { API_URL } from '../apiUrls';
import { ITgUserData } from '../apiService/interface';
import { login } from '../utils/login';


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
                            <div className="auth-wrapper">
                                <button className="form__btn">ПОЕХАЛИ!</button>
                                <button className="forn__btn_hover">Регистрация в ТГ</button>
                                <TLoginButton
                                    botName="AxiomAuthBot"
                                    buttonSize={TLoginButtonSize.Large}
                                    lang="en"
                                    usePic={false}
                                    cornerRadius={20}
                                    onAuthCallback={(user) => {
                                        onAuth(user);
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
            </main>
        </div>
    );
}

export default Home;


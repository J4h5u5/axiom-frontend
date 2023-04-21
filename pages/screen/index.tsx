import React, { memo, useEffect, useRef, useState } from "react";
import MainContainer from "../../components/MainContainer/MainContainer";
import withAuth from "../../hocs/WithAuth";
import { DepartureBoard } from "../../components/departureBoard";
import Modal from "react-modal";
import styles from "./screen.module.css";

type Props = {};

const Screen = memo((props: Props) => {
    const ref = useRef<HTMLDivElement | null>();
    const isRenderedTable = useRef<boolean>(false);
    const [isOpenModal, setIsOpenModal] = useState(false);

    const handleModal = () => {
        setIsOpenModal((prev) => !prev);
    };

    useEffect(() => {
        if (ref.current && !isRenderedTable.current) {
            const board = new DepartureBoard(
                document.getElementById("departure-table"),
                { rowCount: 4, letterCount: 40 },
                handleModal
            );

            board.setValue([
                "TR300 Я ДУМАЮ ЧТО ВСЕ МОЗГОЕБСТВО",
                "TR301 В ЗАЛЕ ОЖИДАНИЯ",
                "TR302 ВЫПОЛНЯЕТ РОЛЬ ПОГРУЖЕНИЯ",
                "TR303 КАК ЕЗДА В ЛИФТЕ",
            ]);

            isRenderedTable.current = true;
        }
    }, [ref]);

    return (
        <MainContainer className="auth screen" backRoute="lounge">
            <div className="wrapper_departure">
                <div className="inner_departure">
                    <h1 className="screen-title">
                        <span className="plane-departure" /> Departures
                    </h1>
                    <div
                        id="departure-table"
                        ref={(elem) => (ref.current = elem)}
                    ></div>
                </div>
            </div>
            <Modal
                isOpen={isOpenModal}
                ariaHideApp={false}
                style={{
                    overlay: {
                        backgroundColor: "none",
                        zIndex: 1,
                    },
                }}
                onRequestClose={handleModal}
                className={styles.modal_content}
            >
                <div className={`${styles.modal_content_title} text-text`}>
                    Доброе утро, мои Герои!
                </div>
                <div className={`${styles.modal_content_desc} text-text`}>
                    Рассказываем о подвигах и занимаем места на пьедестале.
                </div>
                <div className={`${styles.modal_content_desc} text-text`}>
                    А мне пора на посадку…
                </div>
                {/* // Нужно использовать компонент Image из next */}
                <div className={`${styles.modal_content_img}`}>
                    <img src="/modal_img.png" alt="modal picture" />
                </div>
            </Modal>
        </MainContainer>
    );
});

Screen.displayName = "Screen";

export default withAuth(Screen);

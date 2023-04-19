import React, { useState } from "react";
import MainContainer from "../../components/MainContainer/MainContainer";
import withAuth from "../../hocs/WithAuth";
import Modal from "react-modal";
import styles from "./screen.module.css";
import Image from "next/image";

type Props = {};

const Screen = (props: Props) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onClick = () => {
    setIsOpenModal((prev) => !prev);
  };

  return (
    <MainContainer className="auth screen" backRoute="lounge">
      <div className="wrapper_departure">
        <div className="inner_departure">
          <h1 className="screen-title">
            <span className="plane-departure" /> Departures
          </h1>
          <div className="departure-board">
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
          </div>
          <div className="departure-board" onClick={onClick}>
            <span className="animated letter letter-T"></span>
            <span className="animated letter letter-R"></span>
            <span className="animated letter letter-3"></span>
            <span className="animated letter letter-0"></span>
            <span className="animated letter letter-0"></span>
            <span className="letter letter-blank"></span>
            <span className="animated letter letter-Я"></span>
            <span className="animated letter letter-blank"></span>
            <span className="animated letter letter-Д"></span>
            <span className="animated letter letter-У"></span>
            <span className="animated letter letter-М"></span>
            <span className="animated letter letter-А"></span>
            <span className="animated letter letter-Ю"></span>
            <span className="animated letter letter-blank"></span>
            <span className="animated letter letter-Ч"></span>
            <span className="animated letter letter-Т"></span>
            <span className="animated letter letter-О"></span>
            <span className="letter letter-blank"></span>
            <span className="animated letter letter-В"></span>
            <span className="animated letter letter-С"></span>
            <span className="animated letter letter-Ё"></span>
            <span className="letter letter-blank"></span>
            <span className="animated letter letter-М"></span>
            <span className="animated letter letter-О"></span>
            <span className="animated letter letter-З"></span>
            <span className="animated letter letter-Г"></span>
            <span className="animated letter letter-О"></span>
            <span className="animated letter letter-Ё"></span>
            <span className="animated letter letter-Б"></span>
            <span className="animated letter letter-С"></span>
            <span className="animated letter letter-Т"></span>
            <span className="animated letter letter-В"></span>
            <span className="animated letter letter-О"></span>
          </div>
          <div className="departure-board" onClick={onClick}>
            <span className="animated letter letter-T"></span>
            <span className="animated letter letter-R"></span>
            <span className="animated letter letter-3"></span>
            <span className="animated letter letter-0"></span>
            <span className="animated letter letter-1"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="animated letter letter-В"></span>
            <span className="letter letter-blank"></span>
            <span className="animated letter letter-З"></span>
            <span className="animated letter letter-А"></span>
            <span className="animated letter letter-Л"></span>
            <span className="animated letter letter-Е"></span>
            <span className="animated letter letter-blank"></span>
            <span className="animated letter letter-О"></span>
            <span className="animated letter letter-Ж"></span>
            <span className="animated letter letter-И"></span>
            <span className="animated letter letter-Д"></span>
            <span className="animated letter letter-А"></span>
            <span className="animated letter letter-Н"></span>
            <span className="animated letter letter-И"></span>
            <span className="animated letter letter-Я"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
          </div>
          <div className="departure-board" onClick={onClick}>
            <span className="animated letter letter-T"></span>
            <span className="animated letter letter-R"></span>
            <span className="animated letter letter-3"></span>
            <span className="animated letter letter-0"></span>
            <span className="animated letter letter-2"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="animated letter letter-В"></span>
            <span className="animated letter letter-Ы"></span>
            <span className="animated letter letter-П"></span>
            <span className="animated letter letter-О"></span>
            <span className="animated letter letter-Л"></span>
            <span className="animated letter letter-Н"></span>
            <span className="animated letter letter-Я"></span>
            <span className="animated letter letter-Е"></span>
            <span className="animated letter letter-Т"></span>
            <span className="letter letter-blank"></span>
            <span className="animated letter letter-Р"></span>
            <span className="animated letter letter-О"></span>
            <span className="animated letter letter-Л"></span>
            <span className="animated letter letter-Ь"></span>
            <span className="letter letter-blank"></span>
            <span className="animated letter letter-П"></span>
            <span className="animated letter letter-О"></span>
            <span className="animated letter letter-Г"></span>
            <span className="animated letter letter-Р"></span>
            <span className="animated letter letter-У"></span>
            <span className="animated letter letter-Ж"></span>
            <span className="animated letter letter-Е"></span>
            <span className="animated letter letter-Н"></span>
            <span className="animated letter letter-И"></span>
            <span className="animated letter letter-Я"></span>
            <span className="letter letter-blank"></span>
          </div>
          <div className="departure-board" onClick={onClick}>
            <span className="animated letter letter-T"></span>
            <span className="animated letter letter-R"></span>
            <span className="animated letter letter-3"></span>
            <span className="animated letter letter-0"></span>
            <span className="animated letter letter-3"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="animated letter letter-К"></span>
            <span className="animated letter letter-А"></span>
            <span className="animated letter letter-К"></span>
            <span className="letter letter-blank"></span>
            <span className="animated letter letter-И"></span>
            <span className="letter letter-blank"></span>
            <span className="animated letter letter-Е"></span>
            <span className="animated letter letter-З"></span>
            <span className="animated letter letter-Д"></span>
            <span className="animated letter letter-А"></span>
            <span className="letter letter-blank"></span>
            <span className="animated letter letter-В"></span>
            <span className="letter letter-blank"></span>
            <span className="animated letter letter-Л"></span>
            <span className="animated letter letter-И"></span>
            <span className="animated letter letter-Ф"></span>
            <span className="animated letter letter-Т"></span>
            <span className="animated letter letter-Е"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
          </div>
          <div className="departure-board">
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
            <span className="letter letter-blank"></span>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isOpenModal}
        style={{
          overlay: {
            backgroundColor: "none",
            zIndex: 1,
          },
          content: {
            maxWidth: "1112px",
            height: "max-content",
            margin: "0 auto",
            inset: "100px 15px 0px 16px",
            background: "#B9B9B9",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "16px",
            padding: "48px",
          },
        }}
        onRequestClose={onClick}
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
        <div className={`${styles.modal_content_img}`}>
          <Image src="modal_img.png" alt="modal picture" />
        </div>
      </Modal>
    </MainContainer>
  );
};

export default withAuth(Screen);

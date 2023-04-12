import React from 'react';
import MainContainer from '../../components/MainContainer/MainContainer';
import router, { useRouter } from 'next/router';
import Button from '../../components/Button/Button';
import SpaceLink from '../../components/SpaceLink/SpaceLink';
import styles from './Screen.module.css';

type Props = {};

const Screen = (props: Props) => {
    const router = useRouter();

    return (
        <MainContainer className='auth screen' backRoute='lounge'>
        <div>
            <h1 className='screen-title'><i className="fas fa-plane-departure"></i>Departures</h1>
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
<div className="departure-board">
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
<div className="departure-board">
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
  <div className="departure-board">
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
   <div className="departure-board">
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
        </MainContainer>
    );
};

export default Screen;

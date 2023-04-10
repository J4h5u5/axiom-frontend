import * as React from 'react';
import { API_URL } from '../../apiUrls';


export default function laungPage() {


    return (
        <section className="wrapper-second">
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
    )
}
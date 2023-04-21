import React, { memo, useEffect, useRef } from "react";
import MainContainer from "../../components/MainContainer/MainContainer";
import withAuth from "../../hocs/WithAuth";
import { DepartureBoard } from "./departureBoard";

type Props = {};

const Screen = memo((props: Props) => {
    const ref = useRef<HTMLDivElement | null>();
    const isRenderedTable = useRef<boolean>(false);

    useEffect(() => {
        if (ref.current && !isRenderedTable.current) {
            const board = new DepartureBoard(
                document.getElementById("departure-table"),
                { rowCount: 6, letterCount: 40 }
            );

            board.setValue([
                "",
                "TR300 Я ДУМАЮ ЧТО ВСЕ МОЗГОЕБСТВО",
                "TR301 В ЗАЛЕ ОЖИДАНИЯ",
                "TR302 ВЫПОЛНЯЕТ РОЛЬ ПОГРУЖЕНИЯ",
                "TR303 КАК ЕЗДА В ЛИФТЕ",
                "",
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
        </MainContainer>
    );
});

export default withAuth(Screen);

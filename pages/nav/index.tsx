import * as React from 'react';
import { render } from 'react-dom';
import MainContainer from '../../components/MainContainer/MainContainer';
import styles from './Nav.module.css';

export default class Nav extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { linkIdHovered: null };
  }

  render() {
    const links = [
      {
        name: 'Экран',
        href: '/',
      },
      {
        name: 'Капсула',
        href: '/',
      },
    ];

    const handleMouseMove = (idx: number) => () => {
      this.setState({
        linkIdHovered: idx,
      });
    };

    const handleMouseLeave = () => {
      this.setState({
        linkIdHovered: null,
      });
    };

    const linkItems = links.map(({ name, href }, idx) => {
      return (
        <li key={idx.toString()} className={`${styles.nav_item}`}>
          <div className={`${styles.wrapper}`}>
            <span className={`${styles.index}`}>
              {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
            </span>
            <div
              className={`${styles.line} ${
                this.state.linkIdHovered === idx ? styles.line_active : ''
              }`}
            ></div>
          </div>
          <div data-animation="to-top">
            <a
              className={`${styles.link}`}
              href={href}
              onMouseEnter={handleMouseMove(idx)}
              onMouseLeave={handleMouseLeave}
            >
              {name.toLocaleUpperCase()}
              <span className={`${styles.outer}`} aria-hidden="true">
                <span className={`${styles.inner}`}>
                  {name.toLocaleUpperCase()}
                </span>
              </span>
            </a>
          </div>
        </li>
      );
    });

    return (
      <MainContainer className="auth">
        <section className="wrapper-second m-auto text-center">
          <h1 className="title">{Boolean(this.state.linkIdHovered)}</h1>
          <div className="mt-8 text-center flex flex-col items-center">asd</div>
          <ul className={`${styles.nav}`}>{linkItems}</ul>
        </section>
      </MainContainer>
    );
  }
}

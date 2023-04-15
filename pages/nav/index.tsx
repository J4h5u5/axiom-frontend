import * as React from 'react';
import { render } from 'react-dom';
import MainContainer from '../../components/MainContainer/MainContainer';
import styles from './Nav.module.css';

export default class Nav extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { isLinkHovered: false };
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

    const handleMouseMove = () => {
      this.setState({
        isLinkHovered: true,
      });
    };

    const handleMouseLeave = () => {
      this.setState({
        isLinkHovered: false,
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
                this.state.isLinkHovered ? styles.line_active : ''
              }`}
            ></div>
          </div>
          <div data-animation="to-top">
            <a
              className={`${styles.link}`}
              href={href}
              onMouseMove={handleMouseMove}
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
          <h1 className="title">{this.state.isLinkHovered}</h1>
          <div className="mt-8 text-center flex flex-col items-center">asd</div>
          <ul className={`${styles.nav}`}>{linkItems}</ul>
        </section>
      </MainContainer>
    );
  }
}

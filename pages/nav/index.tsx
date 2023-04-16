import * as React from 'react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from './Nav.module.css';

export default function Nav() {
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

  type CircleParams = {
    cx: number;
    cy: number;
  };

  const circleParamsBase: CircleParams = {
    cx: 0,
    cy: 0,
  };

  const router = useRouter();
  const [linkIdHovered, setLinkIdHovered] = useState<number | null>(null);
  const [isShown, setIsShown] = useState<boolean>(false);
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [circleParams, setCircleParams] =
    useState<CircleParams>(circleParamsBase);
  const [circleRadius, setCircleRadius] = useState<number>(0);

  const scaleCicleRadius = () => {
    setCircleRadius((circleRadius) => circleRadius + 60);
    window.requestAnimationFrame(scaleCicleRadius);
  };

  const handleMouseMove = (idx: number) => () => {
    setLinkIdHovered(idx);
  };

  const handleMouseLeave = () => {
    setLinkIdHovered(null);
  };

  const handleLinkClick = (href: string, x: number, y: number) => {
    setIsSelected(true);
    setCircleParams({
      cx: x,
      cy: y,
    });
    window.requestAnimationFrame(scaleCicleRadius);

    setTimeout(() => {
      router.push(href);
    }, 250);
  };

  useEffect(() => {
    setIsShown(true);
  });

  const linkItems = links.map(({ name, href }, idx) => {
    return (
      <li
        key={idx.toString()}
        className={`${styles.nav_item} ${isShown ? '' : styles.hidden} `}
      >
        <div className={`${styles.wrapper}`}>
          <span className={`${styles.index}`}>
            {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
          </span>
          <div
            className={`${styles.line} ${
              linkIdHovered === idx ? styles.line_active : ''
            }`}
          ></div>
        </div>
        <div data-animation="to-top">
          <a
            className={`${styles.link}`}
            href={href}
            onMouseEnter={handleMouseMove(idx)}
            onMouseLeave={handleMouseLeave}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick(href, e.pageX, e.pageY);
            }}
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
    <main className={`view bg-bombay auth ${styles.main}`}>
      <section className={`${styles.container}`}>
        <ul className={`${styles.nav}`}>{linkItems}</ul>
      </section>
      <svg
        className={`${styles.scene} ${isSelected ? styles.selected : ''}`}
        width="100%"
        height="100%"
      >
        <circle
          cx={circleParams.cx}
          cy={circleParams.cy}
          r={circleRadius}
          fill="url('#circleBg')"
        ></circle>
        <defs>
          <radialGradient id="circleBg">
            <stop offset="50%" stop-color="rgb(3,1,23, 0.7)" />
            <stop offset="80%" stop-color="rgb(3,1,23, 0.5)" />
            <stop offset="100%" stop-color="rgb(3,1,23, 0.3)" />
          </radialGradient>
        </defs>
      </svg>
    </main>
  );
}

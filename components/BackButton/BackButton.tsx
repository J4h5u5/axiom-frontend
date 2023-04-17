import React from "react";
import SpaceLink from "../SpaceLink/SpaceLink";
import styles from './BackButton.module.css'
import { BackIcon } from "../commonIcons/BackIcon";

type Props = {
  href: string;
};

const BackButton = ({ href }: Props) => {
    return (
        <SpaceLink href={href}>
            <div className={styles.back_button}>
                <BackIcon />
            </div>
        </SpaceLink>
    );
};

export default BackButton;

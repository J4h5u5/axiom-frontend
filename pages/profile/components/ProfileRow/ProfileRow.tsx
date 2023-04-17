import React from "react";
import styles from "./ProfileRow.module.css";

type TProfileRow = {
  value: string;
};

const ProfileRow: React.FC<TProfileRow> = ({ value }) => {
    return (
        <div className={styles.profile__data_item}>
            {value}
        </div>
    );
};

export default ProfileRow;

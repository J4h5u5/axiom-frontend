import React from "react";
import { useUser } from "../../../../hooks/useUser";
import styles from "./ReferralList.module.css";

const ReferralList = () => {
    const user = useUser();
    return (
        <div className={`${styles.profile__referralList} text-text`}>
            <div className={styles.profile__referralList_title}>Рефералы</div>
            <ul className="list-none">
                {user.referrals.map((ref, idx) => {
                    return (
                        <li
                            key={ref.userName}
                            className={styles.profile__referralList_item}
                        >
                            {idx + 1}. {ref.userName}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ReferralList;

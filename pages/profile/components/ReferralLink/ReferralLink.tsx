import React from "react";
import styles from "./ReferralLink.module.css";
import { useUser } from "../../../../hooks/useUser";

const ReferralLink = () => {
    const user = useUser();

    return (
        <div className={styles.profile__referral}>
            <div className={`${styles.profile__referral_title} text-text`}>
        Реферальная ссылка
            </div>
            <div className={styles.profile__referral_link}>
                {`https://space-drops.io/${user.tgUserData?.id || ""}`}
            </div>
        </div>
    );
};

export default ReferralLink;

import React from "react";
import styles from "./ProfilePhoto.module.css";
// @ts-ignore: Unreachable code error
import Blockies from "react-blockies";
import { useUser } from "../../../../hooks/useUser";

type Props = {
  photoUrl?: string;
};

const ProfilePhoto = ({ photoUrl }: Props) => {
    const user = useUser();

    return (
        <div className={styles.wrapper}>
            <div className={styles.inner}>
                <div className={styles.container_profile_photo}>
                    <div className={styles.profile_photo}>
                        <Blockies
                            seed={user.referralId}
                            size={22}
                            scale={5}
                            color="#e8d32a"
                            bgColor="#fff"
                            spotColor="#929290"
                            className="identicon"
                        />
                    </div>
                    {/* <div className={styles.profile_container_photo_camera}>
                <div>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path
                            d="M6.6602 1.28564L5.2328 2.99993H2.7602C1.9022 2.99993 1.2002 3.77136 1.2002 4.71422V14.9999C1.2002 15.9428 1.9022 16.7142 2.7602 16.7142H15.2402C16.0982 16.7142 16.8002 15.9428 16.8002 14.9999V4.71422C16.8002 3.77136 16.0982 2.99993 15.2402 2.99993H12.7676L11.3402 1.28564H6.6602ZM9.0002 14.1428C6.84739 14.1428 5.1002 12.2228 5.1002 9.85707C5.1002 7.49136 6.84739 5.57136 9.0002 5.57136C11.153 5.57136 12.9002 7.49136 12.9002 9.85707C12.9002 12.2228 11.153 14.1428 9.0002 14.1428Z"
                            fill="#030117"
                        />
                        <path
                            d="M9.00019 12.5998C10.3787 12.5998 11.4962 11.3717 11.4962 9.8569C11.4962 8.34207 10.3787 7.11405 9.00019 7.11405C7.62168 7.11405 6.50419 8.34207 6.50419 9.8569C6.50419 11.3717 7.62168 12.5998 9.00019 12.5998Z"
                            fill="#030117"
                        />
                    </svg>
                </div>
            </div> */}
                </div>
                <div className={styles.miles}>
                    <div className={styles.miles_avatar} />
                    <div>{user?.miles || "0"}</div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePhoto;

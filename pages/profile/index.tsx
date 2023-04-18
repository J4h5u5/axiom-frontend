import React from "react";
import MainContainer from "../../components/MainContainer/MainContainer";
import ProfilePhoto from "./components/ProfilePhoto/ProfilePhoto";
import { useUser } from "../../hooks/useUser";
import ProfileRow from "./components/ProfileRow/ProfileRow";
import ReferralLink from "./components/ReferralLink/ReferralLink";
import ReferralList from "./components/ReferralList/ReferralList";
import { useRouter } from "next/router";
import styles from "./Profile.module.css";

type Props = {};

const Profile = (props: Props) => {
    const router = useRouter();
    const user = useUser();

    React.useEffect(() => {
        if (!user.authToken) {
            router.push('/');
        }
    }, [user]);

    return (
        <MainContainer className="auth" backRoute="lounge">
            <div className={styles.profile}>
                <div className={styles.profile__header}>
                    <div className={styles.profile__logo}>
                        <ProfilePhoto photoUrl={"./src/img/profile.png"} />
                        <div className={`${styles.profile__mili} text text`}>
                            {user?.miles || "0"}
                        </div>
                    </div>
                    <div className={styles.profile__data}>
                        <ProfileRow value={`@${user.userName}`} />
                        <ProfileRow
                            value={`${user.tgUserData?.first_name || ""} ${
                                user.tgUserData?.last_name || ""
                            }`}
                        />
                        <ProfileRow value={"+995 558 14 58"} />
                    </div>
                </div>

                <ReferralLink />
                <ReferralList />
            </div>
        </MainContainer>
    );
};

export default Profile;

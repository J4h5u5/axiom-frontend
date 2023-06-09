import React from "react";
import MainContainer from "../../components/MainContainer/MainContainer";
import ProfilePhoto from "./components/ProfilePhoto/ProfilePhoto";
import { useUser } from "../../hooks/useUser";
import ProfileRow from "./components/ProfileRow/ProfileRow";
import ReferralLink from "./components/ReferralLink/ReferralLink";
import ReferralList from "./components/ReferralList/ReferralList";
import styles from "./Profile.module.css";
import withAuth from "../../hocs/WithAuth";

type Props = {};

const Profile = (props: Props) => {
    const user = useUser();

    return (
        <MainContainer className="auth" backRoute="lounge">
            <div className={styles.profile}>
                <div className={styles.profile__header}>
                    <div className={styles.profile__logo}>
                        <ProfilePhoto />
                    </div>
                    <div className={styles.profile__data}>
                        <ProfileRow value={`@${user.tgUserData?.username}`} />
                        <ProfileRow
                            value={`${user.tgUserData?.first_name || ""} ${
                                user.tgUserData?.last_name || ""
                            }`}
                        />
                    </div>
                </div>

                <ReferralLink />
                <ReferralList />
            </div>
        </MainContainer>
    );
};

export default withAuth(Profile);

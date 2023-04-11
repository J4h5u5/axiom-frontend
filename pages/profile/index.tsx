import React from 'react';
import MainContainer from '../../components/MainContainer/MainContainer';
import ProfilePhoto from './components/ProfilePhoto/ProfilePhoto';
import { useUser } from '../../hooks/useUser';
import ProfileRow from './components/ProfileRow/ProfileRow';
import ReferralLink from './components/ReferralLink/ReferralLink';
import ReferralList from './components/ReferralList/ReferralList';
import { useRouter } from 'next/router';

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
        <MainContainer>
            <div className='mb-4'>
                <ProfilePhoto photoUrl={'./src/img/profile.png'} />
                <div className="flex flex-wrap flex-col">
                    <ProfileRow
                        field="nickname"
                        value={`@${user.userName}`}
                    />
                    <ProfileRow
                        field="name"
                        value={`${user.tgUserData?.first_name} ${user.tgUserData?.last_name}`}
                    />
                    <ProfileRow
                        field="phone"
                        value={''}
                    />
                </div>
            </div>


            <ReferralLink />
            <ReferralList />
        </MainContainer>
    );
};

export default Profile;

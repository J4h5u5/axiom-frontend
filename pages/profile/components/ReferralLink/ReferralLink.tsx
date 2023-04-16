import React from 'react'
import styles from './ReferralLink.module.css';
import { useUser } from '../../../../hooks/useUser';
import { useRouter } from 'next/router';

type Props = {}

const ReferralLink = (props: Props) => {
    const user = useUser();
    const router = useRouter();
    return (
        <div className='mb-8'>
            <div className='text-2xl'>Реферальная ссылка</div>
            <div className={`${styles.referral_link} text-slate-500`}>{`https://space-drops.io/${user.tgUserData?.id}`}</div>
        </div>
    )
}

export default ReferralLink
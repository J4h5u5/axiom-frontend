import React from 'react';
import styles from './Profile.module.css';

type Props = {
    photoUrl?: string;
}

const ProfilePhoto = ({ photoUrl }: Props) => {
    return (
        <>
            <div className={`${styles.profile_photo} bg-gray-300 mb-8`}></div>
        </>
    )
}

export default ProfilePhoto
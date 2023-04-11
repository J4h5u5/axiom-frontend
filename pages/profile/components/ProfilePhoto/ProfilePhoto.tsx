import React from 'react'

type Props = {
    photoUrl?: string;
}

const ProfilePhoto = ({ photoUrl }: Props) => {
  return (
    <>
        <div className='profile-photo bg-gray-500 mb-8'></div>
        <style jsx>
            {
                `
                .profile-photo {
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                    background-image: url(${photoUrl});
                }

                `
            }
        </style>
    </>
  )
}

export default ProfilePhoto
import React from 'react'

type Props = {
    field: string;
    value: string;
}

const ProfileRow = ({ field, value }: Props) => {
  return (
    <div className='border-2 max-w-lg rounded-s px-8 mr-4 py-2 text-xl font-medium mb-2'>{field}: {value}</div>
  )
}

export default ProfileRow
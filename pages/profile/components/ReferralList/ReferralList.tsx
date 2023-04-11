import React from 'react'
import { useUser } from '../../../../hooks/useUser';

type Props = {}

const ReferralList = (props: Props) => {
  const user = useUser();
  return (
    <div>
      <div>Рефералы:</div>
      <ul className='list-none'>
        {user.referrals.map(ref => {
          return <li key={ref.userName}>
              {ref.userName}
          </li>
        })}
      </ul>
    </div>
  )
}

export default ReferralList
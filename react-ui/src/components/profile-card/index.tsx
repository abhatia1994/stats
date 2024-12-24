import React from 'react'
import './index.css'
import AvatarSVG from '../../assets/avatar.svg'

type ProfileCardArgs = {
  profile: {
    name: string
    phone: string
  }
}

export const ProfileCard = (props: ProfileCardArgs) => {
  const {name, phone} = props.profile
  return (
    <div className='profile-card'>
      <div className='avatar'>
        <img src={AvatarSVG} />
      </div>
      <div className='data'>
        <div>{name}</div>
        <div>{phone}</div>
      </div>
    </div>
  )
}
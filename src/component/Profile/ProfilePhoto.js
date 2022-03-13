import React from 'react'
import MyProfilePhoto from '../../myphoto.jpg'

export default function ProfilePhoto() {
  return (
    <div className='media'>
        <img src={MyProfilePhoto} alt="Niza Ben Soltane" />
    </div>
  )
}

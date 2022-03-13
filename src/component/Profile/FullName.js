import React from 'react'

export default function FullName() {
    let firstName = "Nizar"
    let lastName = "Ben Soltane"
  return (
    <div className='name'>
        <p>{firstName} <span>{lastName}</span></p>
    </div>
  )
}

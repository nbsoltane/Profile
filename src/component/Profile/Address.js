import React from 'react'

export default function Address() {
    let adress = "Cité Sud Oued Mesri"
    let cp = "8040"
    let ville ="Bouargoub"
    let gouvernement = "Nabeul"
  return (
    <div className='adress'>
        <p>{adress}, {cp} {ville} {gouvernement}</p>
    </div>
  )
}

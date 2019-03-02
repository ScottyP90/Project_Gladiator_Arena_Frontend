import React from 'react';

const Weapon = (props) => {

  return(
    <dev>
      <h4 className="name">Weapons Name: {props.weapon.weaponName}</h4>
      <p className="type">Weapon Type: {props.weapon.type}</p>
      <p className="attack">Attack: {props.weapon.attack}</p>
      <p className="defence">Defence: {props.weapon.defence}</p>
    </dev>
  )
}

export default Weapon

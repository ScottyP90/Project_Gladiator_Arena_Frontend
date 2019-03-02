import React  from 'react';

const Gladiator = (props) => {

  return (
    <div>
      <h4 className="name">Name: {props.gladiator.name} {props.gladiator.title} </h4>
      <p className="gender">Gender: {props.gladiator.gender}</p>
      <p className="weapon">Weapon: {props.gladiator.weapon.weaponName}</p>
      <p className="health">Health: {props.gladiator.health}</p>
      <p className="strength">Strength: {props.gladiator.strength}</p>
      <p className="defence">Defence: {props.gladiator.defence}</p>
      <p className="healingCap">Healing Cap: {props.gladiator.healingCap}</p>
    </div>
  )
}

export default Gladiator

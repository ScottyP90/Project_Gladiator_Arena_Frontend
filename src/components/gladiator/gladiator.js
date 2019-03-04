import React  from 'react';

const Gladiator = (props) => {

  const url = "/gladiators/" + props.gladiator.id;
  return (
    <div>
      <a href={url}>{props.gladiator.name} {props.gladiator.title} </a>
      <p className="weapon">Weapon: {props.gladiator.weapon.weaponName}</p>
    </div>
  )
}

export default Gladiator

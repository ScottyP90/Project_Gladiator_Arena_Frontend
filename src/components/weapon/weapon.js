import React from 'react';

const Weapon = (props) => {

  const url = "/weapons/" + props.weapon.id;
  return(
    <div>
      <a href={url} className="name">{props.weapon.weaponName}</a>
      <p className="type">Weapon Type: {props.weapon.type}</p>
    </div>
  )
}

export default Weapon

import React from 'react';

const Weapon = (props) => {

  const url = "/weapons/" + props.weapon.id;
  return(
    <div className="container">
      <div className="detailsContainer">
        <a href={url} className="name">{props.weapon.weaponName}</a>
        <p className="type">Weapon Type: {props.weapon.type}</p>
      </div>
    </div>
  )
}

export default Weapon

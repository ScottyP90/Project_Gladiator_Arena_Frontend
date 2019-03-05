import React from 'react';

const GladiatorDetails = (props) => {
  if (!props.gladiator){
    return null
  }

  const handleDelete = () => {
    props.onDelete(props.gladiator.id)
  }

  const editUrl = "/gladiators/edit/" + props.gladiator.id

  return (
    <div className="container">
      <div className="detailsContainer">
        <h4 className="name">Name: {props.gladiator.name} {props.gladiator.title} </h4>
        <p className="gender">Gender: {props.gladiator.gender}</p>
        <p className="weapon">Weapon: {props.gladiator.weapon.weaponName}</p>
        <p className="health">Health: {props.gladiator.health}</p>
        <p className="strength">Strength: {props.gladiator.strength}</p>
        <p className="defence">Defence: {props.gladiator.defence}</p>
        <p className="healingCap">Healing Cap: {props.gladiator.healingCap}</p>
        <button className="button" onClick={handleDelete}>Execute {props.gladiator.name}</button>
        <a href={editUrl} className="button" >Train {props.gladiator.name}</a>
      </div>
    </div>
  )
}

export default GladiatorDetails

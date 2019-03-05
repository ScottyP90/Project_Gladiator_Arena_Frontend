import React from 'react';

const WeaponDetails = (props) => {
  if (!props.weapon){
    return null
  }

  const handleDelete = () => {
    props.onDelete(props.weapon.id)
  }

  const gladiators = props.weapon.gladiators.map((gladiator, index) => {
    return <li key={index}>{gladiator.name}</li>
  })

  const editUrl = "/weapons/edit/" + props.weapon.id

  return(
    <div className="container">
      <div className="detailsContainer">
        <h4 className="name">{props.weapon.weaponName}</h4>
        <p className="type">Weapon Type: {props.weapon.type}</p>
        <p className="attack">Attack: {props.weapon.attack}</p>
        <p className="defence">Defence: {props.weapon.defence}</p>
        <p>Assigned to:</p>
        <ul>
          {gladiators}
        </ul>
        <button className="button" onClick={handleDelete}>Destroy {props.weapon.weaponName}</button>
        <a href={editUrl} className="button" >Reforge {props.weapon.weaponName}</a>
      </div>
    </div>
  )
}

export default WeaponDetails

import React from 'react';

const WeaponEditForm = (props) => {

  if (!props.weapon){
    return null
  }

  function handleSubmit(event){
    event.preventDefault();
    const weapon = {
      "attack": event.target.attack.value,
      "defence": event.target.defence.value
    }
    props.handleWeaponUpdate(weapon)
  }


  return(
    <div className="container">
      <form className="form-container" onSubmit={handleSubmit}>
        <input type="number" placeholder="Attack" name="attack" min="0" max="300" defaultValue={props.weapon.attack} required/>
        <input type="number" placeholder="Defence" name="defence" min="0" max="300" defaultValue={props.weapon.defence} required/>
        <button className="buttonForm" type="submit">Forge Weapon</button>
      </form>
    </div>
  )
}

export default WeaponEditForm

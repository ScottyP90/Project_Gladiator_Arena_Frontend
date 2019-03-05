import React from 'react';

const WeaponForm = (props) => {

  function handleSubmit(event){
    event.preventDefault();
    const weapon = {
      "weaponName": event.target.weaponName.value,
      "type": event.target.type.value,
      "attack": event.target.attack.value,
      "defence": event.target.defence.value,
      "gladiators": []
    }
    props.handleWeaponPost(weapon)
  }

  return(
    <div className="container">
      <form className="form-container" onSubmit={handleSubmit}>
        <h3>Forging New Weapon</h3>
        <input type="text" placeholder="Weapon Name" name="weaponName" required/>
        <input type="text" placeholder="Weapon Type" name="type" required/>
        <input type="number" placeholder="Attack" name="attack" min="0" max="300" required/>
        <input type="number" placeholder="Defence" name="defence" min="0" max="300"  required/>
        <button className="buttonForm" type="submit">Forge New Weapon</button>
      </form>
    </div>
  )
}

export default WeaponForm

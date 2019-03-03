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

  render(
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Weapon Name" name="weaponName" required/>
        <input type="text" placeholder="Type" name="type" required/>
        <input type="number" placeholder="Attack" name="attack" required/>
        <input type="number" placeholder="Defence" name="defence" required/>
        <button type="submit">Forge New Weapon</button>
      </form>
    </div>
  )
}

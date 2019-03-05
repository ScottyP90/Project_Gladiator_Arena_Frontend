import React from 'react';

const GladiatorEditForm = (props) => {

  if(!props.gladiator){
    return null
  }

  function handleSubmit(event) {
    event.preventDefault();
    const health = event.target.health.value;

    const gladiator = {
      "weapon": event.target.weapon.value,
      "health": health,
      "healthCap": health,
      "strength": event.target.strength.value,
      "defence": event.target.defence.value
    }

    props.handleGladiatorUpdate(gladiator)
  }

  const options = props.weapons.map((weapon,index) => {
    return <option key={index} value={weapon._links.self.href}>{weapon.weaponName}</option>
  })

  return(
    <div className="container">
      <form className="form-container" onSubmit={handleSubmit}>
        <h3>Training {props.gladiator.name}</h3>
        <select name="weapon" required>
          <option disabled value="default">Select a weapon</option>
          {options}
        </select>
        <input type="number" placeholder="Health" name="health" min="1" max="5000" defaultValue={props.gladiator.health} required/>
        <input type="number" placeholder="Strength" name="strength" min="1" max="500" defaultValue={props.gladiator.strength} required/>
        <input type="number" placeholder="Defence" name="defence" min="1" max="400" defaultValue={props.gladiator.defence} required/>
        <button className="buttonForm" type="submit">Finish Training {props.gladiator.name} </button>
      </form>
    </div>
  )

}

export default GladiatorEditForm

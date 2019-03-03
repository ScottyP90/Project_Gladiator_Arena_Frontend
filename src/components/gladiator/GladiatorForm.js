import React from 'react';

const GladiatorForm = (props) => {

  function handleSubmit(event){
    event.preventDefault();
    const gladiator = {
        "name": event.target.name.value,
        "title": event.target.title.value,
        "gender": event.target.gender.value,
        "weapon": event.target.weapon.value,
        "health": event.target.health.value,
        "healthCap": event.target.health.value,
        "strength": event.target.strength.value,
        "defence": event.target.defence.value,
        "healingCap": 3,
        "matches": []
      }
    props.handleGladiatorPost(gladiator)
  }

  const options = props.weapons.map((weapon,index) => {
    return <option key={index} value={weapon._links.self.href}>{weapon.weaponName}</option>
  })

  render(
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" name= "name" required/>
        <input type="text" placeholder="Title" name= "title" required/>
        <input type="text" placeholder="Gender" name= "gender" required/>
        <select name="weapon" required>
          <option disabled value="default">Select a weapon</option>
          {options}
        </select>
        <input type="number" placeholder="Health" name="health" required/>
        <input type="number" placeholder="Strength" name="strength" required/>
        <input type="number" placeholder="Defence" name="defence" required/>
        <button type="submit">Train New Gladiator</button>
      </form>
    </div>
  )

}

export default GladiatorForm

import React from 'react';

const MonsterEditForm = (props) => {

  if(!props.monster){
    return null
  }

  function handleSubmit(event) {
    event.preventDefault();
    const monster = {
      "health": event.target.health.value,
      "healthCap": event.target.health.value,
      "attack": event.target.attack.value,
      "defence": event.target.defence.value,
    }

    props.handleMonsterUpdate(monster)
  }
  return(
    <div className="container">
      <form className="form-container" onSubmit={handleSubmit}>
        <input type="number" placeholder="Health" name="health" min="1" max="6000" defaultValue={props.monster.health} required/>
        <input type="number" placeholder="Attack" name="attack" min="1" max="500" defaultValue={props.monster.attack} required/>
        <input type="number" placeholder="Defence" name="defence" min="1" max="400" defaultValue={props.monster.defence} required/>
        <button className="buttonForm" type="submit">Finish Train Monster</button>
      </form>
    </div>
  )

}

export default MonsterEditForm

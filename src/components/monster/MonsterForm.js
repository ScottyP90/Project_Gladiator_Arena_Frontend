import React from 'react';

const MonsterForm = (props) => {

  function handleSubmit(event) {
    event.preventDefault();
    const monster = {
      "monsterName": event.target.monsterName.value,
      "title": event.target.title.value,
      "health": event.target.health.value,
      "healthCap": event.target.health.value,
      "attack": event.target.attack.value,
      "defence": event.target.defence.value,
      "matches": []
    }
    props.handleMonsterPost(monster)
  }

  return(
    <div className="container">
      <form className="form-container" onSubmit={handleSubmit}>
        <input type="text" placeholder="Monster Name" name="monsterName" required/>
        <input type="text" placeholder="Title" name="title" required/>
        <input type="number" placeholder="Health" name="health" min="1" max="6000" required/>
        <input type="number" placeholder="Attack" name="attack" min="1" max="500" required/>
        <input type="number" placeholder="Defence" name="defence" min="1" max="400" required/>
        <button className="buttonForm" type="submit">Tame New Monster</button>
      </form>
    </div>
  )
}

export default MonsterForm

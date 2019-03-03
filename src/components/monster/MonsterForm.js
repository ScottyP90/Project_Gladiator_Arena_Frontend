import React from 'react';

const MonsterForm = (props) => {

  function handleSubmit(event) {
    event.preventDefault();
    const monster = {
      "monsterName": event.target.monsterName.value,
      "title": event.target.title.value,
      "health": event.target.health.value,
      "healthCap": event.target.health.value,
      "attack": event.target.attack.value
      "defence": event.target.defence.value,
      "matches": []
    }
    props.handleMonsterPost(monster)
  }

  render(
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Monster Name" name="monsterName" required/>
        <input type="text" placeholder="Title" name="title" required/>
        <input type="number" placeholder="Health" name="health" required/>
        <input type="number" placeholder="Attack" name="attack" required/>
        <input type="number" placeholder="Defence" name="defence" required/>
        <button type="submit">Tame New Gladiator</button>
      </form>
    </div>
  )
}

export default MonsterForm

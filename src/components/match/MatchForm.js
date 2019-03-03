

const MatchForm = (props) => {

  function handleSubmit(event){
    event.preventDefault();
    const match = {
      "name": event.target.name.value,
      "gladiator": event.target.gladiator.value,
      "monster": event.target.monster.value
    }
  }

  const options1 = props.gladiators.map((gladiator,index) => {
    return <option key={index} value={gladiator._links.self.href}>{gladiator.name}</option>
  })

  const options2 = props.monsters.map((monster,index) => {
    return <option key={index} value={monster._links.self.href}>{monster.monsterName}</option>
  })

  render(
    <div>
      <form onSubmit={handleSubmit}>
        <select name="gladiator" required>
          <option disabled value="default">Select a Gladiator</option>
          {options1}
        </select>
        <input type="text" placeholder="" name="name" required/>
        <select name="monster" required>
          <option disabled value="default">Select a Monster</option>
          {options2}
        </select>
        <button type="submit">New Match</button>
      </form>
    </div>
  )
}
import React from 'react';

const MatchFight = (props) => {
  if (!props.match) return null;

  function handleAttack() {
    console.log('handleAttack props', props);
    props.onAttack(props.match.gladiator.id, props.match.monster.id, props.match.id)
  }

  function handleHeal() {
    props.onHeal(props.match.gladiator.id, props.match.monster.id, props.match.id)
  }

  function handleFinishMatch() {
    props.onFinishMatch(props.match.gladiator.id, props.match.monster.id, props.match.id)
  }

  return(
    <div className="container">
      <div className="detailsContainer">
        <div>
          <h4 className="monsterName">{props.match.monster.monsterName} {props.match.monster.title}</h4>
          <p className="health">HP: {props.match.monster.health}/{props.match.monster.healthCap}</p>
        </div>
        <div>
          <h4>{props.match.gladiator.name} {props.match.gladiator.title}</h4>
          <p className="health">HP: {props.match.gladiator.health}/{props.match.gladiator.healthCap}</p>
          <p className="healing">Number of heals: {props.match.gladiator.healingCap}</p>
        </div>
        <button className="button" onClick={handleAttack}>Attack</button>
        <button className="button" onClick={handleHeal}>Heal</button>
        <button className="button" onClick={handleFinishMatch}>End Match</button>
      </div>
    </div>
  )

}

export default MatchFight

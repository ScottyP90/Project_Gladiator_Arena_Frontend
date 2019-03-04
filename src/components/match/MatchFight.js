import React from 'react';

const MatchFight = (props) => {
  if (!props.match) return null;

  function handleAttack() {

  }

  function handleHeal() {

  }

  return(
    <div>
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
    </div>
  )

}

export default MatchFight

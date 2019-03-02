import React from 'react';

const Match = (props) => {

  return(
    <div>
      <h4 className="name">Match: {props.match.name}</h4>
      <p className="gladiator">Gladiator: {props.match.gladiator.name} {props.match.gladiator.title}</p>
      <p>vs</p>
      <p className="monster">Monster: {props.match.monster.monsterName} {props.match.monster.title}</p>
    </div>
  )
}

export default Match

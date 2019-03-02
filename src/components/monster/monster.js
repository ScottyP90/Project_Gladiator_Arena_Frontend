import React from 'react';

const Monster = (props) => {

  return(
    <dev>
      <h4></h4>
      <p className="name">Monsters Name: {props.monster.monsterName} {props.monster.title}</p>
      <p className="health">Health: {props.monster.health}</p>
      <p className="attack">Attack: {props.monster.attack}</p>
      <p className="defence">Defence {props.monster.defence}</p>
    </dev>
  )
}

export default Monster

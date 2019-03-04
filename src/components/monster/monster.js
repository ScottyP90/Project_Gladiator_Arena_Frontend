import React from 'react';

const Monster = (props) => {

  const url = "/monsters/" + props.monster.id;
  return(
    <div>
      <a href={url} className="name">{props.monster.monsterName} {props.monster.title}</a>
    </div>
  )
}

export default Monster

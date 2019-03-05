import React from 'react';

const Monster = (props) => {

  const url = "/monsters/" + props.monster.id;
  return(
    <div className="container">
      <div className="detailsContainer">
        <a href={url} className="name">{props.monster.monsterName} {props.monster.title}</a>
      </div>
    </div>
  )
}

export default Monster

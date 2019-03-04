import React from 'react';

const MonsterDetails = (props) => {
  if (!props.monster){
    return null
  }

  const handleDelete = () => {
    props.onDelete(props.monster.id)
  }

  return(
    <div>
      <h4 className="name">{props.monster.monsterName} {props.monster.title}</h4>
      <p className="health">Health: {props.monster.health}</p>
      <p className="attack">Attack: {props.monster.attack}</p>
      <p className="defence">Defence: {props.monster.defence}</p>
      <button className="button" onClick={handleDelete}>Delete {props.monster.monsterName}</button>
    </div>


  )
}

export default MonsterDetails

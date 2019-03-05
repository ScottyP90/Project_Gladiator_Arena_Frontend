import React from 'react';

const MonsterDetails = (props) => {
  if (!props.monster){
    return null
  }

  const handleDelete = () => {
    props.onDelete(props.monster.id)
  }

  const editUrl = "/monsters/edit/" + props.monster.id

  return(
    <div className="container">
      <div className="detailsContainer">
        <h4 className="name">{props.monster.monsterName} {props.monster.title}</h4>
        <p className="health">Health: {props.monster.health}</p>
        <p className="attack">Attack: {props.monster.attack}</p>
        <p className="defence">Defence: {props.monster.defence}</p>
        <button className="button" onClick={handleDelete}>Slay {props.monster.monsterName}</button>
        <a href={editUrl} className="button" >Train {props.monster.monsterName}</a>
      </div>
    </div>

  )
}

export default MonsterDetails

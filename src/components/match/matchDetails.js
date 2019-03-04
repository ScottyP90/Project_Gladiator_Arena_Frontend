import React from 'react';

const MatchDetails = (props) => {
  if (!props.match){
    return null
  }

  const handleDelete = () => {
    props.onDelete(props.match.id)
  }

  return(
    <div>
      <h4 className="name">Match: {props.match.name}</h4>
      <p className="gladiator">{props.match.gladiator.name} {props.match.gladiator.title}</p>
      <p>vs</p>
      <p className="monster">{props.match.monster.monsterName} {props.match.monster.title}</p>
      <button className="button" onClick={handleDelete}>Delete {props.match.name}</button>
    </div>
  )
}

export default MatchDetails

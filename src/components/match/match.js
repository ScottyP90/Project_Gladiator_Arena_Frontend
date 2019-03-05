import React from 'react';

const Match = (props) => {

  const url = "/matches/fight/" + props.match.id;
  const url1 = "/matches/" + props.match.id;
  return(
    <div className="container">
      <div className="detailsContainer">
        <a href={url1} className="name">Match: {props.match.name} </a>
        <div>
          <a href={url} className="button">Fight</a>
        </div>
      </div>
    </div>
  )
}

export default Match

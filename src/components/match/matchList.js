import React from 'react';
import Match from './match.js'

const MatchList = (props) => {
  const matches = props.matches.map((match) => {
    return(<li key={match.id} className="component-item">
				<Match match={match} />
			</li>
    )
  })

  return (
		<ul className="component-list">
			{matches}
		</ul>

	)
}

export default MatchList

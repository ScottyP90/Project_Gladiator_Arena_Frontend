import React from 'react';
import Gladiator from './gladiator.js'

const GladiatorList = (props) => {
  const gladiators = props.gladiators.map((gladiator) => {
    return (<li key={gladiator.id} className="component-item">
				<Gladiator gladiator={gladiator} />
			</li>
    )
  })

  return (
		<ul className="component-list">
			{gladiators}
		</ul>

	)
}

export default GladiatorList

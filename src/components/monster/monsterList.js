import React from 'react';
import Monster from './monster.js'

const MonsterList = (props) => {
  const monsters = props.monsters.map((monster) => {
    return(<li key={monster.id} className="component-item">
				<Monster monster={monster} />
			</li>
    )
  })

  return (
		<ul className="component-list">
			{monsters}
		</ul>

	)
}

export default MonsterList

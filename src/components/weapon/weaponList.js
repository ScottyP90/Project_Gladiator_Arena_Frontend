import React from 'react';
import weapon from './weapon.js'

const WeaponList = (props) => {
  const weapons = props.weapons.map((weapon) => {
    return(<li key={weapon.id} className="component-item">
				<Gladiator weapon={weapon} />
			</li>
    )
  })

  return (
		<ul className="component-list">
			{weapons}
		</ul>

	)
}

export default WeaponList

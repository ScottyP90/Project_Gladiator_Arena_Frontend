import React from 'react';
import Weapon from './weapon.js'

const WeaponList = (props) => {
  const weapons = props.weapons.map((weapon) => {
    return(<li key={weapon.id} className="component-item">
				<Weapon weapon={weapon} />
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

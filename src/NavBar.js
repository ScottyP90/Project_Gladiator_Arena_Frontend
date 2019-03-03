import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
  return (
    <header>

      <h1>Gladiators Arena</h1>

      <ul className="navbar">
        <li className="navLink">
          <Link to="/gladiators">Meet the Gladiators</Link>
        </li>
        <li className="navLink">
          <Link to="/gladiators/new">Train New Gladiators</Link>
        </li>
        <li className="navLink">
          <Link to="/monsters">Observe the Monsters</Link>
        </li>
        <li className="navLink">
          <Link to="/monsters/new">Tame New Monsters</Link>
        </li>
      </ul>

      <ul className="navbar">
        <li className="navLink">
          <Link to="/weapons">View the Weapons</Link>
        </li>
        <li className="navLink">
          <Link to="/weapons/new">Forge New Weapon</Link>
        </li>
        <li className="navLink">
          <Link to="/matches">Arena Matches</Link>
        </li>
        <li className="navLink">
          <Link to="/matches/new">Setup a Match</Link>
        </li>
      </ul>
    </header>
  )
}

export default NavBar;

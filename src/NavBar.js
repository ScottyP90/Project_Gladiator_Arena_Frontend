import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
  return (
    <header>

      <h1>Gladiators Arena</h1>

      <ul>
        <li className="navLink">
          <Link to="/gladiators">Gladiators</Link>
        </li>
        <li className="navLink">
          <Link to="/monsters">Monsters</Link>
        </li>
        <li className="navLink">
          <Link to="/weapons">Weapons</Link>
        </li>
        <li className="navLink">
          <Link to="/matches">Arena Matches</Link>
        </li>
      </ul>
    </header>
  )
}

export default NavBar;

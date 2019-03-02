import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar.js'
// import GladiatorList from './components/gladiator/gladiatorList';
// import MonsterList from './components/monster/monsterList';
// import WeaponList from './components/weapon/weaponList';
// import MatchList from './component/match/matchList';
import Request from '../helpers/request';

class MainContainer extends Component{
  constructor(props) {
    super(props);
    this.state = {
      gladiators: [],
      monsters: [],
      weapons: [],
      matches: []
    }

  }

  componentDidMount(){
    let request = new Request()

    request.get('/api/gladiators').then((data) => {
      this.setState({gladiators: data._embedded.gladiators})
    }).then(() => {
      request.get('/api/monsters').then((data) => {
        this.setState({monsters: data._embedded.monsters})
      })
    }).then(() => {
      request.get('/api/weapons').then((data) => {
        this.setState({weapons: data._embedded.weapons})
      })
    }).then(() => {
      request.get('/api/matches').then((data) => {
        this.setState({matches: data._embedded.matches})
      })
    })
  }

  render(){
    return(
      <div>
        <Router>
          <React.Fragment>
            <NavBar/>
          </React.Fragment>
        </Router>
      </div>
    )
  }
}

export default MainContainer

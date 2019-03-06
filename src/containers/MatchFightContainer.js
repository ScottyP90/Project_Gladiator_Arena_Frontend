import React, {Component} from 'react';
import Request from '../helpers/request';
import MatchFight from '../components/match/MatchFight'

class MatchFightContainer extends Component {
  constructor(props) {
    super(props)
    this.handleMonsterUpdate = this.handleMonsterUpdate.bind(this)
    this.handleGladiatorUpdate = this.handleGladiatorUpdate.bind(this)
  }

  handleGladiatorUpdate(gladiator){
    const request = new Request();
    request.put('/api/gladiators/' + gladiator.id, gladiator).then(() => {
    })

  }

  handleMonsterUpdate(monster){
    const request = new Request();
    request.put('/api/monsters/' + monster.id, monster).then(() => {
    })
  }

  render(){

    return <MatchFight match={this.props.match} weapons={this.props.weapons} handleMonsterUpdate={this.handleMonsterUpdate} handleGladiatorUpdate={this.handleGladiatorUpdate}/>

  }
}

export default MatchFightContainer

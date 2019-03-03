import React, {Component} from 'react';
import Request from '../helpers/request';
import MonsterForm from '../components/monster/MonsterForm'

class MonsterFormContainer extends Component {
  constructor(props){
    super(props)
  }

  handleMonsterPost(monster){
    const request = new Request();
    request.post('/api/monsters', monster).then(() => {
      window.location = '/monsters'
    })
  }

  render(){

    return <GladiatorForm handleGladiatorPost = {this.handleMonsterPost} />

  }

}

export default MonsterFormContainer

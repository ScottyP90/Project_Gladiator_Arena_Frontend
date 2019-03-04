import React, {Component} from 'react';
import Request from '../helpers/request';
import MonsterForm from '../components/monster/MonsterForm'

class MonsterFormContainer extends Component {
  constructor(props){
    super(props)
    this.handleMonsterPost = this.handleMonsterPost.bind(this)
  }

  handleMonsterPost(monster){
    const request = new Request();
    request.post('/api/monsters', monster).then(() => {
      window.location = '/monsters'
    })
  }

  render(){

    return <MonsterForm handleMonsterPost = {this.handleMonsterPost} />

  }

}

export default MonsterFormContainer

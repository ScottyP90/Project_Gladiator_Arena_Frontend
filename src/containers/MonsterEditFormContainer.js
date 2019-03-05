import React, {Component} from 'react';
import Request from '../helpers/request';
import MonsterEditForm from '../components/monster/monsterEditForm'

class MonsterEditFormContainer extends Component{
  constructor(props) {
    super(props)
    this.handleMonsterUpdate = this.handleMonsterUpdate.bind(this)
  }

  handleMonsterUpdate(monster){
    const request = new Request();
    request.put('/api/monsters/' + this.props.monster.id, monster).then(() => {
      window.location = '/monsters/' + this.props.monster.id
    })
  }


  render(){

    return <MonsterEditForm monster={this.props.monster} handleMonsterUpdate={this.handleMonsterUpdate}/>

  }
}

export default MonsterEditFormContainer

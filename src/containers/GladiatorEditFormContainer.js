import React, {Component} from 'react';
import Request from '../helpers/request';
import GladiatorEditForm from '../components/gladiator/gladiatorEditForm'

class GladiatorEditFormContainer extends Component{
  constructor(props) {
    super(props)
    this.handleGladiatorUpdate = this.handleGladiatorUpdate.bind(this)
  }

  handleGladiatorUpdate(gladiator){
    const request = new Request();
    request.put('/api/gladiators/' + this.props.gladiator.id, gladiator).then(() => {
      window.location = '/gladiators/' + this.props.gladiator.id
    })
  }

  render(){

    return <GladiatorEditForm weapons={this.props.weapons} gladiator={this.props.gladiator} handleGladiatorUpdate={this.handleGladiatorUpdate} />

  }
}

export default GladiatorEditFormContainer

import React, {Component} from 'react';
import Request from '../helpers/request';
import GladiatorForm from '../components/gladiator/GladiatorForm'

class GladiatorFormContainer extends Component {
  constructor(props){
    super(props)
  }

  handleGladiatorPost(gladiator){
    const request = new Request();
    request.post('/api/gladiators', gladiator).then(() => {
      window.location = '/gladiators'
    })
  }

  render(){

    return <GladiatorForm weapons = {this.props.weapons} handleGladiatorPost = {this.handleGladiatorPost} />

  }

}

export default GladiatorFormContainer

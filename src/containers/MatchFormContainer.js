import React, {Component} from 'react';
import Request from '../helpers/request';
import MatchForm from '../components/match/MatchForm'

class MatchFormContainer extends Component {
  constructor(props){
    super(props)
  }

  handleMatchPost(weapon){
    const request = new Request()
    request.post('/api/weapons', weapon).then(() => {
      window.location = '/weapons'
    })
  }

  render(){

    return <MatchForm gladiators={this.props.gladiators} monsters={this.props.monsters} handleMatchPost={this.handleMatchPost} />

  }

}

export default MatchFormContainer

import React, {Component} from 'react';
import Request from '../helpers/request';
import MatchForm from '../components/match/MatchForm'

class MatchFormContainer extends Component {
  constructor(props){
    super(props)
    this.handleMatchPost = this.handleMatchPost.bind(this)
  }

  handleMatchPost(weapon){
    const request = new Request()
    request.post('/api/matches', weapon).then(() => {
      window.location = '/matches'
    })
  }

  render(){
    
    return <MatchForm gladiators={this.props.gladiators} monsters={this.props.monsters} handleMatchPost={this.handleMatchPost} />

  }

}

export default MatchFormContainer

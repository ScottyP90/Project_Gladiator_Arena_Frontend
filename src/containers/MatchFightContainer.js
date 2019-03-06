import React, {Component} from 'react';
import Request from '../helpers/request';
import MatchFight from '../components/match/MatchFight'

class MatchFight extends Component {
  constructor(props) {
    super(props)
  }

  render(){

    return <MatchFight match={this.props.match} />

  }
}

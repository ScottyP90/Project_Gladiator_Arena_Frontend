import React, {Component} from 'react';
import Request from '../helpers/request';
import WeaponForm from '../components.weapon.WeaponForm'

class WeaponFormContainer extends Component {
  constructor(props){
    super(props)
  }

  handleWeaponPost(Weapon){
    const request = new Request();
    request.post('/api/Weapons', Weapon).then(() => {
      window.location = '/Weapons'
    })
  }

  render(){

    return <GladiatorForm handleGladiatorPost = {this.handleWeaponPost} />

  }

}

export default WeaponFormContainer

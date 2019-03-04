import React, {Component} from 'react';
import Request from '../helpers/request';
import WeaponForm from '../components/weapon/WeaponForm'

class WeaponFormContainer extends Component {
  constructor(props){
    super(props)
    this.handleWeaponPost = this.handleWeaponPost.bind(this)
  }

  handleWeaponPost(Weapon){
    const request = new Request();
    request.post('/api/weapons', Weapon).then(() => {
      window.location = '/weapons'
    })
  }

  render(){

    return <WeaponForm handleWeaponPost = {this.handleWeaponPost} />

  }

}

export default WeaponFormContainer

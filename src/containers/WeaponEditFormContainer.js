import React, {Component} from 'react';
import Request from '../helpers/request';
import WeaponEditForm from '../components/weapon/weaponEditForm'

class WeaponEditFormContainer extends Component{
  constructor(props) {
    super(props)
    this.handleWeaponUpdate = this.handleWeaponUpdate.bind(this)
  }

  handleWeaponUpdate(weapon){
    const request = new Request();
    request.put('/api/weapons/' + this.props.weapon.id, weapon).then(() => {
      window.location = '/weapons/' + this.props.weapon.id
    })
  }

  render(){

    return <WeaponEditForm weapon={this.props.weapon} handleWeaponUpdate={this.handleWeaponUpdate}/>

  }
}

export default WeaponEditFormContainer

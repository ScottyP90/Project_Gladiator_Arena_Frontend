import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar.js'
import GladiatorList from '../components/gladiator/gladiatorList';
import GladiatorDetails from '../components/gladiator/gladiatorDetails';
import MonsterList from '../components/monster/monsterList';
import MonsterDetails from '../components/monster/monsterDetails'
import WeaponList from '../components/weapon/weaponList';
import WeaponDetails from '../components/weapon/weaponDetails'
import MatchList from '../components/match/matchList';
import MatchDetails from '../components/match/matchDetails'
import MatchFight from '../components/match/MatchFight';
import GladiatorFormContainer from './GladiatorFormContainer'
import GladiatorEditFormContainer from './GladiatorEditFormContainer'
import MonsterFormContainer from './MonsterFormContainer'
import MonsterEditFormContainer from './MonsterEditFormContainer'
import WeaponFormContainer from './WeaponFormContainer'
import WeaponEditFormContainer from './WeaponEditFormContainer'
import MatchFormContainer from './MatchFormContainer'
import Request from '../helpers/request';

class MainContainer extends Component{
  constructor(props) {
    super(props);
    this.state = {
      gladiators: [],
      monsters: [],
      weapons: [],
      matches: []
    }

    this.findMatchById = this.findMatchById.bind(this)
    this.findGladiatorById = this.findGladiatorById.bind(this)
    this.handleGladiatorDelete = this.handleGladiatorDelete.bind(this)
    this.findMonsterById = this.findMonsterById.bind(this)
    this.handleMonsterDelete = this.handleMonsterDelete.bind(this)
    this.findWeaponById = this.findWeaponById.bind(this)
    this.handleWeaponDelete = this.handleWeaponDelete.bind(this)
    this.findSingleMatchById = this.findSingleMatchById.bind(this)
    this.handleMatchDelete = this.handleMatchDelete.bind(this)
    this.handleAttack = this.handleAttack.bind(this)
    this.handleHeal = this.handleHeal.bind(this)
    this.handleMatchEnd = this.handleMatchEnd.bind(this)
  }

  componentDidMount(){
    let request = new Request()
    request.get('/api/gladiators').then((data) => {
      this.setState({gladiators: data._embedded.gladiators})
    }).then(() => {
      request.get('/api/monsters').then((data) => {
        this.setState({monsters: data._embedded.monsters})
      })
    }).then(() => {
      request.get('/api/weapons').then((data) => {
        this.setState({weapons: data._embedded.weapons})
      })
    }).then(() => {
      request.get('/api/matches').then((data) => {
        this.setState({matches: data._embedded.matches})
      })
    })
  }

  findMatchById(id){
    const fight = this.state.matches.find((match) => {
      return match.id === parseInt(id);
    })
    return fight
  }

  findGladiatorById(id){
    const gladiator = this.state.gladiators.find((gladiator) => {
      return gladiator.id === parseInt(id);
    })
    return gladiator
  }

  handleGladiatorDelete(id){
    const request = new Request();
    const url = '/api/gladiators/' + id;
    request.delete(url).then(() => {
      window.location = '/gladiators';
    });
  }

  findMonsterById(id){
    const monster = this.state.monsters.find((monster) => {
      return monster.id === parseInt(id);
    })
    return monster
  }

  handleMonsterDelete(id){
    const request = new Request();
    const url = '/api/monsters/' + id;
    request.delete(url).then(() => {
      window.location = '/monsters'
    })
  }

  findWeaponById(id){
    const weapon= this.state.weapons.find((weapon) => {
      return weapon.id === parseInt(id);
    })
    return weapon
  }

  handleWeaponDelete(id){
    const request = new Request();
    const url = '/api/weapons/' + id;
    request.delete(url).then(() => {
      window.location = '/weapons'
    })
  }

  findSingleMatchById(id){
    const match = this.state.matches.find((match) => {
      return match.id === parseInt(id);
    })
    return match
  }

  handleMatchDelete(id){
    const request = new Request();
    const url = '/api/matches/' + id;
    request.delete(url).then(() => {
      window.location = '/matches'
    })
  }

  handleAttack(gladiatorId,monsterId,matchId){
    const request = new Request();
    const url = '/api/matches/fight/' + gladiatorId + '/vs/' + monsterId + '/match/' + matchId
    request.put(url)
  }

  handleHeal(gladiatorId,monsterId,matchId){
    const request = new Request();
    const url = '/api/matches/heal/' + gladiatorId + '/vs/' + monsterId + '/match/' + matchId
    request.put(url)
  }
  handleMatchEnd(gladiatorId,monsterId,matchId){
    const request = new Request();
    const url = '/api/matches/reset/' + gladiatorId + '/vs/' + monsterId + '/match/' + matchId
    request.put(url).then(() => {
      window.location = '/matches'
    })
  }


  render(){

    return(
      <div className="center">
        <Router>
          <React.Fragment>
            <NavBar/>
            <Switch>
              <Route exact path="/gladiators" render={(props) => <GladiatorList gladiators={this.state.gladiators}/>}/>

              <Route exact path="/gladiators/new" render={(props) => {
                return <GladiatorFormContainer weapons={this.state.weapons} />
              }}/>

              <Route exact path="/monsters" render={(props) => <MonsterList monsters={this.state.monsters}/>}/>

              <Route exact path="/monsters/new" render={(props) => {
                return <MonsterFormContainer/>
              }}/>

              <Route exact path="/weapons" render={(props) => <WeaponList weapons={this.state.weapons}/>}/>

              <Route exact path="/weapons/new" render={(props) => {
                return <WeaponFormContainer/>
              }}/>

              <Route exact path="/matches" render={(props) => <MatchList matches={this.state.matches}/>}/>

              <Route exact path="/matches/new" render={(props) => {
                return <MatchFormContainer gladiators={this.state.gladiators} monsters={this.state.monsters}/>
              }}/>

              <Route exact path="/matches/fight/:id" render={(props) =>{
                const match = this.findMatchById(props.match.params.id);
                return <MatchFight match={match} onAttack={this.handleAttack} onHeal={this.handleHeal} onFinishMatch={this.handleMatchEnd}/>
              }}/>

              <Route exact path="/gladiators/edit/:id" render={(props) =>{
                const gladiator = this.findGladiatorById(props.match.params.id);
                return <GladiatorEditFormContainer gladiator={gladiator} weapons={this.state.weapons}/>
              }}/>

              <Route exact path="/gladiators/:id" render={(props) =>{
                const gladiator = this.findGladiatorById(props.match.params.id);
                return <GladiatorDetails gladiator={gladiator} onDelete={this.handleGladiatorDelete}/>
              }}/>

              <Route exact path="/monsters/edit/:id" render={(props) =>{
                const monster = this.findMonsterById(props.match.params.id);
                return <MonsterEditFormContainer monster={monster}/>
              }}/>

              <Route exact path="/monsters/:id" render={(props) =>{
                const monster = this.findMonsterById(props.match.params.id);
                return <MonsterDetails monster={monster} onDelete={this.handleMonsterDelete}/>
              }}/>

              <Route exact path="/weapons/edit/:id" render={(props) =>{
                const weapon = this.findWeaponById(props.match.params.id);
                return <WeaponEditFormContainer weapon={weapon}/>
              }}/>

              <Route exact path="/weapons/:id" render={(props) =>{
                const weapon = this.findWeaponById(props.match.params.id);
                return <WeaponDetails weapon={weapon} onDelete={this.handleWeaponDelete}/>
              }}/>

              <Route exact path="/matches/:id" render={(props) =>{
                const match = this.findSingleMatchById(props.match.params.id);
                return <MatchDetails match={match} onDelete={this.handleMatchDelete}/>
              }}/>


            </Switch>
          </React.Fragment>
        </Router>
      </div>
    )
  }
}

export default MainContainer

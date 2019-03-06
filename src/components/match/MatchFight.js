import React from 'react';

const MatchFight = (props) => {
  if (!props.match) return null;

  const findWeapon = () => {
    const foundWeapon = props.weapons.find((weapon) => {
      return  weapon.gladiator === props.match.gladiator;
    })

    return foundWeapon;
  }

  function monsterAttack(){
    const monsterDice = Math.floor(Math.random() * 20) + 1

    let monsterDamage = null

    if(monsterDice >= 18){
      monsterDamage = Math.round((props.match.monster.attack - props.match.gladiator.defence) * 1.2)
      if (monsterDamage < 0) {
        monsterDamage = 0
      }
      props.match.gladiator.health = props.match.gladiator.health - monsterDamage
    }else if (monsterDice >= 4) {
      monsterDamage = (props.match.monster.attack - props.match.gladiator.defence)
      if (monsterDamage < 0) {
        monsterDamage = 0
      }
      props.match.gladiator.health = props.match.gladiator.health - monsterDamage
      if(props.match.gladiator.health < 0){
        props.match.gladiator.health = 0
      }
    }
  }

  function gladiatorAttack() {
    const gladiatorDice = Math.floor(Math.random() * 20) + 1

    let gladiatorDamage = null
    if(gladiatorDice >= 18){
      gladiatorDamage = Math.round(((props.match.gladiator.strength) - props.match.monster.defence) * 1.2)
      if (gladiatorDamage < 0) {
        gladiatorDamage = 0
      }
      props.match.monster.health = props.match.monster.health - gladiatorDamage
    }else if (gladiatorDice >= 4) {
      gladiatorDamage = ((props.match.gladiator.strength) - props.match.monster.defence)
      if (gladiatorDamage < 0) {
        gladiatorDamage = 0
      }
      props.match.monster.health = props.match.monster.health - gladiatorDamage
      if (props.match.monster.health < 0){
        props.match.monster.health = 0
      }
    }
  }

  function gladiatorHeal(){

    if(props.match.gladiator.healingCap > 0){
      props.match.gladiator.healingCap = props.match.gladiator.healingCap - 1

      let totalHeal = Math.round(props.match.gladiator.healthCap / 1.2)
      if ((totalHeal + props.match.gladiator.health) > props.match.gladiator.healthCap) {
        totalHeal = props.match.gladiator.healthCap - props.match.gladiator.health
      }

      props.match.gladiator.health = props.match.gladiator.health + totalHeal
    }

  }

  function endMatch() {

    props.match.gladiator.health = props.match.gladiator.healthCap

    props.match.monster.health = props.match.monster.healthCap

    props.match.gladiator.healingCap = 3
  }



  function handleAttack() {


    monsterAttack()

    props.handleGladiatorUpdate(props.match.gladiator)


    gladiatorAttack()

    props.handleMonsterUpdate(props.match.monster)

    window.location = '/matches/fight/' + props.match.id
  }



  function handleHeal() {

    gladiatorHeal()

    props.handleGladiatorUpdate(props.match.gladiator)

    window.location = '/matches/fight/' + props.match.id

  }

  function handleFinishMatch() {

    endMatch()

    props.handleGladiatorUpdate(props.match.gladiator)

    props.handleMonsterUpdate(props.match.monster)

    window.location = '/matches/'

  }

  return(
    <div className="container">
      <div className="detailsContainer">
        <div>
          <h4 className="monsterName">{props.match.monster.monsterName} {props.match.monster.title}</h4>
          <p className="health">HP: {props.match.monster.health}/{props.match.monster.healthCap}</p>
        </div>
        <div>
          <h4>{props.match.gladiator.name} {props.match.gladiator.title}</h4>
          <p className="health">HP: {props.match.gladiator.health}/{props.match.gladiator.healthCap}</p>
          <p className="healing">Number of heals: {props.match.gladiator.healingCap}</p>
        </div>
        <button className="button" onClick={handleAttack}>Attack</button>
        <button className="button" onClick={handleHeal}>Heal</button>
        <button className="button" onClick={handleFinishMatch}>End Match</button>
      </div>
    </div>
  )

}

export default MatchFight

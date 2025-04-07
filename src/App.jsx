import { useState } from "react"
import ZombieFighters from "./ZombieFightersData"
import Card from "./components/Card/Card"
import TeamDetails from './components/TeamDetails/TeamDetails.jsx'
import './Fighters.css'




const App = () => {

  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [zombieFighters, setZombieFighters] = useState(ZombieFighters)




  const handleAddFighter = (fighterToAdd) => {
    if (money < fighterToAdd.price) {
      console.log('Not enough money')
      return
    }

    setTeam((previousTeam) => [...previousTeam, fighterToAdd])
    setZombieFighters((previousFighters) =>
      previousFighters.filter((fighter) => fighter.id !== fighterToAdd.id)
    )
    setMoney((prevMoney) => prevMoney - fighterToAdd.price)
  }




  const handleRemoveFighter = (fighterToRemove) => {
    setTeam((previousTeam) => previousTeam.filter((fighter) => fighter.id !== fighterToRemove.id))
    setZombieFighters((previousFighters) => [...previousFighters, fighterToRemove])
    setMoney((previousMoney) => previousMoney + fighterToRemove.price)
  }




  const totalStrength = team.reduce((sum, fighter) => sum + fighter.strength, 0)
  const totalAgility = team.reduce((sum, fighter) => sum + fighter.agility, 0)




  return (
    <>
      <TeamDetails money={ money } totalStrength={ totalStrength } totalAgility={ totalAgility } />

      {team.length === 0 ? (
        <div className="fighterContainer">
          <p>Pick some team members!</p>
        </div>
      ) : (
        <div className="fighterContainer">
          {team.map((fighter) => (
            <div key={ fighter.id }>
              <Card fighter={ fighter } />
              <button onClick={() => handleRemoveFighter(fighter)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}


      <h2>Fighters</h2>
      <div className="fighterContainer">
        {zombieFighters.map((fighter) => (
          <div key={ fighter.id }>
            <Card fighter={ fighter } />
            <button onClick={() => handleAddFighter(fighter)}>
              Add
            </button>
          </div>
        ))}
      </div>
    </>
  )

}
export default App
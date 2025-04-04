import { useState } from "react";
import ZombieFighters from "./ZombieFightersData";
import Card from "./components/Card/Card";
import TeamDetails from './components/TeamDetails/TeamDetails.jsx'
import './Fighters.css'




const App = () => {

  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)



  
  return (
    <>
      < TeamDetails />

      <div className="fighterContainer">
        {ZombieFighters.map((fighter) => (
          < Card fighter={fighter} />
        ))}
      </div>
    
    </>
  )
}

export default App
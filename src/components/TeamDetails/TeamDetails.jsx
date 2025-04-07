const TeamDetails = ({ money, totalStrength, totalAgility }) => {

    return (
        <div className="teamDetails">
            <h1>Zombie Fighters</h1>
            <h2>Money: { money }</h2>
            <h2>Team Strength: { totalStrength }</h2>
            <h2>Team Agility: { totalAgility }</h2>
            <h2>Team </h2>
        </div>
    )
}

export default TeamDetails
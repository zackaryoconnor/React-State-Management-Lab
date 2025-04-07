const Card = (props) => {

  const { fighter } = props

  return (
    <div className="card">
      <ul>
        <li><img src={fighter.img} alt="fighter image" /></li>
        <li>{fighter.name}</li>
        <li>{fighter.price}</li>
        <li>{fighter.strength}</li>
        <li>{fighter.agility}</li>
      </ul >
    </div>
  )
}

export default Card
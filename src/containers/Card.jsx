
const Card = ({ characters }) => {
  return (
    <>
      { characters?.map((character) => {
      return (
        <>
        <img src={character.image} />
        <p>{character.name}</p>
        <p>{character.location.name}</p>
        </>
      )
    })}
    </>
  )
}

export default Card
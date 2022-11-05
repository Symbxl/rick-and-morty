

const EpCard = ({ episodes }) => {

  console.log(episodes)
  return (
    <>
      { episodes?.map((episode) => {
        console.log(episode)
      return (
        <>
        <p>{episode.name}</p>
        <p>{episode.episode}</p>
        </>
      )
    })}
    </>
  )
}

export default EpCard
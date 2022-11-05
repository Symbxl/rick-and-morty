import { useCharacters } from "../hooks/useCharacter"
import Card from "../containers/Card"

const Characters = () => {
  const { data, loading, error } = useCharacters()

  if (loading) return <div>...loading</div>
  
  if (error) return <div>ERROR WHILE GETTING CHARACTERS {error.error}</div>
    
  return <Card characters={data.characters.results} />

}

export default Characters